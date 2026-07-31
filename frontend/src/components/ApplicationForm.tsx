import type React from "react";
import { Button, MenuItem, Stack, TextField } from "@mui/material";

export type ApplicationFormValues = {
  companyName: string;
  jobTitle: string;
  status: string;
  location: string;
  salaryRange: string;
  jobUrl: string;
  notes: string;
  appliedDate: string;
  interviewDate: string;
};

type Props = {
  form: ApplicationFormValues;
  buttonText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function ApplicationForm({
  form,
  buttonText,
  onChange,
  onSubmit,
}: Props) {
  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={3}>
        <TextField
          label="Company Name"
          name="companyName"
          value={form.companyName}
          onChange={onChange}
          required
          fullWidth
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          value={form.jobTitle}
          onChange={onChange}
          required
          fullWidth
        />

        <TextField
          select
          label="Status"
          name="status"
          value={form.status}
          onChange={onChange}
          fullWidth
        >
          <MenuItem value="applied">Applied</MenuItem>
          <MenuItem value="interviewing">Interviewing</MenuItem>
          <MenuItem value="offer">Offer</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
          <MenuItem value="withdrawn">Withdrawn</MenuItem>
        </TextField>

        <TextField
          label="Location"
          name="location"
          value={form.location}
          onChange={onChange}
          fullWidth
        />
        <TextField
          label="Salary Range"
          name="salaryRange"
          value={form.salaryRange}
          onChange={onChange}
          fullWidth
        />
        <TextField
          label="Job URL"
          name="jobUrl"
          value={form.jobUrl}
          onChange={onChange}
          fullWidth
        />

        <TextField
          label="Applied Date"
          name="appliedDate"
          type="date"
          value={form.appliedDate}
          onChange={onChange}
          fullWidth
        />
        <TextField
          label="Interview Date"
          name="interviewDate"
          type="date"
          value={form.interviewDate}
          onChange={onChange}
          fullWidth
        />

        <TextField
          label="Notes"
          name="notes"
          value={form.notes}
          onChange={onChange}
          multiline
          rows={4}
          fullWidth
        />

        <Button type="submit" variant="contained" size="large">
          {buttonText}
        </Button>
      </Stack>
    </form>
  );
}
