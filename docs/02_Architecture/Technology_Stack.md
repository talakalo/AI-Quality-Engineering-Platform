# AutoQA AI — Technology Stack

**Version:** 0.1 Draft | **Status:** Proposed, not approved

## Proposed MVP stack

| Area | Proposed choice | Reason |
|---|---|---|
| Frontend | Next.js + TypeScript | full-stack web ecosystem and typed UI |
| UI | Tailwind CSS + shadcn/ui | accessible primitives and fast consistency |
| Backend | NestJS + Fastify adapter | TypeScript control plane, direct contract reuse and Playwright ecosystem alignment |
| Database | PostgreSQL | transactional source of truth and JSON support |
| ORM | Drizzle ORM | typed schema and explicit SQL-friendly migrations |
| Queue/workflows | Temporal or equivalent durable engine | resumable long-running execution |
| Cache/coordination | Redis where justified | leases, throttling, ephemeral state |
| Artifacts | S3-compatible object storage | large immutable execution assets |
| Auth | standards-based managed OIDC | MFA, session and enterprise readiness |
| Automation | Playwright Test | browser and REST API automation |
| Runtime | Node.js LTS | shared TypeScript ecosystem |
| Validation | Zod + generated OpenAPI | runtime and contract safety |
| Observability | OpenTelemetry | vendor-neutral traces, metrics, and logs |
| CI | GitHub Actions | initial integration target |
| Infrastructure | containers + IaC | reproducible, reviewable environments |

## Selection criteria

Security, isolation, ecosystem maturity, typing, testability, operability, cost, portability, and availability of stable APIs.

## Constraints

- pin supported Node, Playwright, browser, and package-manager versions;
- maintain provider interfaces around models, storage, Git, and workflow engine;
- avoid introducing infrastructure before a documented requirement;
- generate SBOMs and scan dependencies and images;
- document upgrade and deprecation policy.

## Required spikes before final approval

- execution sandbox threat and performance test;
- durable workflow proof of cancellation/resume;
- Playwright artifact volume and cost test;
- model-provider privacy and latency comparison;
- database tenancy and row-level authorization validation.

---
