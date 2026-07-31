import { useEffect, useState } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getApplication, updateApplication } from "../api/applications";
import ApplicationForm, {
  type ApplicationFormValues,
} from "../components/ApplicationForm";

export default function EditApplication() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<ApplicationFormValues>({
    companyName: "",
    jobTitle: "",
    status: "applied",
    location: "",
    salaryRange: "",
    jobUrl: "",
    notes: "",
    appliedDate: "",
    interviewDate: "",
  });

  useEffect(() => {
    async function loadApplication() {
      const application = await getApplication(Number(id));

      setForm({
        companyName: application.companyName || "",
        jobTitle: application.jobTitle || "",
        status: application.status || "applied",
        location: application.location || "",
        salaryRange: application.salaryRange || "",
        jobUrl: application.jobUrl || "",
        notes: application.notes || "",
        appliedDate: application.appliedDate
          ? application.appliedDate.slice(0, 10)
          : "",
        interviewDate: application.interviewDate
          ? application.interviewDate.slice(0, 10)
          : "",
      });
    }

    loadApplication();
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await updateApplication(Number(id), {
      ...form,
      interviewDate: form.interviewDate || null,
    });

    navigate("/");
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f7fb", py: 5 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4, borderRadius: 4 }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Edit Application
          </Typography>

          <ApplicationForm
            form={form}
            buttonText="Save Changes"
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Paper>
      </Container>
    </Box>
  );
}
