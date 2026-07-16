# ADR-002 — Backend Framework

**Status:** Accepted for MVP  
**Date:** 16 July 2026  
**Decision:** NestJS/TypeScript for the control-plane API; Python workers remain an allowed future boundary

## Context

The MVP needs a governed API/control plane for projects, requirements, approvals, orchestration, evidence and integrations. AI work is primarily performed through external model APIs, while automation execution is Playwright/Node based. The repository already contains backend-neutral TypeScript domain and JSON Schema contracts.

## Options

- NestJS with Fastify adapter
- FastAPI with Pydantic

Both support asynchronous APIs and OpenAPI. FastAPI is based on Python type hints, Starlette and Pydantic and provides automatic OpenAPI/JSON Schema documentation. NestJS is TypeScript-first and provides modules for validation, Fastify and OpenAPI generation.

## Weighted evaluation

Scores are 1–5. They reflect this product's MVP, not a universal framework ranking.

| Criterion | Weight | NestJS | FastAPI | Evidence/rationale |
|---|---:|---:|---:|---|
| AI workload suitability | 25% | 3 | 5 | Python has the stronger local ML/data ecosystem; MVP uses model APIs rather than local training. |
| Playwright/Node integration | 20% | 5 | 2 | Direct runtime and package reuse with Playwright and TypeScript contracts. |
| Development simplicity | 15% | 4 | 4 | FastAPI is concise; NestJS avoids a second language/toolchain in MVP. |
| Scalability/concurrency | 15% | 4 | 4 | Both support async I/O and horizontal deployment. |
| Ecosystem maturity | 10% | 5 | 5 | Both have mature production ecosystems. |
| End-to-end type safety | 10% | 5 | 4 | NestJS consumes current TypeScript domain packages directly. |
| Deployment complexity | 5% | 4 | 4 | Both containerize cleanly; one runtime reduces MVP operations. |
| **Weighted total** | **100%** | **4.15** | **3.95** | NestJS wins narrowly for this MVP. |

## Decision

Use NestJS with the Fastify adapter for the MVP control-plane API. Keep domain contracts framework-independent. AI/ML workloads that materially benefit from Python must run behind versioned contracts as isolated workers or services rather than introducing Python into every control-plane module.

## Consequences

- one TypeScript workspace for UI, API, contracts and Playwright;
- direct compile-time reuse of domain types;
- JSON Schema remains the interoperability contract for future Python workers;
- NestJS decorators and framework APIs stay at transport boundaries;
- business rules remain in pure domain packages;
- the team must avoid moving execution/browser workloads into API request handlers.

## Revisit triggers

- local model inference, training or Python-only quality tooling becomes a core workload;
- measured Node worker limitations affect SLOs or cost;
- contract duplication becomes significant;
- the control plane and AI worker deployment lifecycles require independent ownership.

## Sources

- NestJS introduction: https://docs.nestjs.com/
- NestJS validation: https://docs.nestjs.com/techniques/validation
- NestJS OpenAPI: https://docs.nestjs.com/openapi/introduction
- FastAPI features: https://fastapi.tiangolo.com/features/
- FastAPI concurrency: https://fastapi.tiangolo.com/async/
- FastAPI response models: https://fastapi.tiangolo.com/tutorial/response-model/
