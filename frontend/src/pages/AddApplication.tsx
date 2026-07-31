import { useState } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createApplication } from "../api/applications";
import ApplicationForm, {
  type ApplicationFormValues,
} from "../components/ApplicationForm";

export default function AddApplication() {
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createApplication({
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
            Add Job Application
          </Typography>

          <ApplicationForm
            form={form}
            buttonText="Save Application"
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Paper>
      </Container>
    </Box>
  );
}
