import assert from "node:assert/strict";
import test from "node:test";

import { ContractsController } from "../dist/contracts.controller.js";
import { HealthController } from "../dist/health.controller.js";

test("health controller reports service readiness", () => {
  assert.deepEqual(new HealthController().getHealth(), {
    status: "ok",
    service: "autoqa-api",
  });
});

test("contract controller accepts a canonical domain event", () => {
  const result = new ContractsController().validateEvent({
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

  assert.deepEqual(result, { valid: true });
});

test("contract controller rejects invalid events without leaking raw input", () => {
  assert.throws(
    () => new ContractsController().validateEvent({ secret: "do-not-return" }),
    (error) => {
      const response = error.getResponse();
      assert.equal(response.code, "invalid_domain_event");
      assert.equal(JSON.stringify(response).includes("do-not-return"), false);
      return true;
    },
  );
});
