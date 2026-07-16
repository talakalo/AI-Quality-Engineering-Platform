import type {
  CorrelationId,
  OrganizationId,
  ProjectId,
} from "./identifiers.js";

export type DomainActorType = "user" | "service" | "agent" | "system";

export interface DomainEvent<TType extends string, TPayload> {
  readonly eventId: string;
  readonly eventType: TType;
  readonly eventVersion: number;
  readonly occurredAt: string;
  readonly organizationId: OrganizationId;
  readonly projectId: ProjectId;
  readonly aggregateType: string;
  readonly aggregateId: string;
  readonly aggregateVersion: number;
  readonly correlationId: CorrelationId;
  readonly causationId?: string;
  readonly actorType: DomainActorType;
  readonly actorId: string;
  readonly payload: TPayload;
}

export interface CapabilityApprovedPayload {
  readonly capabilityId: string;
  readonly approvedMaturity: string;
  readonly evidenceReferences: readonly string[];
}

export type CapabilityApproved = DomainEvent<
  "CapabilityApproved",
  CapabilityApprovedPayload
>;
