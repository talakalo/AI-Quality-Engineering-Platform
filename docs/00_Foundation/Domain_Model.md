# AutoQA AI — Domain Model

**Version:** 0.1 Draft | **Status:** Canonical business vocabulary pending approval

## Purpose

Define technology-independent business objects, ownership and lifecycle. Database tables, API resources, events, UI labels and agent outputs must map to this model rather than create competing concepts.

## Ownership hierarchy

```text
Organization
└── Project
    ├── Application
    │   ├── InputSource
    │   ├── ApplicationSnapshot
    │   └── Environment
    ├── RequirementSet
    ├── RiskRegister
    ├── TestStrategy
    ├── Framework
    └── QualityRun
```

## Core objects

### Organization

Security, billing and policy boundary that owns members, projects, integrations, quotas and retention rules.

### Project

Quality-engineering scope for one product or bounded application. Owns approved context, policies, requirements, runs and traceability.

### Application

System under analysis or test. May be represented by several Input Sources and deployed Environments.

### Input Source

Versioned external source supplied through an Input Provider: website, API specification, collection, repository, document, HAR, design or existing framework.

### Application Snapshot

Immutable normalized view of relevant application context at a point in time, including source versions, discovery results and evidence.

### Workspace

Ephemeral isolated runtime allocated to an authorized task. It is not a durable source of product truth.

### Scan

Bounded discovery activity over one or more Input Sources, producing Observations and an updated Application Snapshot.

### Observation

Evidence-backed fact captured from a source, such as route, page element, endpoint, schema, symbol, dependency or behavior.

### Page

Normalized user-facing application surface with route, states, semantic elements, actions, roles and observations.

### Business Flow

Ordered business interactions and state transitions performed by an Actor to achieve an Outcome.

### User Journey

Persona-oriented representation of one or more Business Flows including entry, alternatives, failure and completion states.

### Requirement

Versioned approved behavior with source provenance, acceptance criteria, permissions and non-functional constraints.

### Risk

Potential failure scenario with impact, likelihood, detectability, evidence, priority, controls and residual risk.

### Test Strategy

Approved risk-based plan selecting test layers, cases, environments, data, exclusions and verification approach.

### Test Case

Technology-neutral executable intent linked to requirements and risks, including preconditions, actions, assertions, evidence and cleanup.

### Test Suite

Purposeful group of Test Cases with selection, ordering/independence rules, environment and execution policy.

### Framework

Versioned automation implementation and configuration that can realize Test Cases in a supported technology.

### Change Set

Reviewable proposed modification to a Framework or related project assets, linked to an approved strategy and source commit.

### Quality Run

Durable orchestration instance that moves domain artifacts through the Quality Engineering Pipeline.

### Execution

One controlled attempt to run a Framework/Test Suite against a specific snapshot and environment.

### Test Result

Normalized outcome for a Test Case during an Execution, including steps, assertions, timing and evidence.

### Evidence

Immutable, integrity-checked artifact or observation supporting a decision: trace, log, screenshot, video, response, diff, metric or validation result.

### Finding

Evidence-backed issue requiring attention. A Finding may be classified as Bug, Automation Defect, Environment Issue, Data Issue, Flaky Behavior, Duplicate or Unknown.

### Bug

Finding confirmed or accepted as a product defect, linked to expected/observed behavior, impact, reproduction and evidence.

### Verification

Recorded assessment that a claim, Test Case, fix or Change Set satisfies defined gates using explicit evidence.

### Recommendation

Non-binding evidence-linked proposed action. It never represents approval or completed work.

### Report

Versioned presentation/export of domain state, metrics and evidence for a defined audience and time range.

### AI Agent

Versioned bounded AI role with permitted tools, input/output contract, guardrails, evaluation and audit identity.

### AI Evaluation

Versioned measurement of an Agent, prompt, model or tool configuration against a defined dataset, rubric, safety policy and baseline.

### Knowledge Item

Provenance-linked, tenant-scoped representation of approved historical or project knowledge. It has authority, freshness, sensitivity and retention metadata and never overrides a newer authoritative source silently.

### Knowledge Relationship

Typed evidence-backed relationship between Domain Objects, such as a Requirement covered by a Test Case or a Finding caused by a Change Set.

### Integration Connection

Authorized configuration linking an Organization or Project to an external system through scoped credential references, capabilities, health and policy.

### External Reference

Stable mapping between a Domain Object and an external repository, issue, message, build or report without making the external identifier the internal source of truth.

### Metric Definition

Versioned semantic definition of a metric including formula, source, dimensions, owner, freshness and known limitations.

### Metric Observation

Time-bound measured value produced according to a Metric Definition with lineage to source Domain Objects.

### Approval

Immutable human decision granting or denying a specific action, scope, version, environment and expiry.

## Key invariants

- every tenant-scoped object belongs to exactly one Organization;
- every Run pins input and requirement versions;
- every Test Case links to at least one Requirement or Risk;
- every Bug links to Evidence and a Finding;
- every material AI action links to an Agent version and policy decision;
- Approval is specific and cannot be reused for expanded scope;
- reports and dashboards are projections, not competing sources of truth.
- Knowledge Items retain provenance and cannot cross Organization boundaries;
- Metric Observations must reference a versioned Metric Definition;
- Integration actions require an authorized Connection and create auditable delivery results;
- AI Evaluation evidence is required before an AI capability changes maturity.

## Lifecycle summary

Input Source → Scan → Application Snapshot → Requirement/Risk → Strategy → Test Case → Framework/Change Set → Execution/Test Result → Finding/Bug → Verification → Report.
