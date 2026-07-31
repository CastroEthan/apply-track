import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";
import type { JobApplication } from "../api/applications";
import { deleteApplication } from "../api/applications";

type Props = {
  application: JobApplication;
  onDelete: () => void;
};

export default function ApplicationCard({ application, onDelete }: Props) {
  const [open, setOpen] = useState(false);

  async function handleDelete() {
    await deleteApplication(application.id);
    setOpen(false);
    onDelete();
  }
  function getChipColor(status: string) {
    switch (status.toLowerCase()) {
      case "offer":
        return "success";
      case "interviewing":
        return "warning";
      case "rejected":
        return "error";
      case "withdrawn":
        return "default";
      case "applied":
      default:
        return "primary";
    }
  }

  const jobUrl = application.jobUrl?.startsWith("http")
    ? application.jobUrl
    : `https://${application.jobUrl}`;

  return (
    <>
      <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Stack spacing={2}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: "bold" }}>
              {application.companyName}
            </Typography>

            <Typography color="text.secondary">
              {application.jobTitle}
            </Typography>

            <Chip
              label={application.status}
              color={getChipColor(application.status)}
              sx={{ width: "fit-content", textTransform: "capitalize" }}
            />

            {application.location && (
              <Typography>Location: {application.location}</Typography>
            )}

            {application.salaryRange && (
              <Typography>Salary: {application.salaryRange}</Typography>
            )}

            {application.notes && (
              <Typography color="text.secondary">
                {application.notes}
              </Typography>
            )}

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              {application.jobUrl && (
                <Button
                  href={jobUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<OpenInNewIcon />}
                >
                  View Job
                </Button>
              )}

              <Button
                component={Link}
                to={`/edit/${application.id}`}
                variant="contained"
                startIcon={<EditIcon />}
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => setOpen(true)}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete application?</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your application for{" "}
            {application.companyName}? This cannot be undone.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>

          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
