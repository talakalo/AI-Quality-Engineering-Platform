# AutoQA AI — CI/CD

**Version:** 0.1 Draft

## Pull-request pipeline

Dependency lock validation → format/lint → strict types → unit/property tests → integration/contract tests → agent evaluation subset → build → migration validation → secret/SAST/dependency/license/IaC scans → artifact/SBOM generation.

## Main branch

Re-run trusted gates, build immutable signed artifacts, publish provenance, deploy ephemeral or staging environment, run smoke/integration/security checks and retain evidence.

## Production delivery

Promote the same artifact; verify change approval and release bundle; expand database first; canary cohort; automated SLO and error gates; progressive rollout; rollback/feature-disable path.

## Repository controls

Protected branches, required reviews, CODEOWNERS for security/architecture/prompts/migrations, least-privilege CI identity, pinned actions, no long-lived secrets, isolated untrusted PR execution and signed commits/artifacts.

## Generated automation integration

AutoQA changes run in a restricted workflow before publication. Draft PR creation is an explicit approved action. Generated checks cannot alter required branch policy.

## Metrics

Lead time, pipeline duration, queue time, failure/retry rate, flaky gate rate, deployment frequency, change-failure rate, rollback time and evidence completeness.

