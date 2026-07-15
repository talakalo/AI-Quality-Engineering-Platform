# AutoQA AI — Verification Engine

**Version:** 0.1 Draft | **Status:** Pending approval

## Mission

Prove that generated automation is valid, relevant, stable enough, and capable of detecting the behavior it claims to cover.

## Ordered gates

1. **Provenance:** approved requirement, plan, commit, tool and model versions.
2. **Static:** parse, format, lint, types, imports, secret scan, dependency policy.
3. **Structural:** naming, fixtures, locators, isolation, duplication, prohibited patterns.
4. **Traceability:** each test maps to acceptance criteria and risk.
5. **Execution:** targeted test passes in a pinned environment.
6. **Negative proof:** controlled mutation, response alteration, fixture fault, or equivalent shows the test fails for the intended reason.
7. **Repeatability:** bounded reruns measure instability without hiding it.
8. **Evidence:** assertions, steps, logs, traces, screenshots and diffs are internally consistent.
9. **Review:** residual risks and confidence are presented to the human approver.

## Result model

Each gate returns pass, fail, blocked, or not-applicable; evidence references; deterministic reason codes; confidence only where inference is used; remediation; and duration/cost.

## False-confidence controls

Detect tests with no meaningful assertion, unreachable assertions, unconditional skips, swallowed errors, overbroad mocks, assertion against setup data only, non-deterministic selectors, and retries that mask repeatable failure.

## Release rule

Deterministic failures cannot be overruled by an AI opinion. Waivers require an authorized human, reason, scope, expiry, and audit event.
