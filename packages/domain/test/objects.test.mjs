import assert from "node:assert/strict";
import test from "node:test";

import {
  validateApproval,
  validateFinding,
  validateSameProject,
  validateTestCase,
} from "../dist/index.js";

const ownership = {
  organizationId: "org-1",
  projectId: "project-1",
};

test("requires traceability for every test case", () => {
  const violations = validateTestCase({
    ...ownership,
    id: "test-1",
    requirementIds: [],
    riskIds: [],
    title: "Untraceable test",
    expectedEvidence: [],
  });

  assert.equal(violations[0]?.code, "missing_traceability");
});

test("requires evidence and calibrated confidence for findings", () => {
  const violations = validateFinding({
    ...ownership,
    id: "finding-1",
    classification: "bug",
    evidenceIds: [],
    summary: "Claim without evidence",
    confidence: 1.1,
  });

  assert.deepEqual(
    violations.map(({ code }) => code),
    ["missing_evidence", "invalid_confidence"],
  );
});

test("rejects expired approval as authorization", () => {
  const violations = validateApproval(
    {
      ...ownership,
      id: "approval-1",
      action: "publish_change",
      scopeReference: "change-1",
      actorId: "user-1",
      decision: "granted",
      decidedAt: "2026-01-01T00:00:00.000Z",
      expiresAt: "2026-01-02T00:00:00.000Z",
    },
    new Date("2026-01-03T00:00:00.000Z"),
  );

  assert.equal(violations[0]?.code, "expired_approval");
});

test("prevents relationships across tenant or project boundaries", () => {
  const violations = validateSameProject(
    { ...ownership, id: "left" },
    { organizationId: "org-2", projectId: "project-2", id: "right" },
  );

  assert.equal(violations[0]?.code, "tenant_mismatch");
});
