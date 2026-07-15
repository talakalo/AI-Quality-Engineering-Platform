# AutoQA AI — Capability Matrix

**Version:** 0.1 Draft | **Status:** Architectural impact view

## Legend

`O` owns the capability, `C` contributes, `U` consumes, blank means no material responsibility. Ownership is logical and does not require a separate deployable service.

| Capability domain | AI | Backend | Frontend | Playwright/Workers | Dashboard | API | Data/Knowledge | DevOps/Security |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| AI Platform | O | C | U | C | U | C | C | C |
| Input & Normalization | C | O | C | C | U | C | C | C |
| Discovery | C | C | U | O | U | C | C | C |
| Requirements | O | C | C | U | U | C | C |  |
| Risk & Strategy | O | C | C | U | U | C | C |  |
| Test Generation | O | C | U | O | U | C | C | C |
| Execution | U | C | U | O | U | C | U | C |
| Analysis & Bugs | O | C | U | C | U | C | C | C |
| Verification | C | O | U | C | C | C | C | C |
| Reporting | C | C | C | U | O | C | C |  |
| Analytics | C | C | U | U | O | C | O | C |
| Knowledge | C | C | U | U | U | C | O | C |
| Integrations | U | O | C | C | U | C | C | C |
| Governance | C | O | C | C | C | C | C | O |

## Critical capability impact matrix

| Capability | AI | Backend | Frontend | Playwright | Dashboard | API | Data | Security/Ops |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| CAP-051 Prompt orchestration | O | C |  |  | U | C | C | C |
| CAP-052 Context assembly | O | C |  |  |  | C | O | C |
| CAP-054 Tool calling | O | C |  | C | U | C | C | O |
| CAP-059 Human approval | U | O | C | U | C | C | C | C |
| CAP-060 AI evaluation | O | C | U | C | C | C | O | C |
| CAP-110 Input normalization | C | O | U | C | U | C | O | C |
| CAP-201 Website crawl | C | C | U | O | U | C | C | O |
| CAP-304 Requirement extraction | O | C | C |  | U | C | C | C |
| CAP-401 Risk identification | O | C | C | U | C | C | C |  |
| CAP-501 Test-case generation | O | C | C | C | U | C | C |  |
| CAP-511 Framework generation | C | C | U | O | U | C | C | C |
| CAP-601 Local execution | U | C | U | O | C | C | C | O |
| CAP-701 Failure classification | O | C | U | C | C | C | C | C |
| CAP-804 Negative proof | C | C | U | O | C | C | C | C |
| CAP-811 False-positive detection | O | C | U | C | O | C | C | C |
| CAP-813 Hallucination detection | O | C | U | U | C | C | C | O |
| CAP-901 Dashboard |  | C | C |  | O | C | C | C |
| CAP-1202 GitHub integration | U | O | C | C | U | C | C | C |
| CAP-1304 AI accuracy analytics | C | C | U | U | O | C | O | C |

## Use

The matrix drives architecture review, CODEOWNERS, Epic staffing, test ownership, observability and impact analysis. Any capability with multiple `O` entries must be resolved before implementation; capabilities with no owner cannot enter the MVP.

