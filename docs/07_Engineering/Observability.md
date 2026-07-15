# AutoQA AI — Observability

**Version:** 0.1 Draft

## Goals

Explain what happened across user request, API, orchestration, agent, tool, worker, browser, external integration and evidence storage while protecting sensitive data.

## Signals

- **Logs:** structured JSON with severity, service, tenant-safe identifiers, correlation, event and reason code.
- **Traces:** OpenTelemetry across HTTP, workflows, queues, model calls, tools, workers, browser execution and storage.
- **Metrics:** RED/USE, workflow outcomes, queue/worker health, model tokens/cost, verification gates, quality metrics and guardrail events.
- **Errors:** Sentry or equivalent with releases, traces, ownership and redaction.
- **Health:** liveness, readiness, dependency health and synthetic end-to-end probes.

## Correlation

Trace ID, organization, project, requirement version, run, workflow, worker and source commit connect all safe telemetry and audit records.

## Privacy

No credentials, source content, raw prompts, PII or full artifacts in telemetry. Redaction is tested; access and retention are role- and environment-specific.

## SLOs and alerts

Availability, request latency/error, workflow completion, queue delay, worker allocation, cancellation, evidence completeness and integration health. Alerts are actionable, routed to owners and linked to runbooks.

## Dashboards

Service health, workflow funnel, execution fleet, provider/model, storage/evidence, security guardrails, tenant usage/cost and release comparison.

