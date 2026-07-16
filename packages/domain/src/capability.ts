import type { CapabilityId } from "./identifiers.js";

export const capabilityLifecycleStatuses = [
  "proposed",
  "approved",
  "planned",
  "in_development",
  "validated",
  "released",
  "deprecated",
  "rejected",
] as const;

export type CapabilityLifecycleStatus =
  (typeof capabilityLifecycleStatuses)[number];

export const capabilityMaturityLevels = [
  "research",
  "prototype",
  "experimental",
  "alpha",
  "beta",
  "ga",
  "deprecated",
] as const;

export type CapabilityMaturity = (typeof capabilityMaturityLevels)[number];

export const capabilityScopeClasses = [
  "mvp_alpha",
  "mvp_support",
  "research_prototype",
  "post_mvp",
  "future_excluded",
] as const;

export type CapabilityScopeClass = (typeof capabilityScopeClasses)[number];

export interface CapabilityContract {
  readonly id: CapabilityId;
  readonly name: string;
  readonly outcome: string;
  readonly domain: string;
  readonly lifecycle: CapabilityLifecycleStatus;
  readonly maturity: CapabilityMaturity;
  readonly scope: CapabilityScopeClass;
  readonly dependsOn: readonly CapabilityId[];
  readonly consumes: readonly string[];
  readonly produces: readonly string[];
  readonly owner: string;
  readonly requiredEvidence: readonly string[];
}

export interface CapabilityGraphIssue {
  readonly code:
    | "duplicate_capability"
    | "missing_dependency"
    | "self_dependency"
    | "dependency_cycle";
  readonly capabilityId: CapabilityId;
  readonly dependencyId?: CapabilityId;
  readonly path?: readonly CapabilityId[];
}

export function validateCapabilityGraph(
  capabilities: readonly CapabilityContract[],
): readonly CapabilityGraphIssue[] {
  const issues: CapabilityGraphIssue[] = [];
  const byId = new Map<CapabilityId, CapabilityContract>();

  for (const capability of capabilities) {
    if (byId.has(capability.id)) {
      issues.push({
        code: "duplicate_capability",
        capabilityId: capability.id,
      });
      continue;
    }
    byId.set(capability.id, capability);
  }

  for (const capability of capabilities) {
    for (const dependencyId of capability.dependsOn) {
      if (dependencyId === capability.id) {
        issues.push({
          code: "self_dependency",
          capabilityId: capability.id,
          dependencyId,
        });
      } else if (!byId.has(dependencyId)) {
        issues.push({
          code: "missing_dependency",
          capabilityId: capability.id,
          dependencyId,
        });
      }
    }
  }

  const visited = new Set<CapabilityId>();
  const active = new Set<CapabilityId>();
  const path: CapabilityId[] = [];

  function visit(capabilityId: CapabilityId): void {
    if (active.has(capabilityId)) {
      const cycleStart = path.indexOf(capabilityId);
      issues.push({
        code: "dependency_cycle",
        capabilityId,
        path: [...path.slice(cycleStart), capabilityId],
      });
      return;
    }
    if (visited.has(capabilityId)) return;

    visited.add(capabilityId);
    active.add(capabilityId);
    path.push(capabilityId);

    const capability = byId.get(capabilityId);
    for (const dependencyId of capability?.dependsOn ?? []) {
      if (dependencyId !== capabilityId && byId.has(dependencyId)) {
        visit(dependencyId);
      }
    }

    path.pop();
    active.delete(capabilityId);
  }

  for (const capabilityId of byId.keys()) visit(capabilityId);

  return issues;
}
