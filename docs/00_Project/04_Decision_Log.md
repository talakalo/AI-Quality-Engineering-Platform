# AutoQA AI — Decision Log

**Version:** 0.1 Draft | **Status:** Living record

## Decision format

Each decision records ID, date, status, context, options, decision, rationale, consequences, risks, owner, reviewers, affected documents and revisit trigger. Statuses: Proposed, Accepted, Superseded, Rejected.

## Initial decisions to resolve

| ID | Decision | Status |
|---|---|---|
| ADR-001 | Modular monolith versus distributed services | Proposed |
| ADR-002 | Backend selection: FastAPI versus NestJS/TypeScript | Accepted — NestJS for MVP |
| ADR-003 | Playwright versus Cypress as first framework | Proposed |
| ADR-004 | PostgreSQL as transactional source of truth | Proposed |
| ADR-005 | Durable workflow engine selection | Proposed |
| ADR-006 | Container versus microVM execution isolation | Proposed |
| ADR-007 | GitHub as first repository/CI provider | Proposed |
| ADR-008 | Multi-tenant data isolation model | Proposed |
| ADR-009 | LLM provider strategy and data policy | Proposed |
| ADR-010 | Object storage and evidence-retention model | Proposed |

## ADR template

```text
ID / Title:
Status / Date / Owner:
Context:
Decision drivers:
Options considered:
Decision:
Consequences:
Risks and mitigations:
Validation evidence:
Affected documents:
Revisit when:
```

No architectural choice becomes approved merely because it appears in another draft document.

## ADR-002 decision method

The backend decision uses the weighted matrix in `../00_Foundation/ADR_Index.md`. Each score requires comparable spike evidence. AI suitability (25%), Playwright/Node integration (20%), development simplicity (15%), scalability (15%), ecosystem (10%), type safety (10%) and deployment (5%) determine the weighted result. A critical security, maintenance or operability blocker may disqualify an option regardless of score.

The accepted decision and revisit triggers are recorded in `ADR-002_Backend_Framework.md`.
