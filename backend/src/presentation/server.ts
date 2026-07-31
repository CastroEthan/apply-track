import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "../infrastructure/db";
import { PostgresApplicationRepository } from "../infrastructure/PostgresApplicationRepository";
import { ApplicationService } from "../application/ApplicationService";
import { createApplicationRoutes } from "./applicationRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const applicationRepo = new PostgresApplicationRepository(pool);
const applicationService = new ApplicationService(applicationRepo);

app.get("/", (_req, res) => {
  res.send("ApplyTrack API is running");
});

app.use("/api/applications", createApplicationRoutes(applicationService));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
