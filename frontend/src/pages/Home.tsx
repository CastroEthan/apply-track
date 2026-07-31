import { useEffect, useState } from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import ApplicationCard from "../components/ApplicationCard";
import { getApplications, type JobApplication } from "../api/applications";

export default function Home() {
  const [applications, setApplications] = useState<JobApplication[]>([]);

  useEffect(() => {
    async function loadApplications() {
      const data = await getApplications();
      setApplications(data);
    }

    loadApplications();
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f7fb", py: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: "bold" }} gutterBottom>
          Job Application Dashboard
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Track your job search, interviews, offers, and rejections in one
          place.
        </Typography>

        <Paper sx={{ p: 3, mb: 4, borderRadius: 4 }}>
          <Typography variant="h6">
            Total Applications: {applications.length}
          </Typography>
        </Paper>

        {applications.length === 0 ? (
          <Typography>No applications yet. Add your first one.</Typography>
        ) : (
          <Grid container spacing={3}>
            {applications.map((application) => (
              <Grid size={{ xs: 12, md: 6 }} key={application.id}>
                <ApplicationCard
                  application={application}
                  onDelete={() =>
                    setApplications((currentApplications) =>
                      currentApplications.filter(
                        (item) => item.id !== application.id,
                      ),
                    )
                  }
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
