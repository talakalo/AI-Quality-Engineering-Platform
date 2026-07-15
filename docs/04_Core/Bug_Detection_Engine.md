# AutoQA AI — Bug Detection Engine

**Version:** 0.1 Draft

## Purpose

Determine whether failed or suspicious behavior is most likely a product defect, automation defect, environment/infrastructure issue, test-data issue, flaky behavior or unknown.

## Evidence sources

Requirement and risk, source/diff, test step/assertion, retries, trace, screenshot/video, console/network, service logs, environment health, prior runs and known findings.

## Finding output

Classification, summary, observed versus expected, reproduction, affected scope, severity proposal, evidence, confidence/calibration, alternative hypotheses, missing evidence and recommended next action.

## Rules

No defect claim from a screenshot alone; distinguish symptom from root cause; do not expose secrets/PII; confidence never replaces evidence; unknown is an acceptable result.

## Metrics

Precision, recall, F1 by class, false-positive rate, confidence calibration, investigator agreement, duplicate detection and time to triage.

