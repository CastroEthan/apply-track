import { Router } from "express";
import { ApplicationService } from "../application/ApplicationService";

export function createApplicationRoutes(
  applicationService: ApplicationService,
) {
  const router = Router();

  router.get("/", async (_req, res) => {
    const applications = await applicationService.getAllApplications();
    res.json(applications);
  });

  router.get("/:id", async (req, res) => {
    const application = await applicationService.getApplicationById(
      Number(req.params.id),
    );

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json(application);
  });

  router.post("/", async (req, res) => {
    const application = await applicationService.createApplication(req.body);
    res.status(201).json(application);
  });

  router.put("/:id", async (req, res) => {
    const application = await applicationService.updateApplication(
      Number(req.params.id),
      req.body,
    );

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json(application);
  });

  router.delete("/:id", async (req, res) => {
    await applicationService.deleteApplication(Number(req.params.id));
    res.status(204).send();
  });

  return router;
}
