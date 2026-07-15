# AutoQA AI — Prompt Engineering

**Version:** 0.1 Draft | **Status:** Prompts are versioned product assets

## Principles

Prompts are documented, reviewed, tested and versioned outside business logic. Runtime composition uses approved templates, typed context and explicit tool schemas; secrets and irrelevant repository content are excluded.

## Prompt package

Each prompt has ID/version, agent and task, purpose, allowed inputs, system rules, context schema, tool contract, output schema, examples, refusal/stop rules, token budget, evaluation suite and change history.

## Composition

Stable policy instructions → task objective → authoritative product context → retrieved evidence marked as untrusted → constraints → tool schemas → structured output contract.

## Injection defense

Repository files, web pages, logs, issues and tool output are data, never higher-priority instructions. Agents may only call typed allowlisted tools; enforcement occurs outside the model.

## Change control

Prompt changes require evaluation comparison, security/adversarial suite, cost/latency review, reviewer approval, rollout cohort and rollback version. No direct production prompt editing.

## Required prompt catalog

Requirement extraction, risk analysis, strategy, generation, semantic verification, failure analysis, maintenance and explanation prompts—each documented separately before implementation.

