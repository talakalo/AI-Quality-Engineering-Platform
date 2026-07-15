# AutoQA AI — Website Discovery Engine

**Version:** 0.1 Draft | **Status:** Pending approval

## Purpose

Operate the Website Provider and discovery capabilities to build an evidence-backed model of an authorized web application. It is one input path into the platform, not the platform's universal entry point. The Engine does not crawl arbitrary websites or bypass access controls.

## Inputs

Approved base URL, environment policy, credentials reference, allowed paths/domains, route hints, repository context, sitemap/OpenAPI when available, crawl depth, page budget, and data-handling policy.

## Capabilities

- discover reachable routes and navigation transitions;
- capture page titles, semantic landmarks, forms, controls, tables and dialogs;
- record accessible roles/names and candidate stable locators;
- identify network endpoints and response schemas without storing secrets;
- detect authentication boundaries and session behavior;
- map user journeys and state prerequisites;
- report console errors, failed requests, accessibility signals and unstable UI patterns;
- compare observed behavior with requirements and repository routes.

## Safety

Robots and environment policy, strict domain/path allowlist, rate limits, no destructive submission by default, redact PII and tokens, block payment and irreversible flows, and preserve an audit trail of every navigation and action.

## Output

Versioned application map, route/page inventory, interaction graph, locator candidates, API observations, auth notes, risks, inaccessible areas, and source-linked screenshots or traces.

## Quality requirements

Every observation includes URL/path, timestamp, source environment, authenticated role, evidence, and confidence. Inferences are not represented as confirmed behavior.
