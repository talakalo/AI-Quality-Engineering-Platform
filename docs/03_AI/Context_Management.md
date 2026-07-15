# AutoQA AI — Context Management

**Version:** 0.1 Draft

## Context layers

- approved organization/project policy;
- versioned requirement and decisions;
- pinned repository snapshot and detected conventions;
- task/run state;
- retrieved code, docs and execution evidence;
- short-lived conversation context.

## Rules

Every context item has source, version/commit, tenant, sensitivity, timestamp and authority level. Retrieval favors authoritative and current sources. Conflicts are surfaced rather than blended.

## Repository indexing

Parse structure and symbols, chunk semantically, retain file/line provenance, respect ignore/sensitivity rules and invalidate affected indexes on commit change. Vector retrieval supplements, not replaces, deterministic search and dependency mapping.

## Budgeting

Rank by task relevance and authority; summarize with provenance; include only necessary code spans; reserve tokens for output and tool results; report omitted critical context.

## Privacy and retention

Redact secrets/PII before model calls, honor provider policy, prevent cross-tenant retrieval, define memory expiry and support deletion. Hidden model memory is not a product data store.

