# AutoQA AI — ADR Index

**Version:** 0.1 Draft | **Detailed record:** `../00_Project/04_Decision_Log.md`

| ADR | Topic | Status | Decision drivers |
|---|---|---|---|
| ADR-001 | Modular monolith vs services | Proposed | isolation, operability, scale, team size |
| ADR-002 | Backend: FastAPI vs NestJS/TypeScript | Accepted — NestJS for MVP | AI workload, Playwright integration, type safety, operations |
| ADR-003 | Playwright vs Cypress | Proposed | browser/API capability, parallelism, ecosystem, maintainability |
| ADR-004 | PostgreSQL system of record | Proposed | consistency, tenancy, queries, migrations |
| ADR-005 | Durable workflow technology | Proposed | resume, cancellation, visibility, cost |
| ADR-006 | Container vs microVM workers | Proposed | isolation, startup time, cost, portability |
| ADR-007 | First Git/CI provider | Proposed | customer fit, permissions, API quality |
| ADR-008 | Tenant isolation model | Proposed | security, cost, enterprise path |
| ADR-009 | LLM provider/routing | Proposed | quality, privacy, latency, cost, portability |
| ADR-010 | Artifact storage/retention | Proposed | integrity, volume, privacy, cost |
| ADR-011 | Input Provider contract | Proposed | extensibility, normalization, provenance |
| ADR-012 | Event delivery and schema strategy | Proposed | consistency, replay, operability |

## Backend decision matrix

Scores use 1–5 and require cited spike evidence. Weighted result informs the decision; security or operational blockers can disqualify an option regardless of score.

| Criterion | Weight |
|---|---:|
| AI/ML workload suitability | 25% |
| Playwright and Node ecosystem integration | 20% |
| Development simplicity and team productivity | 15% |
| Scalability and concurrency model | 15% |
| Ecosystem and library maturity | 10% |
| End-to-end type safety and contract tooling | 10% |
| Deployment and operational complexity | 5% |

## Required backend spike evidence

Equivalent workflow in each option; model streaming/tool calls; durable job handoff; Playwright worker integration; validation/OpenAPI; tracing; cancellation; cold start; throughput; memory; packaging; security maintenance; developer experience and CI duration.
