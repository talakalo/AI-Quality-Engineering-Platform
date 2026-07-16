import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
} from "@nestjs/common";
import type { Project } from "@autoqa/domain";

import { ProjectsService } from "./projects.service.js";

interface CreateProjectBody {
  readonly name?: unknown;
}

@Controller("v1/projects")
export class ProjectsController {
  constructor(private readonly projects: ProjectsService) {}

  @Post()
  create(
    @Headers("x-organization-id") organizationId: string | undefined,
    @Body() body: CreateProjectBody,
  ): Project {
    const tenantId = this.requireOrganizationId(organizationId);
    if (typeof body.name !== "string" || body.name.trim().length < 2) {
      throw new BadRequestException({ code: "invalid_project_name" });
    }
    return this.projects.create({ organizationId: tenantId, name: body.name });
  }

  @Get()
  list(
    @Headers("x-organization-id") organizationId: string | undefined,
  ): readonly Project[] {
    return this.projects.list(this.requireOrganizationId(organizationId));
  }

  @Get(":id")
  get(
    @Param("id") id: string,
    @Headers("x-organization-id") organizationId: string | undefined,
  ): Project {
    return this.projects.get(id, this.requireOrganizationId(organizationId));
  }

  private requireOrganizationId(value: string | undefined): string {
    if (value === undefined || value.trim().length === 0) {
      throw new BadRequestException({ code: "organization_id_required" });
    }
    return value;
  }
}
