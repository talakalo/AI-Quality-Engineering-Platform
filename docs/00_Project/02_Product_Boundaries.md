# AutoQA AI — Product Boundaries

**Version:** 0.1 Draft | **Status:** Pending approval

## Purpose

Prevent scope drift and unsafe autonomy by defining what the initial product will and will not do. Anything not explicitly included is excluded until approved through change control.

## Proposed MVP scope

- Git-based web repositories using TypeScript or JavaScript.
- Playwright Test as the first browser automation target.
- REST API testing through Playwright request contexts.
- Repository analysis, test planning, code generation, controlled execution, verification, artifacts, failure classification, and dashboard reporting.
- One repository per project; isolated workspaces per run.
- Human approval before writing code, pushing changes, opening a PR, running against shared environments, or changing configuration.
- GitHub and GitHub Actions as the first proposed repository and CI integration.

## Explicit MVP exclusions

- autonomous merge, release, or production deployment;
- unrestricted shell, network, repository, or cloud access;
- native mobile, desktop, embedded, hardware, and IoT automation;
- Selenium, Cypress, Appium, Java, Python, and C# generators;
- load, penetration, and compliance certification testing;
- self-healing that silently changes test intent;
- production-data copying or credential discovery;
- visual design validation beyond deterministic screenshot comparison;
- replacing human product ownership or final release accountability;
- multi-repository change orchestration;
- general-purpose coding work unrelated to quality automation.

## Autonomy levels

- **L0 Observe:** read-only analysis.
- **L1 Propose:** plans and patches without applying them.
- **L2 Implement in isolation:** apply approved changes in a sandbox and run local gates.
- **L3 Publish for review:** push/open draft PR only with explicit approval.
- **L4 Merge or deploy:** excluded from MVP.

## Hard safety boundaries

- no secrets in prompts, code, logs, screenshots, or artifacts;
- allowlisted commands and network destinations only;
- tenant and run isolation;
- immutable audit events;
- time, cost, token, and execution quotas;
- cancellation and emergency stop;
- destructive and externally visible actions require approval.

## Change control

Boundary changes require an updated PRD, affected design documents, threat review, test plan, roadmap impact, and explicit approval before implementation.

## Open boundary decisions

- exact GitHub permissions;
- initial hosting and tenant model;
- supported Playwright and Node versions;
- whether draft PR creation is MVP or post-MVP;
- supported authentication patterns for tested applications.

---
