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
  interviewDate?: string | null;
};
export type CreateJobApplication = Omit<JobApplication, "id">;

export async function getApplications(): Promise<JobApplication[]> {
  const res = await fetch("http://localhost:3000/api/applications");
  return res.json();
}

export async function createApplication(
  application: Omit<JobApplication, "id">,
) {
  const res = await fetch("http://localhost:3000/api/applications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(application),
  });

  return res.json();
}
export async function getApplication(id: number) {
  const res = await fetch(`http://localhost:3000/api/applications/${id}`);
  return res.json();
}
export async function deleteApplication(id: number) {
  await fetch(`http://localhost:3000/api/applications/${id}`, {
    method: "DELETE",
  });
}

export async function updateApplication(
  id: number,
  application: CreateJobApplication,
) {
  const res = await fetch(`http://localhost:3000/api/applications/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(application),
  });

  return res.json();
}
