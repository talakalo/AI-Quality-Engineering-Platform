# AutoQA AI — System Architecture

**Version:** 0.1 Draft | **Status:** Pending approval

## Architectural style

Start as a modular monolith plus isolated worker runtime. Separate deployable services only when security, scaling, or reliability data justifies the operational cost.

## Logical components

- **Web Application:** dashboard, reviews, approvals, configuration.
- **API/Application Core:** projects, requirements, plans, policies, runs, evidence.
- **Workflow Orchestrator:** durable state machine for agent and execution tasks.
- **Agent Runtime:** constrained planning and reasoning with typed tools.
- **Repository Analyzer:** indexing, convention and dependency detection.
- **Automation Generator:** Playwright-specific generation and maintenance.
- **Verification Engine:** deterministic gates and AI-assisted semantic review.
- **Execution Workers:** ephemeral isolated workspaces for commands and browsers.
- **Artifact Service:** logs, traces, screenshots, videos, reports, evidence bundles.
- **Integration Adapters:** GitHub, CI, issue sources, model providers.

## Key flows

1. API records immutable input versions and starts an orchestration.
2. Orchestrator requests constrained agent work through typed tools.
3. Worker materializes an authorized commit in an isolated workspace.
4. Generator proposes or applies an approved patch.
5. Verification engine runs ordered gates and stores signed evidence metadata.
6. Human decision controls publication or termination.

## Trust boundaries

- browser/client to API;
- control plane to execution workers;
- workers to repositories and tested environments;
- application data to object storage;
- system to external model and integration providers.

## Reliability rules

- idempotency keys for mutations and jobs;
- durable workflow checkpoints;
- leases and heartbeats for workers;
- bounded retries with classified errors;
- immutable run inputs and artifact hashes;
- outbox pattern for reliable event publication;
- safe cancellation and cleanup.

## Architecture decisions to record

ADR-001 modular monolith; ADR-002 durable orchestration; ADR-003 sandbox isolation; ADR-004 provider abstraction; ADR-005 PostgreSQL system of record; ADR-006 object storage for artifacts; ADR-007 policy/approval enforcement.

## Deployment view

Separate web/API, background orchestration, worker pool, PostgreSQL, Redis or queue infrastructure, and object storage. Execution workers receive short-lived credentials and have no inbound network access.

---
