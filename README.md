# AutoQA AI — AI Quality Engineering Platform

AutoQA AI is a documentation-first, evidence-based AI Quality Engineering Platform. It is designed as a pipeline of bounded Engines that ingest product context, discover application behavior, extract requirements, assess risk, generate and execute Playwright automation, detect defects, verify claims and report traceable evidence.

## Current status

The project is in the **Foundation and product-design phase**. No product implementation is approved yet.

The current work defines:

- Capability Map and MVP capability scope
- Domain Model, System Flow and Event Model
- AI Platform, Knowledge and Integration capabilities
- Input Provider architecture
- Quality Engineering Engine pipeline
- Product, architecture, security and engineering specifications
- Backlog, Epics, Roadmap and Release Plan

## Documentation

Start with [`docs/README.md`](docs/README.md), then review the Foundation layer in [`docs/00_Foundation`](docs/00_Foundation).

The intended lifecycle is:

```text
Ingest → Normalize → Discover → Analyze → Extract Requirements
→ Assess Risk → Design Strategy → Generate Tests and Framework
→ Execute → Detect Bugs → Verify → Report
```

## Governance

All documents are Draft until explicitly approved. Documentation approval does not authorize implementation. Product code will begin only after Foundation, scope, architecture, security, test strategy and Definition of Done gates are approved.
