import assert from "node:assert/strict";
import test from "node:test";

import { capabilityId, validateCapabilityGraph } from "../dist/index.js";

function capability(id, dependsOn = []) {
  return {
    id: capabilityId(id),
    name: id,
    outcome: "Validated outcome",
    domain: "foundation",
    lifecycle: "proposed",
    maturity: "research",
    scope: "mvp_support",
    dependsOn: dependsOn.map(capabilityId),
    consumes: [],
    produces: [],
    owner: "architecture",
    requiredEvidence: [],
  };
}

test("accepts an acyclic capability graph", () => {
  const graph = [
    capability("CAP-1000"),
    capability("CAP-050", ["CAP-1000"]),
    capability("CAP-051", ["CAP-050"]),
  ];

  assert.deepEqual(validateCapabilityGraph(graph), []);
});

test("reports missing and self dependencies", () => {
  const graph = [
    capability("CAP-050", ["CAP-050"]),
    capability("CAP-051", ["CAP-9999"]),
  ];

  assert.deepEqual(
    validateCapabilityGraph(graph).map(({ code }) => code),
    ["self_dependency", "missing_dependency"],
  );
});

test("reports a dependency cycle with its path", () => {
  const graph = [
    capability("CAP-050", ["CAP-051"]),
    capability("CAP-051", ["CAP-052"]),
    capability("CAP-052", ["CAP-050"]),
  ];

  const issues = validateCapabilityGraph(graph);
  assert.equal(issues.length, 1);
  assert.equal(issues[0].code, "dependency_cycle");
  assert.deepEqual(issues[0].path, [
    "CAP-050",
    "CAP-051",
    "CAP-052",
    "CAP-050",
  ]);
});

test("rejects malformed capability identifiers", () => {
  assert.throws(() => capabilityId("CAP-AI"), /Invalid capability ID/);
});
