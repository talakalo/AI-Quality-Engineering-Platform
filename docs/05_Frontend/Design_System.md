# AutoQA AI — Design System

**Version:** 0.1 Draft

## Principles

Operational clarity, evidence density without clutter, accessibility, consistency, responsive review and restrained motion. Status never depends on color alone.

## Foundations

- **Color:** neutral surfaces plus semantic success, warning, failure, blocked, running and informational roles; light/dark contrast tokens.
- **Typography:** readable UI and data scales; monospace for code, IDs and logs; tabular numerals for metrics.
- **Spacing:** 4px base scale with documented density modes.
- **Shape/elevation:** limited radius and elevation levels tied to hierarchy.
- **Motion:** short functional transitions; reduced-motion support; no decorative blocking animation.
- **Icons:** one accessible icon set with labels/tooltips where meaning is not universal.

## Component catalog

Buttons, links, fields, selects, comboboxes, date/time inputs, tabs, breadcrumbs, dialogs, drawers, alerts, toasts, badges, progress, skeletons, empty/error states, tables, filters, pagination, code diff, log viewer, evidence viewer, timeline, approval card and command confirmation.

## Dashboard widgets

Run status, pending approvals, risk coverage, traceability, verification gates, flakiness, failure classification, cost/usage, agent step timeline, SLO health and release readiness.

## Governance

Components include anatomy, variants, states, keyboard behavior, accessibility notes, content rules, responsive behavior, examples and tests. Product code may not introduce one-off replacements without design review.

## Validation

Automated accessibility checks, keyboard/screen-reader review, visual regression, theme contrast, responsive matrices and component documentation examples in CI.

