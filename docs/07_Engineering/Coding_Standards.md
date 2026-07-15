# AutoQA AI — Coding Standards

**Version:** 0.1 Draft | **Status:** Pending approval

## General

Readable and explicit code; small cohesive modules; no speculative abstractions; no hidden global state; typed boundaries; deterministic behavior where possible; comments explain why, not syntax.

## TypeScript

Strict mode; avoid `any`; validate untrusted input; exhaustive unions; immutable values by default; named domain types; no non-null assertions without proven invariant; async errors handled with context.

## Architecture

Domain logic independent of UI, framework and provider SDKs. External systems behind interfaces. Dependency direction enforced. Controllers remain thin. Database transactions and authorization boundaries are explicit.

## Errors and logging

Typed errors and stable reason codes; never swallow errors; preserve cause; structured logs with correlation; no secrets, tokens, raw prompts, PII, or full third-party payloads in logs.

## Tests

Arrange/act/assert clarity; deterministic data; behavioral names; meaningful assertions; avoid implementation coupling; no arbitrary sleeps; every defect fix adds a regression test; generated code follows target repository standards first.

## Git and reviews

Small conventional commits, linked requirement/task, no unrelated formatting changes, reviewed migrations and dependencies, mandatory review for security/policy/agent prompts, and no direct protected-branch changes.

## Quality gates

Formatter, linter, strict type-check, tests, build, secret scan, dependency/license scan, architecture checks, and changed-code coverage/risk review.
