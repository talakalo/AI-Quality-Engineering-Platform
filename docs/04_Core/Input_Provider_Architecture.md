# AutoQA AI — Input Provider Architecture

**Version:** 0.1 Draft | **ADR:** ADR-011

## Goal

Accept multiple evidence sources without coupling the Quality Engineering Pipeline to websites, GitHub or any single file format.

## Architecture

```text
External Source
    ↓
Input Provider
    ↓
Validation + Security Classification
    ↓
Provider Artifact
    ↓
Normalization Layer
    ↓
Application Snapshot + Observations
    ↓
Quality Engineering Engine Pipeline
```

## Provider contract

Every provider implements:

- capability and version discovery;
- authorization requirements and permission preview;
- source validation and safe metadata extraction;
- immutable version/fingerprint calculation;
- sensitivity and secret/PII detection;
- bounded fetch with size, rate, path and network policy;
- normalized observations with provenance;
- freshness/invalidation rules;
- deterministic failure codes;
- health, cost and usage telemetry.

## Planned providers

| Provider | Primary normalized output | Initial status |
|---|---|---|
| Website Provider | pages, actions, routes, network observations | MVP candidate |
| Repository Provider | files, symbols, dependencies, conventions, tests | MVP candidate |
| OpenAPI Provider | endpoints, schemas, auth and examples | MVP candidate |
| Postman Provider | requests, environments and assertions | Post-MVP candidate |
| Requirements Document Provider | requirements, criteria and source spans | MVP candidate |
| HAR Provider | requests, responses, timings and flows | Post-MVP candidate |
| Playwright Framework Provider | config, tests, fixtures, coverage patterns | MVP candidate |
| Figma Provider | screens, components and interaction annotations | Future candidate |

## Normalized artifact types

Input Source, Observation, Page, Endpoint, Schema, Component, Business Flow candidate, Requirement candidate, Existing Test, Framework Convention, Evidence and Source Reference.

## Security boundaries

All provider content is untrusted. Providers cannot issue pipeline instructions, call arbitrary tools or broaden access. Fetching uses least privilege, allowlists, quotas, redaction and tenant isolation. Active content is never executed during ingestion.

## Extensibility

Adding a provider must not require changes to downstream Engines when its information maps to existing normalized artifacts. New artifact types require Domain Model, event, schema, capability and compatibility review.

## Acceptance criteria

Two different providers can describe the same endpoint or flow; normalization preserves both sources, correlates without destructive merging, surfaces conflicts and lets downstream Engines cite exact provenance.

