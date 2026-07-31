export type JobApplication = {
  id: number;
  companyName: string;
  jobTitle: string;
  status: string;
  location?: string;
  salaryRange?: string;
  jobUrl?: string;
  notes?: string;
  appliedDate?: string;
  interviewDate?: string;
};

export type CreateJobApplication = Omit<JobApplication, "id">;
