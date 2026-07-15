# AutoQA AI — System Flow

**Version:** 0.1 Draft | **Status:** Foundation approval required

## End-to-end flow

```text
1. Project and application created
2. Input sources connected and authorized
3. Sources validated and normalized
4. Discovery scan approved and started
5. Application snapshot and observations created
6. AI analysis produces evidence-linked understanding
7. Requirements and business flows extracted
8. Human resolves gaps and approves requirement version
9. Risks identified and prioritized
10. Test strategy generated, edited and approved
11. Technology-neutral test cases generated and approved
12. Framework change generated in isolated workspace
13. Static and structural gates executed
14. Tests executed in approved environment
15. Results and evidence normalized
16. Failures analyzed and findings classified
17. Verification gates and negative proof executed
18. Human reviews change, evidence and residual risk
19. Approved publication occurs when policy permits
20. Dashboard projections, reports and metrics update
```

## Approval gates

- G1 Input access and scan scope
- G2 Requirement version
- G3 Risk and test strategy
- G4 Code generation/change scope
- G5 Shared-environment execution
- G6 External publication such as draft PR
- G7 Waiver of a non-critical gate

## Alternative paths

- insufficient context → clarification/blocker;
- unsupported source or technology → capability gap;
- suspected prompt injection → quarantine and security review;
- failed deterministic gate → remediation, no AI override;
- execution infrastructure failure → resumable retry under policy;
- uncertain classification → Unknown with missing-evidence request;
- cancellation → durable cancelled state and verified cleanup.

## Flow invariants

Stages consume versioned artifacts, emit versioned artifacts/events, preserve correlation and provenance, and are idempotent or protected by idempotency keys. Partial completion is never labeled success.

