import { Module } from "@nestjs/common";

import { ContractsController } from "./contracts.controller.js";
import { HealthController } from "./health.controller.js";

@Module({
  controllers: [HealthController, ContractsController],
})
export class AppModule {}
