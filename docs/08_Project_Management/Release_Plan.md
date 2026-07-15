# AutoQA AI — Release Plan

**Version:** 0.1 Draft | **Status:** Pending approval

## Release stages

1. Internal development
2. Internal alpha on reference repositories
3. Private alpha with selected design partners
4. Limited beta with quotas and support coverage
5. General availability after sustained gates

## Mandatory launch gates

- approved scope and open-risk register;
- threat model complete and no unresolved critical/high release blocker;
- agent and verification evaluations meet thresholds;
- reference and partner workflows meet success targets;
- isolation, authorization, audit and secret controls verified;
- SLO dashboards, alerts, on-call and runbooks active;
- backup restore, rollback and incident exercises passed;
- retention/deletion and privacy obligations verified;
- accessibility and supported-browser checks passed;
- capacity, quota and cost protections enabled;
- support, status communication and ownership defined.

## Deployment strategy

Immutable versioned artifacts; staging soak; database expand-and-contract; canary or small cohort; automated health gates; progressive exposure; immediate pause and rollback path.

## Rollback

Application rollback, feature flag disablement, worker image rollback, workflow pause, integration disablement, and migration recovery are documented and rehearsed. Evidence and audit history remain intact.

## Release evidence bundle

Approved version, commit/build provenance, migrations, SBOM/scans, test and AI evaluation results, performance comparison, known limitations, monitoring, rollout/rollback, approvers, and customer-facing notes.

## Post-release

Observe SLOs, false-pass/failure signals, agent safe-stops, cost, support cases and security alerts; hold a release review; convert findings into prioritized backlog; update documents and decisions.

## Stop conditions

Cross-tenant exposure, secret leakage, fabricated evidence, uncontrolled external action, significant false-confidence regression, unrecoverable migration, or inability to audit/cancel operations stops rollout.
