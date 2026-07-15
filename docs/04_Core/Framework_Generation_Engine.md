# AutoQA AI — Framework Generation Engine

**Version:** 0.1 Draft | **Status:** Pending approval

## Purpose

Generate or extend a Playwright Test framework that fits the target repository instead of imposing a universal template.

## Detection before generation

Identify existing Playwright version, package manager, TypeScript settings, config, projects, fixtures, page/domain objects, API clients, authentication state, reporters, CI commands, naming rules, and test-data patterns.

## Generation modes

- **Extend:** preferred when a valid framework exists.
- **Repair:** propose corrections for an incomplete or inconsistent setup.
- **Bootstrap:** create a minimal framework only when none exists and the plan approves it.

## Generated assets when applicable

Pinned dependencies, Playwright config, environment validation, fixtures, domain/page abstractions, API clients, data builders, authentication setup, tests, reporters, artifact policy, scripts, CI job, README, and example environment file without secrets.

## Standards

- TypeScript strict mode;
- web-first assertions and auto-waiting;
- semantic locators with stable test IDs only when necessary;
- no arbitrary sleeps;
- isolated and parallel-safe tests;
- secrets only through approved runtime references;
- trace/video/screenshots retained according to policy;
- tags and project selection for targeted CI;
- accessibility and API checks when required by the plan.

## Compatibility matrix

The generator declares supported Node, Playwright, TypeScript, browsers, operating systems, package managers, reporters, and authentication patterns. Unsupported combinations return a blocker.

## Verification

Generated projects must install from lockfile, list tests, type-check, run a smoke test, produce artifacts, detect a controlled defect, and run through the documented CI command.
