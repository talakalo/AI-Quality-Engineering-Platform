import type {
  ApplicationId,
  OrganizationId,
  ProjectId,
  QualityRunId,
} from "./identifiers.js";

export interface TenantOwned {
  readonly organizationId: OrganizationId;
}

export interface ProjectOwned extends TenantOwned {
  readonly projectId: ProjectId;
}

export interface Organization {
  readonly id: OrganizationId;
  readonly name: string;
  readonly createdAt: string;
}

export interface Project extends TenantOwned {
  readonly id: ProjectId;
  readonly name: string;
  readonly createdAt: string;
}

export type InputSourceKind =
  | "website"
  | "openapi"
  | "repository"
  | "requirements_document"
  | "playwright_framework";

export interface InputSource extends ProjectOwned {
  readonly id: string;
  readonly applicationId: ApplicationId;
  readonly kind: InputSourceKind;
  readonly version: string;
  readonly fingerprint: string;
  readonly registeredAt: string;
}

export interface ApplicationSnapshot extends ProjectOwned {
  readonly id: string;
  readonly applicationId: ApplicationId;
  readonly inputSourceIds: readonly string[];
  readonly createdAt: string;
}

export interface Requirement extends ProjectOwned {
  readonly id: string;
  readonly version: number;
  readonly title: string;
  readonly sourceReferences: readonly string[];
  readonly acceptanceCriteria: readonly string[];
  readonly approved: boolean;
}

export interface Risk extends ProjectOwned {
  readonly id: string;
  readonly requirementIds: readonly string[];
  readonly scenario: string;
  readonly impact: 1 | 2 | 3 | 4 | 5;
  readonly likelihood: 1 | 2 | 3 | 4 | 5;
  readonly detectability: 1 | 2 | 3 | 4 | 5;
}

export interface TestCase extends ProjectOwned {
  readonly id: string;
  readonly requirementIds: readonly string[];
  readonly riskIds: readonly string[];
  readonly title: string;
  readonly expectedEvidence: readonly string[];
}

export interface Evidence extends ProjectOwned {
  readonly id: string;
  readonly qualityRunId: QualityRunId;
  readonly kind: string;
  readonly contentHash: string;
  readonly sourceReference: string;
  readonly createdAt: string;
}

export type FindingClassification =
  | "bug"
  | "automation_defect"
  | "environment_issue"
  | "data_issue"
  | "flaky_behavior"
  | "duplicate"
  | "unknown";

export interface Finding extends ProjectOwned {
  readonly id: string;
  readonly classification: FindingClassification;
  readonly evidenceIds: readonly string[];
  readonly summary: string;
  readonly confidence?: number;
}

export interface Approval extends ProjectOwned {
  readonly id: string;
  readonly action: string;
  readonly scopeReference: string;
  readonly actorId: string;
  readonly decision: "granted" | "denied";
  readonly decidedAt: string;
  readonly expiresAt?: string;
}

export type DomainInvariantCode =
  | "tenant_mismatch"
  | "missing_traceability"
  | "missing_evidence"
  | "invalid_confidence"
  | "expired_approval";

export interface DomainInvariantViolation {
  readonly code: DomainInvariantCode;
  readonly objectId: string;
  readonly message: string;
}

export function validateTestCase(
  testCase: TestCase,
): readonly DomainInvariantViolation[] {
  if (testCase.requirementIds.length + testCase.riskIds.length === 0) {
    return [
      {
        code: "missing_traceability",
        objectId: testCase.id,
        message: "A test case must reference at least one requirement or risk.",
      },
    ];
  }
  return [];
}

export function validateFinding(
  finding: Finding,
): readonly DomainInvariantViolation[] {
  const violations: DomainInvariantViolation[] = [];
  if (finding.evidenceIds.length === 0) {
    violations.push({
      code: "missing_evidence",
      objectId: finding.id,
      message: "A finding must reference evidence.",
    });
  }
  if (
    finding.confidence !== undefined &&
    (finding.confidence < 0 || finding.confidence > 1)
  ) {
    violations.push({
      code: "invalid_confidence",
      objectId: finding.id,
      message: "Confidence must be between 0 and 1.",
    });
  }
  return violations;
}

export function validateApproval(
  approval: Approval,
  now: Date,
): readonly DomainInvariantViolation[] {
  if (
    approval.decision === "granted" &&
    approval.expiresAt !== undefined &&
    Date.parse(approval.expiresAt) <= now.getTime()
  ) {
    return [
      {
        code: "expired_approval",
        objectId: approval.id,
        message: "A granted approval cannot authorize work after expiry.",
      },
    ];
  }
  return [];
}

export function validateSameProject(
  left: ProjectOwned & { readonly id: string },
  right: ProjectOwned & { readonly id: string },
): readonly DomainInvariantViolation[] {
  if (
    left.organizationId !== right.organizationId ||
    left.projectId !== right.projectId
  ) {
    return [
      {
        code: "tenant_mismatch",
        objectId: left.id,
        message: `Objects ${left.id} and ${right.id} do not share a tenant and project.`,
      },
    ];
  }
  return [];
}
