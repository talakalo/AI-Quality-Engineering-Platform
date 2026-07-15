# AutoQA AI — Execution Engine

**Version:** 0.1 Draft

## Purpose

Run approved automation reproducibly in isolated environments and produce normalized, complete evidence.

## Lifecycle

Authorize → allocate worker → materialize pinned source → inject short-lived references → install from lockfile → execute allowlisted command → stream redacted status → collect artifacts → normalize results → cleanup and attest.

## Controls

Non-root isolation, resource/time quotas, egress allowlist, environment-specific permissions, cancellation, heartbeat, bounded diagnostic retry, no retry-to-green, and reconciliation of abandoned workers.

## Outputs

Attempt status, tests, steps, stdout/stderr, traces, screenshots, video, network/console data, resource use, environment fingerprint, artifact hashes and cleanup result.

## Metrics

Queue/start/run duration, success by failure class, cancellation latency, artifact completeness, worker leak rate, flakiness, resource saturation and cost.

