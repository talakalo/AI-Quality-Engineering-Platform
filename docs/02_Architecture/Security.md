# AutoQA AI — Security, Privacy and Compliance

**Version:** 0.1 Draft | **Status:** Pending threat-model review

## Security objectives

Protect customer source, credentials, prompts, test data, artifacts and decisions; prevent cross-tenant access; constrain agent actions; preserve integrity and provenance of evidence; detect and respond to abuse.

## Threats in scope

Prompt injection from repositories/websites, malicious dependencies, command injection, SSRF, credential exfiltration, sandbox escape, cross-tenant access, poisoned artifacts, webhook replay, supply-chain compromise, excessive permissions, data retention errors, and fabricated or altered evidence.

## Core controls

- OIDC, MFA support, short sessions for sensitive operations;
- organization-scoped RBAC plus object-level authorization;
- secret manager and short-lived workload identities;
- encryption in transit and at rest with managed keys;
- isolated workers, non-root runtime, syscall/capability restrictions;
- default-deny egress and command allowlists;
- signed commits/builds/images and artifact hashes;
- immutable audit log with actor and correlation;
- input/output redaction and DLP checks;
- quotas, anomaly detection, cancellation and emergency stop.

## AI-specific controls

Treat repository and website content as untrusted data, separate instructions from retrieved content, typed tools, policy enforcement outside the model, least-context prompts, provider data-use controls, and adversarial evaluations.

## Privacy

Purpose limitation, data classification, configurable retention, deletion workflows, access/export capability, regional requirements, subprocessor inventory, and no model training on customer content without explicit agreement.

## Assurance

Threat model per major capability, SAST/DAST/dependency/container/IaC scans, penetration testing before broad launch, access reviews, incident exercises, restore tests, and tracked remediation SLAs.

## Release blockers

Critical vulnerabilities, sandbox escape, secret exposure, cross-tenant access, unaudited privileged action, or unverified deletion/retention controls.
