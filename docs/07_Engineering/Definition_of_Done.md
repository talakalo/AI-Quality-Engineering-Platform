# AutoQA AI — Definition of Done

**Version:** 0.1 Draft | **Applies to:** Product, code, AI, infrastructure and documentation changes

A change is Done only when all applicable conditions are met:

## Product

- linked to approved requirement, risk, boundary and acceptance criteria;
- primary persona outcome demonstrated;
- out-of-scope and residual risk documented;
- success telemetry and ownership defined.

## Engineering

- architecture and contracts respected; ADR updated when needed;
- readable typed code follows standards;
- migrations, dependency and configuration changes are reviewed;
- format, lint, types, build and applicable tests pass;
- no secrets, critical vulnerabilities or unapproved permissions.

## AI and verification

- prompt/model/tool versions recorded;
- deterministic validation surrounds AI output;
- golden, adversarial, guardrail and regression evaluations pass;
- generated automation proves intended behavior, including negative proof where applicable;
- evidence, confidence and limitations are visible.

## Operations

- logs, traces, metrics, dashboards and alerts cover the change;
- SLO/capacity/cost impact reviewed;
- rollout, feature flag, rollback and migration recovery defined;
- runbook/support documentation updated.

## UX and accessibility

- loading, empty, error, blocked, cancelled and permission states handled;
- responsive and keyboard behavior verified;
- accessibility and content standards pass.

## Delivery

- peer and required specialist reviews complete;
- CI/CD evidence attached;
- documentation, API schemas, diagrams and backlog updated;
- change is deployed to the required validation environment and acceptance evidence retained.

Waivers require owner, reason, risk, compensating control, expiry and auditable approval. A waiver cannot bypass critical security or tenant-isolation blockers.

