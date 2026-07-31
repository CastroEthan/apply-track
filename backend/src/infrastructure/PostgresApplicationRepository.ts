import { Pool } from "pg";
import { CreateJobApplication, JobApplication } from "../domain/Application";
import { ApplicationRepository } from "../domain/ApplicationRepository";

function mapRow(row: any): JobApplication {
  return {
    id: row.id,
    companyName: row.company_name,
    jobTitle: row.job_title,
    status: row.status,
    location: row.location,
    salaryRange: row.salary_range,
    jobUrl: row.job_url,
    notes: row.notes,
    appliedDate: row.applied_date,
    interviewDate: row.interview_date,
  };
}

export class PostgresApplicationRepository implements ApplicationRepository {
  constructor(private pool: Pool) {}

  async findAll(): Promise<JobApplication[]> {
    const result = await this.pool.query(`
      SELECT *
      FROM applications
      ORDER BY created_at DESC
    `);

    return result.rows.map(mapRow);
  }

  async findById(id: number): Promise<JobApplication | null> {
    const result = await this.pool.query(
      `
      SELECT *
      FROM applications
      WHERE id = $1
      `,
      [id],
    );

    if (result.rows.length === 0) return null;

    return mapRow(result.rows[0]);
  }

  async create(application: CreateJobApplication): Promise<JobApplication> {
    const result = await this.pool.query(
      `
      INSERT INTO applications (
        company_name,
        job_title,
        status,
        location,
        salary_range,
        job_url,
        notes,
        applied_date,
        interview_date
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *
      `,
      [
        application.companyName,
        application.jobTitle,
        application.status,
        application.location,
        application.salaryRange,
        application.jobUrl,
        application.notes,
        application.appliedDate,
        application.interviewDate,
      ],
    );

    return mapRow(result.rows[0]);
  }

  async update(
    id: number,
    application: CreateJobApplication,
  ): Promise<JobApplication | null> {
    const result = await this.pool.query(
      `
      UPDATE applications
      SET
        company_name = $1,
        job_title = $2,
        status = $3,
        location = $4,
        salary_range = $5,
        job_url = $6,
        notes = $7,
        applied_date = $8,
        interview_date = $9,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $10
      RETURNING *
      `,
      [
        application.companyName,
        application.jobTitle,
        application.status,
        application.location,
        application.salaryRange,
        application.jobUrl,
        application.notes,
        application.appliedDate,
        application.interviewDate,
        id,
      ],
    );

    if (result.rows.length === 0) return null;

    return mapRow(result.rows[0]);
  }

  async delete(id: number): Promise<void> {
    await this.pool.query(
      `
      DELETE FROM applications
      WHERE id = $1
      `,
      [id],
    );
  }
}
