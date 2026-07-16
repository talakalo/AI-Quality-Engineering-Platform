import { randomUUID } from "node:crypto";

import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { organizationId, projectId, type Project } from "@autoqa/domain";

export interface CreateProjectCommand {
  readonly organizationId: string;
  readonly name: string;
}

@Injectable()
export class ProjectsService {
  private readonly projects = new Map<string, Project>();

  create(command: CreateProjectCommand): Project {
    const name = command.name.trim();
    const duplicate = [...this.projects.values()].some(
      (project) =>
        project.organizationId === command.organizationId &&
        project.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    if (duplicate) {
      throw new ConflictException({ code: "project_name_conflict" });
    }

    const project: Project = {
      id: projectId(randomUUID()),
      organizationId: organizationId(command.organizationId),
      name,
      createdAt: new Date().toISOString(),
    };
    this.projects.set(project.id, project);
    return project;
  }

  list(organizationId: string): readonly Project[] {
    return [...this.projects.values()].filter(
      (project) => project.organizationId === organizationId,
    );
  }

  get(id: string, organizationId: string): Project {
    const project = this.projects.get(id);
    if (project === undefined || project.organizationId !== organizationId) {
      throw new NotFoundException({ code: "project_not_found" });
    }
    return project;
  }
}
