import { Module } from "@nestjs/common";

import { ContractsController } from "./contracts.controller.js";
import { HealthController } from "./health.controller.js";
import { ProjectsController } from "./projects.controller.js";
import { ProjectsService } from "./projects.service.js";

@Module({
  controllers: [HealthController, ContractsController, ProjectsController],
  providers: [ProjectsService],
})
export class AppModule {}
