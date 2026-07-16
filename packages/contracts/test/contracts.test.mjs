import assert from "node:assert/strict";
import test from "node:test";

import {
  validateCapabilityContract,
  validateDomainEvent,
} from "../dist/index.js";

test("accepts a valid capability contract", () => {
  const result = validateCapabilityContract({
    id: "CAP-050",
    name: "AI Platform",
    outcome: "Governed AI capabilities",
    domain: "ai_platform",
    lifecycle: "approved",
    maturity: "research",
    scope: "mvp_support",
    dependsOn: ["CAP-1000"],
    consumes: ["Policy"],
    produces: ["Agent Result"],
    owner: "ai-platform",
    requiredEvidence: ["evaluation result"],
  });

  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, []);
});

test("rejects unknown capability properties and malformed IDs", () => {
  const result = validateCapabilityContract({
    id: "AI-50",
    unexpected: true,
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.length >= 2);
});

test("accepts the canonical event envelope", () => {
  const result = validateDomainEvent({
    eventId: "event-1",
    eventType: "CapabilityApproved",
    eventVersion: 1,
    occurredAt: "2026-07-16T10:00:00.000Z",
    organizationId: "org-1",
    projectId: "project-1",
    aggregateType: "Capability",
    aggregateId: "CAP-050",
    aggregateVersion: 1,
    correlationId: "correlation-1",
    actorType: "user",
    actorId: "user-1",
    payload: {},
  });

  assert.equal(result.valid, true);
});

test("rejects unversioned or unscoped events", () => {
  const result = validateDomainEvent({
    eventId: "event-1",
    eventType: "capability-approved",
    eventVersion: 0,
    payload: {},
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.length >= 2);
});
