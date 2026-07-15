# AutoQA AI — MVP Capability Scope

**Version:** 0.1 Draft | **Status:** Pending approval | **Depends on:** Capability Map v0.2

## MVP objective

Prove one complete, trustworthy Quality Engineering workflow:

> Given an authorized website, Git repository and approved requirement, discover the relevant application behavior, extract and approve requirements, assess risks, generate a test strategy and Playwright API/browser tests, execute them in isolation, verify that they detect controlled defects, classify failures, and present a traceable evidence package in a dashboard.

The MVP optimizes for depth, trust and demonstrable engineering quality—not the number of supported providers, frameworks or integrations.

## Scope classifications

- **MVP Alpha:** required for the first complete internal/design-partner workflow.
- **MVP Support:** required platform control, but may use a minimal implementation.
- **Research/Prototype:** uncertainty must be retired during MVP; not promised as a released feature.
- **Post-MVP:** valuable after the vertical slice proves quality and demand.
- **Future/Excluded:** intentionally outside the current planning horizon.

## MVP capability selection

### AI Platform — MVP Alpha

**Included:** CAP-051 Prompt orchestration, CAP-052 Context assembly, CAP-053 model routing with one primary provider and an abstraction boundary, CAP-054 typed tool calling, CAP-057 structured output validation, CAP-058 confidence calibration, CAP-059 human approvals, CAP-060 AI evaluation, CAP-061 injection defense, CAP-062 provenance, CAP-063 cost control and CAP-064 safe fallback.

**MVP Support:** CAP-055 scoped task/project memory and CAP-056 retrieval using deterministic search plus limited evidence retrieval.

**Post-MVP:** CAP-065 advanced multi-agent coordination. The MVP may use specialist roles inside one durable workflow, but does not require an autonomous agent society.

### Input and ingestion — MVP Alpha

**Included:** CAP-101 Website, CAP-102 OpenAPI, CAP-104 Git repository, CAP-105 Requirements Document, CAP-107 Existing Playwright Framework, CAP-109 validation/provenance and CAP-110 normalization.

**Post-MVP:** CAP-103 Postman and CAP-106 HAR.

**Future:** CAP-108 Figma.

### Discovery — MVP Alpha

**Included:** CAP-201 authorized crawl, CAP-202 login, CAP-203 navigation mapping, CAP-204 DOM/semantic analysis, CAP-205 forms, CAP-206 network/API observation, CAP-207 repository analysis, CAP-208 existing coverage, CAP-209 change impact, CAP-210 evidence/freshness, CAP-214 dependency graph and CAP-215 authentication-flow discovery.

**Research/Prototype:** CAP-211 runtime discovery beyond browser/network evidence.

**Post-MVP:** CAP-212 feature flags and CAP-213 microservice discovery.

### Requirements — MVP Alpha

**Included:** CAP-301 business flows, CAP-302 CRUD/state transitions, CAP-303 user journeys, CAP-304 requirements, CAP-305 acceptance criteria, CAP-306 gaps/conflicts, CAP-307 approval/versioning and CAP-308 traceability.

### Risk and strategy — MVP Alpha

**Included:** CAP-401 product risks, CAP-402 prioritization factors, CAP-403 authorization/security risks, CAP-404 residual risk, CAP-405 test-layer selection, CAP-406 coverage/duplication, CAP-407 data/environment planning and CAP-408 strategy approval.

### Test design and generation — MVP Alpha

**Included:** CAP-501 test cases, CAP-502 positive/negative/boundary cases, CAP-503 REST API tests, CAP-504 Playwright browser tests, CAP-505 page/domain objects, CAP-506 fixtures/data/authentication, CAP-507 basic accessibility checks, CAP-511 framework bootstrap/extension/repair and CAP-512 documentation/CI generation.

**Post-MVP:** CAP-508 visual testing and CAP-509 performance testing.

**Research only:** CAP-510 may propose security-test ideas but must not autonomously perform penetration testing.

### Execution — MVP Alpha

**Included:** CAP-601 local isolated execution, CAP-602 container execution, CAP-603 GitHub Actions execution, CAP-605 credential/environment handling, CAP-607 cancellation/timeouts/quotas, CAP-608 artifacts, CAP-609 normalized results and CAP-610 cleanup/recovery.

**Research/Prototype:** CAP-604 managed cloud workers.

**Post-MVP:** CAP-606 advanced sharding and scheduling beyond bounded parallelism.

### Analysis — MVP Alpha

**Included:** CAP-701 failure classification, CAP-702 bug detection, CAP-703 root-cause hypotheses, CAP-704 flaky detection, CAP-705 duplicate findings, CAP-706 regression/change analysis, CAP-707 evidence correlation, CAP-708 severity recommendation, CAP-709 calibrated Unknown, CAP-710 business impact and CAP-712 historical quality trend from MVP runs.

**Post-MVP:** CAP-711 risk trends, CAP-713 regression prediction and CAP-714 change-risk prediction.

### Verification — MVP Alpha

**Included:** CAP-801 static/structural validation, CAP-802 traceability, CAP-803 assertion quality, CAP-804 negative proof/mutation, CAP-805 repeatability, CAP-806 fix verification, CAP-807 basic regression detection, CAP-808 coverage analysis, CAP-809 evidence integrity, CAP-810 waiver enforcement, CAP-811 false-positive detection and CAP-813 hallucination/unsupported-claim detection.

**Research/Prototype:** CAP-812 false-negative estimation.

**MVP Support:** CAP-814 self-consistency may provide a signal but cannot replace evidence.

**Post-MVP:** CAP-815 broad side-effect verification beyond the approved regression scope.

### Reporting — MVP Alpha

**Included:** CAP-901 dashboard, CAP-902 operational/release reports, CAP-903 traceability, CAP-904 export, CAP-907 evidence package, CAP-908 approval inbox, CAP-909 audit/decision reporting and CAP-910 release readiness.

**Post-MVP:** CAP-905 scheduled reports and CAP-906 advanced audience templates.

### Governance — MVP Support

**Included:** CAP-1001 organizations/projects/roles, CAP-1003 guardrails, CAP-1004 secrets/privacy/retention, CAP-1005 audit/provenance, CAP-1006 budgets, CAP-1007 observability/health, CAP-1008 versioning/migrations, CAP-1009 rollout/rollback, CAP-1010 evaluation governance, CAP-1013 quotas and CAP-1015 workspace isolation.

**Architecture-ready, not marketed in MVP:** CAP-1002 multi-tenant isolation readiness.

**Post-MVP:** CAP-1011 licensing and CAP-1014 billing readiness.

**Future:** CAP-1012 plugin marketplace.

### Knowledge — MVP Support

**Included:** CAP-1103 hybrid repository/evidence search, CAP-1104 previous scans, CAP-1105 requirements/tests, CAP-1106 findings/evidence, CAP-1107 project conventions, CAP-1108 context cache, CAP-1110 provenance/retention and CAP-1112 human corrections.

**Research/Prototype:** CAP-1101 knowledge graph and CAP-1102 embeddings. They are adopted only if evaluation shows measurable improvement over deterministic and relational retrieval.

**Post-MVP:** CAP-1109 recommendation learning and CAP-1111 global contradiction analysis.

### Integrations — MVP Alpha

**Included:** CAP-1201 integration framework, CAP-1202 GitHub, CAP-1211 webhooks where required internally, CAP-1212 idempotency, CAP-1213 permissions/audit and CAP-1214 rate-limit/failure management.

**Post-MVP:** GitLab, Bitbucket, Azure DevOps, Linear, Jira, Slack, Teams and Email.

### Analytics — MVP Support

**Included:** CAP-1301 basic quality trends, CAP-1303 coverage trends, CAP-1304 AI accuracy/calibration, CAP-1305 execution/flakiness, CAP-1307 cost/usage and CAP-1309 metric definitions/data quality.

**Post-MVP:** risk trends, defect analytics, organization comparisons and predictive analytics.

## Minimum maturity targets

| Capability class | MVP release target |
|---|---|
| Safety, authorization, isolation and audit | Beta-quality controls before any external Alpha |
| Core vertical-slice capabilities | Alpha with passing acceptance and evaluation gates |
| AI outputs affecting code or defect claims | Alpha plus calibrated evaluation and human approval |
| Research capabilities | Prototype with documented evidence and adoption decision |
| Post-MVP/Future | Proposed only; no implementation commitment |

## MVP non-goals

- Selenium, Cypress, Appium or native-mobile generation;
- autonomous merge, deployment or production access;
- broad enterprise integration catalog;
- general penetration, load or visual-testing platform;
- marketplace and billing implementation;
- automatic learning that changes behavior without review;
- knowledge graph or vector database without measured benefit;
- predictive quality claims without sufficient historical data;
- multi-agent complexity without demonstrated value.

## MVP demonstration scenario

The reference application contains authentication, role permissions, CRUD, REST APIs and at least one intentionally seeded defect. A user connects its repository and URL, approves a requirement and strategy, receives a repository-aligned Playwright change, runs it locally and in GitHub Actions, observes the seeded defect, reviews evidence and classification, applies a controlled fix, verifies the fix and regression scope, and exports complete traceability.

## MVP approval questions

- [ ] Is Playwright plus TypeScript the approved first framework?
- [ ] Are Website, Repository, OpenAPI, Requirements Document and Existing Playwright Framework the approved MVP Inputs?
- [ ] Is GitHub/GitHub Actions the only external MVP integration?
- [ ] Are visual, performance, penetration and mobile testing excluded?
- [ ] Is managed cloud execution a Prototype rather than MVP commitment?
- [ ] Is a Knowledge Graph permitted only after evidence from a spike?
- [ ] Are merge, deploy and production access prohibited?
- [ ] Is human approval mandatory before code application, shared-environment execution and publication?
- [ ] Does the reference demonstration prove enough portfolio and product value?

**Decision:** Pending  
**Approved by:** —  
**Approval date:** —  
**Required changes:** —

