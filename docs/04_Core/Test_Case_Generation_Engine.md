# AutoQA AI — Test Case Generation Engine

**Version:** 0.1 Draft

## Purpose

Convert an approved strategy into executable-intent test cases before framework code generation.

## Test case schema

ID, requirement/risk links, layer, title, preconditions, data, steps or interaction intent, assertions, negative condition, cleanup, tags, priority, expected evidence and automation feasibility.

## Generation rules

Atomic business purpose; meaningful observable assertions; independent data; explicit authorization state; boundary/equivalence analysis where relevant; avoid duplicated scenarios and implementation-detail coupling.

## Review

Cases are diffable and editable. Material changes to approved intent return to approval. Framework-specific details are added later unless required for feasibility.

## Metrics

Requirement/risk coverage, duplication, assertion quality, reviewer correction, automation conversion rate, mutation detection and maintenance rate.

