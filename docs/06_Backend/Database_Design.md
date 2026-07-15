# AutoQA AI — Database Design

**Version:** 0.1 Draft | **Status:** Pending approval

## Principles

PostgreSQL is the system of record. IDs are globally unique. Tenant ownership is explicit on tenant-scoped rows. Mutable business objects are versioned where historical reproduction matters. Large artifacts live in object storage with database metadata and hashes.

## Core entities

- organizations, users, memberships, roles, permissions;
- projects, repositories, repository_connections, environments;
- requirements, requirement_versions, acceptance_criteria, risks;
- test_plans, plan_versions, plan_items, approvals;
- agent_runs, agent_steps, tool_calls, policies;
- workspaces, change_sets, generated_files;
- test_cases, test_case_versions, traceability_links;
- executions, execution_attempts, test_results, findings;
- artifacts, evidence_items, failure_classifications;
- integrations, secret_references, quotas, usage_records;
- audit_events, outbox_events.

## Data rules

- tenant ID required and indexed on tenant-scoped tables;
- no plaintext credentials; store only secret-manager references;
- append-only approval and audit history;
- immutable run input snapshot and source commit SHA;
- optimistic concurrency for edited plans and requirements;
- foreign keys for ownership and lifecycle integrity;
- soft deletion only when legal/audit retention requires it;
- explicit retention status for artifacts and prompts.

## Indexing priorities

Organization/project, run status and creation time, requirement traceability, execution/test lookup, audit chronology, idempotency keys, workflow leases, and artifact retention deadlines.

## Migration policy

Forward-only, reviewed migrations; expand-and-contract for incompatible changes; backup and restore test before risky migrations; production migrations are observable, cancellable where possible, and never generated at runtime.

## Open decisions

Tenant database model, vector-search requirement, event retention, prompt storage policy, regional data placement, encryption key hierarchy, and analytics replica strategy.

---
