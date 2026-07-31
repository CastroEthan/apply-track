import { CreateJobApplication } from "../domain/Application";
import { ApplicationRepository } from "../domain/ApplicationRepository";

export class ApplicationService {
  constructor(private applicationRepo: ApplicationRepository) {}

  async getAllApplications() {
    return this.applicationRepo.findAll();
  }

  async getApplicationById(id: number) {
    return this.applicationRepo.findById(id);
  }

  async createApplication(application: CreateJobApplication) {
    return this.applicationRepo.create(application);
  }

  async updateApplication(id: number, application: CreateJobApplication) {
    return this.applicationRepo.update(id, application);
  }

  async deleteApplication(id: number) {
    return this.applicationRepo.delete(id);
  }
}
