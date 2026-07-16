# Contributing

AutoQA AI is currently in the Foundation phase. Product implementation must map to an approved Capability, Domain Object, Event and Epic.

## Before opening a change

1. Link the affected Capability IDs and approved requirement.
2. State scope, exclusions and security impact.
3. Update the Decision Log when an architectural choice changes.
4. Add tests and evidence appropriate to the risk.
5. Run `npm run check`.

## Commit scope

Keep changes small and reviewable. Do not mix documentation, dependencies, migrations and unrelated refactoring without a clear reason.

## Current implementation boundary

Only backend-neutral engineering foundations are authorized until the backend ADR and MVP boundaries are approved. No autonomous merge, deployment or production access is permitted.
