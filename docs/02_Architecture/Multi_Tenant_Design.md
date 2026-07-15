# AutoQA AI — Multi-Tenant Design

**Version:** 0.1 Draft | **MVP activation:** Deferred | **Architecture readiness:** Required

## Hierarchy

Organization → Workspaces/Teams (future) → Projects → Repositories/Environments → Requirements/Runs/Evidence.

## Isolation model

Every tenant-scoped row carries organization ownership; object-level authorization is mandatory; storage keys and encryption context include tenant; queues and caches namespace tenant data; execution uses a dedicated ephemeral workspace and scoped identity.

## Proposed data approach

Shared PostgreSQL with organization-scoped rows for early stages, reinforced by repository-level authorization and database RLS where practical. Enterprise dedicated database/region remains a future option behind the same tenancy contract.

## Identity and roles

Organization Admin, Project Admin, Automation Engineer, Approver, Viewer and Service Identity. Permissions distinguish read, configure, analyze, generate, execute, approve, publish and export.

## Protection requirements

Cross-tenant negative tests on every resource; tenant context cannot come solely from client input; background jobs re-authorize ownership; cache and artifact URLs are tenant-scoped and short-lived; support access is explicit, time-limited and audited.

## Lifecycle

Provisioning, invitations, ownership transfer, suspension, export, retention, deletion and cryptographic erasure must be designed before multi-tenant launch.

