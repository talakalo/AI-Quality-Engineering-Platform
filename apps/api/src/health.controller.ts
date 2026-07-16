import { Controller, Get } from "@nestjs/common";

export interface HealthResponse {
  readonly status: "ok";
  readonly service: "autoqa-api";
}

@Controller("health")
export class HealthController {
  @Get()
  getHealth(): HealthResponse {
    return { status: "ok", service: "autoqa-api" };
  }
}
