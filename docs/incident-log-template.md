# AI Incident Log Template

> **Purpose:** Record AI-related incidents, near misses, and corrective actions in a simple format a small team can actually maintain.
> **Status:** Editable starter template.
> **Audience:** Small EU teams using AI in ordinary business workflows.
> **Important:** This log supports internal learning, accountability, and follow-up. It does not by itself satisfy regulatory notification duties or legal reporting obligations.

## Why keep an AI incident log

Teams often only write down major security incidents. That is too narrow for AI governance.

Useful things to log include:

- a hallucinated claim that nearly reached a customer
- confidential information pasted into the wrong tool
- a vendor issue that changes your risk posture
- a misleading model output that created internal rework
- an automation using AI that behaved unexpectedly

If you only log catastrophes, you miss the patterns that would have prevented them.

## What counts as an incident

Use this log for:

- confirmed incidents
- near misses that exposed a control weakness
- repeat quality failures worth tracking
- policy violations
- data handling mistakes
- vendor-related events that affect your use

Do not use the log for trivial frustrations such as "the answer was bad once" unless there is a real lesson, repeated failure, or process issue behind it.

## Suggested ownership

- Log owner: `[Security Lead / Ops Lead / Compliance Lead]`
- Escalation contact: `[Name / Role / Email or Slack channel]`
- Review forum: `[Monthly ops review / Quarterly risk review / Leadership review]`

## When to log

Log the event as soon as practical, ideally the same day. If details are incomplete, create the entry anyway and update it later.

Small-team rule of thumb:
If you had to stop, correct, escalate, or explain the AI behavior, it is usually worth considering for the log.

## Severity guidance

Use severity labels that help your team react consistently.

### Low

- internal-only issue
- no confirmed sensitive data exposure
- limited operational impact
- easy to correct

Example:
An internal draft included fabricated statistics that were caught before reuse.

### Medium

- external communication risk
- repeated process weakness
- possible personal or confidential data issue
- moderate operational disruption

Example:
A support agent almost sent an AI-drafted reply containing an incorrect refund policy.

### High

- confirmed or likely data exposure
- potential regulatory, contractual, or reputational consequence
- material customer impact
- serious policy breach
- major vendor security event affecting your workflow

Example:
An employee pasted client-confidential information into a non-approved public AI tool.

## Incident categories

Use categories that make pattern review easier:

- Hallucination / factual error
- Confidentiality or data handling issue
- Policy breach
- Security or access issue
- Bias, inappropriate, or harmful output
- Automation or workflow failure
- Vendor change or vendor incident
- Other material AI-related issue

## Incident log template

| Incident ID | Date discovered | Reporter | Tool / Workflow | Category | Summary of what happened | Affected data or stakeholders | Severity | Immediate containment | Root cause | Corrective action | Owner | Status | Resolution date | Follow-up review date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-INC-001 |  |  |  |  |  |  |  |  |  |  |  | Open |  |  |
| AI-INC-002 |  |  |  |  |  |  |  |  |  |  |  | Open |  |  |
| AI-INC-003 |  |  |  |  |  |  |  |  |  |  |  | Open |  |  |
| AI-INC-004 |  |  |  |  |  |  |  |  |  |  |  | Open |  |  |

## Field guidance

| Field | What to record | Why it matters |
|---|---|---|
| Incident ID | Stable identifier such as `AI-INC-004` | Makes it easier to refer back to the case |
| Date discovered | When the issue became known | Useful for timelines and reviews |
| Reporter | Person who raised it | Helps follow up quickly |
| Tool / Workflow | The specific tool or process involved | Makes pattern analysis possible |
| Category | Pick one main category | Keep the taxonomy simple |
| Summary | Short plain-language description | Should explain what went wrong without jargon |
| Affected data or stakeholders | Internal docs, customer data, public content, employee data, etc. | Helps assess impact |
| Severity | Low / Medium / High | Drives urgency and escalation |
| Immediate containment | What was done right away | Shows whether the team reacted sensibly |
| Root cause | Why it happened | Focus on process and control weakness, not just blame |
| Corrective action | What changed afterward | Turns the log into a learning tool |
| Owner | Person responsible for closure | Prevents orphaned incidents |
| Status | Open / Investigating / Remediating / Resolved / Accepted risk | Keeps the workflow visible |
| Resolution date | When the issue was closed | Important for overdue follow-up |
| Follow-up review date | When to check if the fix held | Makes corrective action real |

## Example entries

| Incident ID | Date discovered | Reporter | Tool / Workflow | Category | Summary of what happened | Affected data or stakeholders | Severity | Immediate containment | Root cause | Corrective action | Owner | Status | Resolution date | Follow-up review date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-INC-001 | 2026-02-15 | Sarah M. | ChatGPT Team for sales drafts | Hallucination / factual error | AI drafted a customer email referring to a non-existent regulatory requirement. The issue was caught during manager review before send. | Prospect-facing communication | Medium | Draft was stopped and replaced with verified wording | Reviewer entered the process too late and the author trusted the draft too quickly | Added pre-send checklist for regulated claims and clarified that AI cannot be treated as a source of law | Revenue Operations Lead | Resolved | 2026-02-16 | 2026-05-01 |
| AI-INC-002 | 2026-03-01 | James L. | External coding assistant | Confidentiality or data handling issue | Engineer pasted proprietary architecture details and a stack trace containing internal endpoint names into a non-approved AI tool. | Internal confidential technical information | High | Usage stopped, incident owner informed, prompt history reviewed, team reminded not to reuse the tool | Unapproved tool use and weak prompt-data boundaries | Updated policy, briefed engineering, and added approved-tool reminders in onboarding | Engineering Manager | Resolved | 2026-03-05 | 2026-06-01 |
| AI-INC-003 | 2026-03-18 | Customer Success Lead | Microsoft 365 Copilot email draft | Policy breach | Draft reply included an unverified commercial concession that was not approved. Reviewer caught it before send. | Customer communication and commercial terms | Medium | Draft withdrawn and corrected | Users assumed AI suggestions matched prior account policy | Added explicit pricing/commitment check to review SOP | Customer Success Manager | Resolved | 2026-03-18 | 2026-06-15 |
| AI-INC-004 | 2026-04-02 | Marketing Lead | Notion AI content draft | Workflow failure | Blog draft reused stale product pricing from old internal notes. It was corrected before publication but caused last-minute rework. | Public content draft | Low | Publication paused until facts were checked | Source material was outdated and no fact-check step existed | Added source-of-truth check for pricing and release details | Head of Marketing | Resolved | 2026-04-02 | 2026-05-15 |

## Escalation guidance

Escalate immediately to the relevant owner if any of the following applies:

- personal data or confidential client information may have been exposed
- a customer or employee may have been materially affected
- the issue may trigger contractual, legal, or regulatory review
- the incident involves repeated policy breach
- the vendor has a material security event or terms change affecting data use

If you are unsure whether an incident needs formal escalation, escalate first and downgrade later.

## Root cause prompts

To avoid weak "human error" writeups, ask:

- Was the tool approved for this use?
- Were data boundaries clear enough?
- Was review applied at the right stage?
- Did the team rely on AI for something it should not have?
- Did the owner or manager know this workflow existed?
- Was the source material outdated or incomplete?

## Corrective action prompts

Good corrective actions are specific and observable.

Examples:

- update the policy section on prompt data restrictions
- require second-person review for a certain output type
- remove access to a non-approved tool
- retrain one department on approved prompting patterns
- add a fact-check step before publication
- review vendor settings, retention controls, or access rights

Weak corrective action example:

- "Be more careful"

## Quarterly review section

At least quarterly, review the incident log for:

- recurring tools or teams involved
- repeat categories
- controls that failed more than once
- open corrective actions past due
- issues that suggest the register or policy needs updating

Suggested summary table:

| Quarter | Total incidents | Near misses | High severity | Repeated pattern | Policy update needed? | Owner |
|---|---|---|---|---|---|---|
| `[2026-Q2]` |  |  |  |  |  |  |

## Implementation notes for buyers

This file becomes more useful when teams explicitly allow logging of near misses. Small teams often hesitate to write things down because they fear creating overhead. The better approach is to keep the format light and the threshold sensible.

A short, well-maintained incident log is more credible than a perfect-looking template with no real entries.

## Document control

| Version | Date | Owner | Change summary |
|---|---|---|---|
| 2.0 | 2026-04-03 | Verto Studios starter template | Rewritten with stronger incident definitions, severity guidance, root cause prompts, examples, and review structure |
