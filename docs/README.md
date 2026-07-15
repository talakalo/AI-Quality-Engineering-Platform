# AutoQA AI Documentation

This documentation defines an AI Quality Engineering Platform composed of bounded Engines, governed AI Agents and evidence-based verification.

## Reading order

1. `00_Foundation` — capabilities, MVP scope, dependencies, cross-layer matrix, domain objects, system flow, events, ADR index and canonical language.
2. `00_Project` — mission, vision, boundaries and detailed decisions.
3. `01_Product` — requirements, users, journeys and measurable success.
4. `02_Architecture` — system, stack, security, scale and tenancy.
5. `03_AI` — agents, prompts, orchestration, context and guardrails.
6. `04_Core` — Input Providers, Engine pipeline and quality-engineering capabilities.
7. `05_Frontend` — dashboard, UX and design system.
8. `06_Backend` — application, API and data contracts.
9. `07_Engineering` — standards, testing, delivery, observability and Done.
10. `08_Project_Management` — backlog, epics, roadmap and release plan.

## Governance

All files begin as Draft. The Foundation layer must be approved before the PRD or detailed Architecture can be approved. Approval of one document does not approve implementation. Conflicts are resolved in the Decision Log, and scope changes must update the Capability Map and Product Boundaries before code is authorized.

## Product model

The platform lifecycle is:

**Ingest → Normalize → Discover → Analyze → Extract Requirements → Assess Risk → Design Strategy → Generate Cases → Generate Framework → Execute → Detect Bugs → Verify → Explain in Dashboard**
