# AutoQA AI — Capability Dependencies

**Version:** 0.1 Draft | **Status:** Foundation approval required

## Purpose

Define how capabilities depend on one another and which canonical Domain Objects cross each boundary. This is the source for the future dependency graph, implementation sequencing and impact analysis.

## Dependency rules

1. `Depends On` means the upstream capability must exist at the minimum required maturity.
2. `Consumes` and `Produces` use names from `Domain_Model.md`.
3. Child capabilities inherit their domain baseline unless a row overrides it.
4. A capability cannot be promoted beyond an unavailable hard dependency.
5. Optional dependencies enable enhanced behavior but cannot silently become mandatory.
6. Cycles require an ADR and an explicit bootstrap strategy.

## Domain-level dependency graph

| Domain | Depends on | Consumes | Produces |
|---|---|---|---|
| CAP-050 AI Platform | CAP-1000 | Context, Policy, Tool Contract, Evidence | Agent Result, Confidence, AI Evaluation |
| CAP-100 Input | CAP-1000 | External Source, Authorization | Input Source, Provider Artifact |
| CAP-200 Discovery | CAP-100, CAP-050 | Input Source, Application, Policy | Scan, Observation, Application Snapshot |
| CAP-300 Requirements | CAP-200, CAP-050 | Observation, Document, Business Flow candidate | Requirement, Acceptance Criterion, User Journey |
| CAP-400 Risk & Strategy | CAP-300, CAP-050 | Requirement, Journey, Observation, Historical Evidence | Risk, Risk Register, Test Strategy |
| CAP-500 Test Generation | CAP-400, CAP-050 | Requirement, Risk, Test Strategy, Framework Convention | Test Case, Test Suite, Change Set |
| CAP-600 Execution | CAP-500, CAP-1000 | Framework, Test Suite, Environment, Approval | Execution, Test Result, Evidence |
| CAP-700 Analysis | CAP-600, CAP-050 | Test Result, Evidence, Requirement, History | Finding, Bug Hypothesis, Recommendation |
| CAP-800 Verification | CAP-300, CAP-600, CAP-700 | Claim, Test Case, Result, Finding, Evidence | Verification, Gate Result, Residual Risk |
| CAP-900 Reporting | CAP-800 | Domain state, Verification, Metrics | Report, Evidence Package, Notification |
| CAP-1000 Governance | Foundation | Identity, Policy, Usage, Audit input | Approval, Audit Event, Entitlement, Quota Decision |
| CAP-1100 Knowledge | CAP-1000 | Versioned domain objects and evidence | Knowledge Item, Relationship, Retrieval Result |
| CAP-1200 Integrations | CAP-1000 | Domain Event, External Credential Reference | External Reference, Delivery Result, Imported Source |
| CAP-1300 Analytics | CAP-600, CAP-700, CAP-800, CAP-1100 | Results, Findings, Verification, Historical Metrics | Trend, Aggregate, Prediction, Data-quality Result |

## Critical workflow capabilities

| Capability | Depends On | Consumes | Produces |
|---|---|---|---|
| CAP-051 Prompt orchestration | CAP-052, CAP-057, CAP-061, CAP-062 | Prompt Template, Context, Tool Contract | Prompt Run, Structured Agent Result |
| CAP-052 Context assembly | CAP-056, CAP-1103, CAP-1110 | Task, Policy, Source Reference, Knowledge | Context Package, Omission Report |
| CAP-053 Model routing | CAP-060, CAP-063, CAP-1004 | Task Requirements, Provider Policy, Budget | Model Selection, Routing Evidence |
| CAP-054 Tool calling | CAP-057, CAP-061, CAP-1003 | Tool Contract, Agent Decision, Policy | Tool Call, Tool Result, Audit Event |
| CAP-056 Retrieval/RAG | CAP-1102, CAP-1103, CAP-1110 | Query, Access Scope, Knowledge | Provenance-linked Retrieval Result |
| CAP-057 Output validation | CAP-062 | Agent Output, Output Schema | Validated Result or Validation Failure |
| CAP-058 Confidence calibration | CAP-060, CAP-1106 | Prediction, Evidence, Evaluation History | Calibrated Confidence |
| CAP-059 Human approval | CAP-1001, CAP-1003, CAP-1005 | Action Request, Scope, Risk, Evidence | Approval or Rejection |
| CAP-060 AI evaluation | CAP-057, CAP-061, CAP-1106 | Eval Dataset, Agent Version, Expected Outcome | Evaluation Result, Regression Finding |
| CAP-101 Website ingestion | CAP-109, CAP-1004 | URL, Scope, Credential Reference | Website Input Source |
| CAP-102 OpenAPI ingestion | CAP-109 | Specification | API Input Source, Endpoint Observation |
| CAP-104 Repository ingestion | CAP-109, CAP-1004 | Repository Reference, Commit | Repository Input Source |
| CAP-110 Input normalization | CAP-109, CAP-1110 | Provider Artifact | Observation, Source Reference |
| CAP-201 Website crawl | CAP-101, CAP-202, CAP-607 | Website Source, Crawl Policy | Scan, Page, Navigation Observation |
| CAP-207 Repository analysis | CAP-104, CAP-214 | Repository Snapshot | Convention, Symbol, Dependency, Existing Test |
| CAP-211 Runtime discovery | CAP-202, CAP-206, CAP-605 | Environment, Session, Network | Runtime Observation, State Transition |
| CAP-214 Dependency graph | CAP-207 | Symbols, Manifests, Calls | Dependency Graph |
| CAP-215 Authentication flow | CAP-202, CAP-205, CAP-206 | Pages, Forms, Network, Roles | Authentication Flow, Permission Observation |
| CAP-301 Business-flow detection | CAP-203, CAP-211, CAP-052 | Observations, State Transitions | Business Flow |
| CAP-304 Requirement extraction | CAP-301, CAP-052, CAP-057 | Business Flow, Document, Observation | Requirement Draft |
| CAP-307 Requirement approval | CAP-059, CAP-304 | Requirement Draft, Gaps, Evidence | Approved Requirement Version |
| CAP-401 Risk identification | CAP-307, CAP-710, CAP-1106 | Requirement, History, Architecture Evidence | Risk |
| CAP-405 Test-layer selection | CAP-401, CAP-406, CAP-207 | Risk, Existing Coverage, Architecture | Strategy Item |
| CAP-408 Strategy approval | CAP-059, CAP-405 | Draft Strategy, Risk Register | Approved Test Strategy |
| CAP-501 Test-case generation | CAP-301, CAP-304, CAP-405, CAP-408 | Requirement, Risk, User Journey, Strategy | Test Case |
| CAP-503 API-test generation | CAP-102, CAP-501, CAP-511 | Endpoint, Schema, Test Case, Framework | API Test Change |
| CAP-504 Browser-test generation | CAP-201, CAP-501, CAP-511 | Page, Flow, Test Case, Framework | Browser Test Change |
| CAP-511 Framework generation | CAP-207, CAP-408, CAP-501 | Conventions, Strategy, Test Cases | Framework, Change Set |
| CAP-601 Local execution | CAP-511, CAP-605, CAP-607 | Framework, Suite, Environment | Execution, Result, Evidence |
| CAP-603 CI execution | CAP-601, CAP-1202 | Framework, CI Context, Approval | CI Execution, Check Result |
| CAP-701 Failure classification | CAP-058, CAP-707, CAP-709 | Failed Result, Evidence, History | Classified Finding |
| CAP-702 Bug detection | CAP-701, CAP-710 | Finding, Requirement, Evidence | Bug Hypothesis |
| CAP-704 Flaky detection | CAP-601, CAP-1106 | Repeated Results, Environment Fingerprints | Flakiness Finding |
| CAP-713 Regression prediction | CAP-711, CAP-712, CAP-1301 | Change, Risks, Historical Trends | Regression Prediction |
| CAP-801 Static validation | CAP-511 | Change Set, Standards | Gate Result |
| CAP-802 Traceability validation | CAP-307, CAP-501 | Requirement, Risk, Test Case | Traceability Gate Result |
| CAP-804 Negative proof | CAP-601, CAP-501 | Test, Controlled Fault, Expected Detection | Mutation Verification |
| CAP-811 False-positive detection | CAP-701, CAP-806, CAP-1106 | Finding, Reproduction, History | False-positive Assessment |
| CAP-812 False-negative detection | CAP-804, CAP-808, CAP-1106 | Mutations, Coverage, Escaped Defects | False-negative Estimate |
| CAP-813 Hallucination detection | CAP-057, CAP-062, CAP-809 | AI Claim, Citations, Evidence | Groundedness Gate Result |
| CAP-901 Dashboard | CAP-1309, CAP-1001 | Projections, Metrics, Authorization | Dashboard View |
| CAP-903 Traceability reporting | CAP-802, CAP-809 | Requirement, Risk, Test, Evidence | Traceability Report |
| CAP-1202 GitHub integration | CAP-1201, CAP-1212, CAP-1213 | Repository/Event/Approval | GitHub Reference, Delivery Result |
| CAP-1301 Quality trends | CAP-1309, CAP-1106 | Historical Results, Findings, Verifications | Quality Trend |
| CAP-1304 AI accuracy analytics | CAP-060, CAP-058, CAP-1309 | Evaluation and Production Feedback | Accuracy/Calibration Trend |

## Inheritance examples

- CAP-1203 through CAP-1211 inherit CAP-1201, CAP-1212, CAP-1213 and CAP-1214.
- CAP-1301 through CAP-1310 inherit CAP-1309 data-quality controls.
- CAP-1101 through CAP-1112 inherit CAP-1002, CAP-1004 and CAP-1005 governance controls.
- All AI capabilities inherit CAP-061, CAP-062, CAP-063 and CAP-1003 unless explicitly stricter.
- All execution capabilities inherit CAP-607, CAP-608, CAP-610 and CAP-1015.

## Approval gate

Before Capability Map v1.0, every MVP capability must have a specific row, no unresolved dependency cycle, domain artifacts defined, minimum dependency maturity set and an owning Epic.

