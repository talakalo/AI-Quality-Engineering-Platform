# AutoQA AI — Testing Strategy

**Version:** 0.1 Draft | **Status:** Pending approval

## Goal

Verify deterministic software, AI behavior, security boundaries, execution isolation, integrations, reliability, and end-to-end product outcomes without relying on a slow UI-heavy suite.

## Test layers

- unit tests for domain and transformation logic;
- property-based tests for parsers, policies and state transitions;
- integration tests with PostgreSQL, queue/workflow and storage;
- API and event contract tests;
- component tests for frontend behavior and accessibility;
- adapter tests against provider sandboxes or recorded contracts;
- a focused set of Playwright end-to-end journeys;
- security, isolation, performance, resilience and recovery tests.

## AI evaluation layers

Golden repository tasks, plan scoring, patch compilation and execution, mutation detection, groundedness, tool-selection policy, prompt injection resistance, unsafe action refusal, confidence calibration, cost/latency, and regression comparison across model/prompt changes.

## Test data

Synthetic, deterministic, tenant-isolated factories; seeded reference repositories; versioned golden datasets; no production secrets or uncontrolled PII; cleanup verification.

## CI suites

Fast PR suite, integration suite, agent evaluation subset, nightly browser/provider matrix, security scans, performance baselines, and scheduled backup/restore and chaos exercises.

## Flakiness policy

Retries are diagnostic, not a pass mechanism. Quarantine requires owner, evidence, issue, expiry, and continued visibility. Flaky tests cannot satisfy release-critical coverage.

## Exit criteria

Coverage is risk-based; critical paths and authorization boundaries have deterministic tests; AI evaluation thresholds pass; no critical known defect; release evidence is complete.
