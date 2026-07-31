import { CreateJobApplication, JobApplication } from "./Application";

export interface ApplicationRepository {
  findAll(): Promise<JobApplication[]>;
  findById(id: number): Promise<JobApplication | null>;
  create(application: CreateJobApplication): Promise<JobApplication>;
  update(
    id: number,
    application: CreateJobApplication,
  ): Promise<JobApplication | null>;
  delete(id: number): Promise<void>;
}
