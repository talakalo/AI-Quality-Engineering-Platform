# AutoQA AI — Backend

**Version:** 0.1 Draft | **Status:** Pending approval

## Responsibilities

Own domain rules, authorization, projects, requirements, plans, approvals, durable operations, agent/tool policy, executions, evidence metadata, integrations, usage, retention, and audit.

## Module boundaries

Identity and tenancy; projects/repositories; requirements/risks; plans/approvals; orchestration; agents/tools; automation/execution; verification/findings; artifacts/evidence; integrations; billing/quotas; policy/audit.

## Application rules

- controllers validate and delegate; domain services own business decisions;
- authorization checked in the application layer and reinforced in data access;
- transactions protect state changes and outbox events;
- external calls use adapters with timeouts, retries, circuit breaking and idempotency;
- background jobs are durable and safe to resume;
- no long-running execution inside HTTP requests;
- sensitive values are redacted before logs and model calls.

## Error model

Typed domain, validation, authorization, conflict, quota, dependency, timeout, cancellation and internal errors. Client responses are safe; internal diagnostics retain correlation.

## Observability

Trace every request and workflow, propagate correlation and tenant context, emit RED metrics and business metrics, structured logs, audit events, queue depth, worker health, model usage, and artifact failures.

## Backend quality gates

Format, lint, strict type-check, unit tests, integration tests with real PostgreSQL where needed, contract tests, migration validation, authorization tests, secret scan, dependency scan, and performance budgets for critical endpoints.
