# AutoQA AI — AI Agents

**Version:** 0.1 Draft | **Status:** Pending approval

## Operating model

Use specialized roles coordinated by a deterministic workflow. An agent is a bounded capability with typed inputs, typed tools, policy checks, budgets, and an auditable output—not an unrestricted autonomous process.

## Proposed agents

| Agent | Responsibility | May not do |
|---|---|---|
| Intake | normalize requirement and identify gaps | invent missing acceptance criteria |
| Repository Analyst | map stack, conventions, tests, and impact | modify repository |
| Test Strategist | risks, layers, cases, and coverage proposal | approve its own plan |
| Automation Engineer | implement approved Playwright change | expand scope or publish |
| Verification Analyst | semantic and behavioral verification | override deterministic failures |
| Failure Investigator | correlate evidence and classify failure | claim root cause without evidence |
| Maintenance Agent | propose updates for approved product changes | silently self-heal test intent |

## Shared agent contract

Every invocation records input versions, model and prompt version, tools allowed, budget, output schema, assumptions, citations to repository evidence, confidence, and completion reason.

## Orchestration

The durable workflow selects agents, but policy controls actions. Agents cannot grant permissions to other agents. Deterministic code owns state transitions, authorization, retries, quotas, approvals, and artifact persistence.

## Memory

- project memory: approved conventions and decisions;
- task memory: immutable run context;
- retrieval context: relevant repository and product sources;
- no hidden cross-tenant memory;
- every durable memory item has provenance, scope, owner, and retention.

## Evaluation

Golden tasks, adversarial prompts, tool-policy tests, groundedness, plan quality, patch correctness, regression rate, safe-stop behavior, cost, latency, and confidence calibration are release gates for agent changes.

## Failure behavior

On missing authority, conflicting instructions, insufficient evidence, tool failure, budget exhaustion, or unsafe action, the agent stops with a structured blocker and recommended next step.
