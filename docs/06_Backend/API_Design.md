# AutoQA AI — API Design

**Version:** 0.1 Draft | **Status:** Pending approval

## Style

Versioned JSON HTTP API for product operations, typed events for asynchronous work, and generated OpenAPI as the contract. Internal implementation must not leak provider-specific models.

## Resource groups

- `/v1/organizations`, `/memberships`, `/policies`
- `/v1/projects`, `/repositories`, `/environments`
- `/v1/requirements`, `/risks`, `/test-plans`
- `/v1/approvals`, `/change-sets`
- `/v1/agent-runs`, `/executions`, `/findings`
- `/v1/test-cases`, `/traceability`
- `/v1/artifacts`, `/evidence`, `/audit-events`
- `/v1/integrations`, `/usage`, `/quotas`

## Contract rules

- OAuth/OIDC identity with organization-scoped authorization;
- UUID resource IDs and ISO-8601 UTC timestamps;
- idempotency key required for retriable mutations;
- cursor pagination, filtering, and stable ordering;
- consistent error envelope with code, message, correlation ID, and safe details;
- ETags or version fields for concurrent editing;
- asynchronous operations return operation/run resources, not fake completion;
- signed, short-lived artifact access URLs;
- request, response, and event schemas validated at runtime.

## Events

Plan proposed, approval recorded, run started, step completed, evidence created, verification failed, run completed, quota exceeded, publication requested, and retention expired.

## Versioning

Backward-compatible additions within v1; explicit deprecation windows; consumer contract tests; no silent semantic changes; event schemas include type and version.

## Security requirements

Object-level authorization on every resource, rate limits, payload limits, replay protection for webhooks, outbound allowlists, audit for sensitive reads and all mutations, and redaction before logs.
