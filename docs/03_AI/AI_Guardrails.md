# AutoQA AI — AI Guardrails

**Version:** 0.1 Draft | **Status:** Mandatory before agent implementation

## Permission matrix

| Action | Default |
|---|---|
| Read allowlisted repository/context | Allowed with connection consent |
| Analyze and propose plan | Allowed |
| Apply patch in isolated workspace | Requires approved plan |
| Run allowlisted local checks | Requires approved execution scope |
| Access shared test environment | Explicit environment approval |
| Push branch/open draft PR | Per-action human approval |
| Merge, deploy, production access | Prohibited in MVP |
| Read/export secrets or raw credentials | Prohibited |

## Mandatory verification

All generated code passes static gates, targeted execution, traceability and evidence checks. High-impact conclusions require deterministic evidence or human confirmation. AI cannot waive a failed deterministic gate.

## Approval triggers

Scope expansion, repository writes, dependency changes, network access, shared environment execution, data mutation, external publication, budget increase, policy exception and destructive action.

## Technical enforcement

Typed tools, capability tokens, sandbox, allowlists, quotas, policy engine, immutable audit, secret redaction, provenance, timeouts, cancellation and emergency stop. Prompt instructions alone are never a security control.

## Safe-stop conditions

Missing authority, conflicting sources, suspected prompt injection, secret exposure risk, insufficient evidence, unsupported stack, budget exhaustion, repeated tool failure or uncertain destructive impact.

## Evaluation

Adversarial repository/web content, privilege escalation, indirect injection, exfiltration attempts, approval bypass, fabricated evidence, tool misuse and cross-tenant retrieval are release-blocking test suites.

