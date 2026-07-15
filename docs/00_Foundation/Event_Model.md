# AutoQA AI — Event Model

**Version:** 0.1 Draft | **Status:** Canonical event vocabulary pending approval

## Event principles

Events describe completed facts in past tense. Commands request actions. Events are immutable, versioned, tenant-scoped, traceable and safe for replay. Database transactions use an outbox before publication.

## Standard event envelope

```text
event_id, event_type, event_version
occurred_at, organization_id, project_id
aggregate_type, aggregate_id, aggregate_version
correlation_id, causation_id, actor_type, actor_id
source, sensitivity, payload, metadata
```

## Pipeline events

### Input and discovery

- InputSourceRegistered
- InputSourceValidated / InputSourceValidationFailed
- DiscoveryRequested
- DiscoveryStarted
- ObservationRecorded
- DiscoveryCompleted / DiscoveryFailed / DiscoveryCancelled
- ApplicationSnapshotCreated

### Analysis and requirements

- AIAnalysisStarted / AIAnalysisCompleted / AIAnalysisBlocked
- BusinessFlowDetected
- RequirementDrafted
- RequirementGapDetected
- RequirementVersionApproved / RequirementVersionRejected

### Risk and strategy

- RiskIdentified
- RiskAnalysisCompleted
- TestStrategyDrafted
- TestStrategyApproved / TestStrategyRejected
- TestCaseGenerated
- TestCaseSetApproved

### Framework and execution

- FrameworkAnalysisCompleted
- ChangeSetGenerated
- VerificationGateEvaluated
- ExecutionRequested
- ExecutionStarted
- TestResultRecorded
- EvidenceCreated
- ExecutionCompleted / ExecutionFailed / ExecutionCancelled

### Findings and verification

- FailureAnalysisStarted
- FindingCreated / FindingClassified / FindingDeduplicated
- BugConfirmed
- FixVerificationRequested
- VerificationStarted
- VerificationCompleted / VerificationFailed / VerificationBlocked

### Governance and reporting

- ApprovalRequested / ApprovalGranted / ApprovalDenied / ApprovalExpired
- PolicyViolationDetected
- BudgetThresholdReached / QuotaExceeded
- PublicationRequested / ChangePublished
- DashboardProjectionUpdated
- ReportGenerated
- RetentionExpired / ArtifactDeleted

## State-machine rule

Events may advance state only through an authorized domain transition. Consumers must be idempotent, tolerate duplicate delivery and reject incompatible versions explicitly.

## Event quality

Schemas have owners, compatibility tests, example payloads, privacy classification and retention. Events never contain raw secrets, unnecessary source code or unsigned artifact bytes.

