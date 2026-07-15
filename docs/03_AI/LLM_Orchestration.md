# AutoQA AI — LLM Orchestration

**Version:** 0.1 Draft

## Model

A deterministic durable state machine owns workflow state. LLMs perform bounded interpretation, planning and analysis steps; they do not own authorization, retries, approvals, persistence or final truth.

## Orchestration stages

Intake → context assembly → specialist agent → schema validation → policy check → deterministic validation → optional critic/revision → human gate → persisted result.

## Routing

Select model by task capability, sensitivity, context size, latency and cost. Provider abstraction records model/version and supports fallback only when data policy and evaluation compatibility permit it.

## Reliability

Idempotent step IDs, bounded attempts, timeout, cancellation, checkpoints, structured output repair, provider circuit breakers and explicit blocked/partial states.

## Cost control

Per-step token budgets, context deduplication, retrieval limits, caching only for safe equivalent inputs, model tiering, organization quotas and cost forecast before expensive runs.

## Audit

Record prompt/template version, redacted context references, model parameters, tool calls, output hash, validations, cost, latency and completion reason.

