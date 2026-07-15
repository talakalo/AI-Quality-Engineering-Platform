# AutoQA AI — Dashboard Engine

**Version:** 0.1 Draft

## Purpose

Transform domain events and evidence into trustworthy operational and quality views without recalculating business truth in the browser.

## Responsibilities

Read models for project status, traceability, run timeline, quality trends, failures, approvals, cost, guardrails and release readiness; incremental updates; time-window aggregation; exportable evidence views.

## Data integrity

Every metric has definition, source, freshness, tenant scope and drill-down. Aggregates reconcile with source records. Unknown, delayed and partial data are explicit.

## Interfaces

Versioned query API and event-driven projections consumed by the Dashboard UI. Authorization is applied during projection and query, not only in frontend routing.

## Metrics

Projection lag, freshness, query latency, reconciliation errors, export success, dashboard task completion and misleading/ambiguous metric reports.

