# AutoQA AI — Capability Map

**Version:** 0.2 Draft | **Owner:** Product Architecture | **Status:** Foundation approval required

## Purpose

Define what the platform can do independently of implementation, UI, database, API or vendor. Every product requirement, Engine, Epic and metric must map to one or more capability IDs. A capability is not automatically MVP scope; scope is controlled by Product Boundaries.

## Capability hierarchy

### CAP-050 — AI platform

- CAP-051 Prompt orchestration and versioning
- CAP-052 Context assembly and budgeting
- CAP-053 Model routing and provider abstraction
- CAP-054 Typed tool calling and tool-policy enforcement
- CAP-055 Scoped memory management
- CAP-056 Retrieval and RAG
- CAP-057 Structured-output validation and repair
- CAP-058 Confidence estimation and calibration
- CAP-059 Human approval workflow
- CAP-060 AI evaluation and regression testing
- CAP-061 Prompt-injection and adversarial-input defense
- CAP-062 Model/prompt/tool provenance
- CAP-063 Token, latency and AI-cost control
- CAP-064 Safe fallback, refusal and escalation
- CAP-065 Multi-agent coordination

### CAP-100 — Input and ingestion

- CAP-101 Website URL ingestion
- CAP-102 OpenAPI/Swagger ingestion
- CAP-103 Postman Collection ingestion
- CAP-104 Git repository ingestion
- CAP-105 PRD/requirements document ingestion
- CAP-106 HAR file ingestion
- CAP-107 Existing Playwright framework ingestion
- CAP-108 Figma design ingestion — future candidate
- CAP-109 Input validation, provenance and versioning
- CAP-110 Input normalization into shared domain artifacts

### CAP-200 — Discovery

- CAP-201 Authorized website crawl
- CAP-202 Authentication and role-aware discovery
- CAP-203 Navigation and route mapping
- CAP-204 DOM, semantic and accessibility-tree analysis
- CAP-205 Form, control and validation discovery
- CAP-206 API/network observation
- CAP-207 Repository structure and dependency analysis
- CAP-208 Existing automation and coverage discovery
- CAP-209 Change-impact discovery
- CAP-210 Discovery evidence and freshness management
- CAP-211 Runtime behavior discovery
- CAP-212 Feature-flag and configuration discovery
- CAP-213 Microservice and service-boundary discovery
- CAP-214 Dependency-graph discovery
- CAP-215 Authentication and authorization-flow discovery

### CAP-300 — Requirements and product understanding

- CAP-301 Business-flow detection
- CAP-302 CRUD and state-transition detection
- CAP-303 User-journey construction
- CAP-304 Requirement extraction
- CAP-305 Acceptance-criteria extraction
- CAP-306 Ambiguity, conflict and missing-information detection
- CAP-307 Requirement versioning and human approval
- CAP-308 Requirement-to-source traceability

### CAP-400 — Risk and strategy

- CAP-401 Product-risk identification
- CAP-402 Impact, likelihood and detectability assessment
- CAP-403 Security, privacy and authorization risk identification
- CAP-404 Risk prioritization and residual-risk tracking
- CAP-405 Test-layer selection
- CAP-406 Coverage planning and duplication avoidance
- CAP-407 Test data, environment and dependency planning
- CAP-408 Strategy review, editing and approval

### CAP-500 — Test design and generation

- CAP-501 Test-case generation
- CAP-502 Positive, negative and boundary coverage
- CAP-503 API and contract-test generation
- CAP-504 Browser and user-journey test generation
- CAP-505 Page/domain object generation
- CAP-506 Fixtures, data builders and authentication setup
- CAP-507 Accessibility test generation
- CAP-508 Visual comparison generation — post-MVP candidate
- CAP-509 Performance test generation — post-MVP candidate
- CAP-510 Security test proposal — execution requires separate authorization
- CAP-511 Framework bootstrap, extension and repair
- CAP-512 Repository-aligned documentation and CI generation

### CAP-600 — Execution

- CAP-601 Local isolated execution
- CAP-602 Container or microVM execution
- CAP-603 CI execution
- CAP-604 Managed cloud-worker execution
- CAP-605 Environment and short-lived credential handling
- CAP-606 Parallelism, sharding and scheduling
- CAP-607 Cancellation, timeout and quota enforcement
- CAP-608 Artifact and environment-fingerprint collection
- CAP-609 Result normalization
- CAP-610 Safe cleanup and recovery

### CAP-700 — Analysis and intelligence

- CAP-701 Test-failure classification
- CAP-702 Bug detection
- CAP-703 Root-cause hypothesis generation
- CAP-704 Flaky-test detection
- CAP-705 Duplicate finding/test detection
- CAP-706 Change and regression analysis
- CAP-707 Evidence correlation
- CAP-708 Severity and impact recommendation
- CAP-709 Confidence calibration and unknown classification
- CAP-710 Business-impact analysis
- CAP-711 Risk-trend analysis
- CAP-712 Historical quality-trend analysis
- CAP-713 Regression prediction
- CAP-714 Change-risk prediction

### CAP-800 — Verification

- CAP-801 Static and structural validation
- CAP-802 Requirement/risk traceability validation
- CAP-803 Assertion-quality validation
- CAP-804 Negative proof or mutation verification
- CAP-805 Repeatability and stability verification
- CAP-806 Fix verification
- CAP-807 Regression detection
- CAP-808 Coverage analysis
- CAP-809 Evidence integrity and provenance verification
- CAP-810 Waiver and human-approval enforcement
- CAP-811 False-positive detection
- CAP-812 False-negative estimation and detection
- CAP-813 Hallucination and unsupported-claim detection
- CAP-814 AI-output self-consistency verification
- CAP-815 Fix-effectiveness and side-effect verification

### CAP-900 — Reporting and collaboration

- CAP-901 Operational dashboard
- CAP-902 Operational and release reports
- CAP-903 Requirement-risk-test-evidence traceability
- CAP-904 Evidence/report export
- CAP-905 Scheduled and on-demand report generation
- CAP-906 Report templates and audience-specific views
- CAP-907 Evidence-package generation
- CAP-908 Notifications and approval inbox
- CAP-909 Audit and decision reporting
- CAP-910 Release-readiness reporting

### CAP-1000 — Platform governance

- CAP-1001 Organizations, projects, roles and permissions
- CAP-1002 Multi-tenant isolation readiness
- CAP-1003 Policy and AI guardrail enforcement
- CAP-1004 Secrets, privacy and retention controls
- CAP-1005 Audit, provenance and non-repudiation
- CAP-1006 Cost, token, compute and concurrency budgets
- CAP-1007 Observability, SLOs and health management
- CAP-1008 Versioning, compatibility and migrations
- CAP-1009 Feature flags, rollout and rollback
- CAP-1010 Evaluation and quality-gate governance
- CAP-1011 Licensing and entitlement enforcement
- CAP-1012 Plugin lifecycle and marketplace readiness
- CAP-1013 Quota-policy administration
- CAP-1014 Billing and metering readiness
- CAP-1015 Workspace and execution isolation

### CAP-1100 — Knowledge and learning

- CAP-1101 Project knowledge graph
- CAP-1102 Embedding generation and lifecycle
- CAP-1103 Semantic and hybrid search
- CAP-1104 Historical scan and snapshot knowledge
- CAP-1105 Historical requirements and test-case knowledge
- CAP-1106 Historical bugs, findings and verification evidence
- CAP-1107 Coding conventions and project-standard knowledge
- CAP-1108 Context cache with freshness and invalidation
- CAP-1109 Evidence-backed recommendation learning
- CAP-1110 Knowledge provenance, retention and deletion
- CAP-1111 Duplicate and contradiction detection across knowledge
- CAP-1112 Human correction and feedback capture

### CAP-1200 — Integrations

- CAP-1201 Integration framework, credentials and health
- CAP-1202 GitHub integration
- CAP-1203 GitLab integration
- CAP-1204 Bitbucket integration
- CAP-1205 Azure DevOps integration
- CAP-1206 Linear integration
- CAP-1207 Jira integration
- CAP-1208 Slack integration
- CAP-1209 Microsoft Teams integration
- CAP-1210 Email integration
- CAP-1211 Generic outbound and inbound webhooks
- CAP-1212 Integration event mapping and idempotency
- CAP-1213 Integration permissions and audit
- CAP-1214 Integration rate-limit and failure management

### CAP-1300 — Analytics

- CAP-1301 Quality-trend analytics
- CAP-1302 Risk-trend analytics
- CAP-1303 Coverage-trend analytics
- CAP-1304 AI accuracy and calibration analytics
- CAP-1305 Execution and flakiness analytics
- CAP-1306 Defect and root-cause analytics
- CAP-1307 Cost, usage and productivity analytics
- CAP-1308 Cohort, project and organization comparison
- CAP-1309 Analytics definitions and data-quality monitoring
- CAP-1310 Predictive quality and regression analytics

## Capability contract

Every capability must have a catalog record containing:

- stable capability ID and name;
- business outcome and owning domain;
- status and maturity;
- `Depends On` capability IDs;
- domain artifacts it `Consumes`;
- domain artifacts it `Produces`;
- responsible system layers;
- authorization and human-approval requirements;
- success, quality, safety, cost and operational metrics;
- supported Input Providers, environments and technology adapters;
- evidence required for maturity promotion.

The initial dependency catalog is defined in `Capability_Dependencies.md`; cross-layer ownership is defined in `Capability_Matrix.md`.

## Capability lifecycle and maturity

Lifecycle status and maturity are separate dimensions.

### Lifecycle status

Proposed → Approved → Planned → In Development → Validated → Released → Deprecated or Rejected.

### AI/product maturity

Research → Prototype → Experimental → Alpha → Beta → GA → Deprecated.

Promotion requires defined evidence. For example, Prototype proves technical feasibility; Alpha passes internal functional, guardrail and observability gates; Beta meets design-partner quality and reliability thresholds; GA meets security, SLO, support, recovery and sustained accuracy requirements.

## Foundation rule

No new Engine or Epic may introduce a capability without adding it here and updating Product Boundaries, Domain Model, relevant events and Decision Log.
