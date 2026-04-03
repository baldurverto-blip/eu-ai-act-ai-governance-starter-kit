# AI Systems Register Template

> **Purpose:** Maintain a working inventory of AI tools, workflows, owners, data types, and current controls.
> **Status:** Editable operational template.
> **Audience:** Small EU teams that need a usable first-pass register, not a heavyweight governance database.
> **Important:** This register helps a team document and review its AI usage. It is not by itself a legal determination, a compliance guarantee, or a substitute for specialist advice on high-risk or regulated use cases.

## Why this register matters

Most teams cannot answer basic questions about their AI usage with confidence:

- Which tools are actually in use?
- Which team uses each tool and for what?
- What data is being entered?
- Who owns the use case?
- Which outputs need review?
- Which uses are routine and which are more sensitive?

This register gives you one place to record those answers. For a small team, that alone is a major governance improvement.

## How to use this template

Recommended first pass:

1. List the AI tools already in use, not just the officially approved ones.
2. Add one row per meaningful tool-and-use-case combination.
3. Keep the descriptions plain and specific.
4. Name an owner for each row.
5. Record the current controls honestly, even if they are light.
6. Mark where stronger review is needed.

Do not wait for perfect information. A 70 percent-complete register is more useful than no register.

## Who should maintain it

- Primary maintainer: `[Operations Lead / Compliance Lead / Security Lead]`
- Department contributors: `[Engineering Lead / Marketing Lead / Customer Success Lead / People Lead]`
- Review cadence owner: `[Name]`

Practical ownership rule:
The central owner maintains the file, but each department should confirm the rows that describe its own use.

## Suggested review cadence

- Monthly for the first 2-3 months after rollout if usage is changing quickly
- Quarterly once the toolset is relatively stable
- Immediately after any material incident, vendor change, or new use case rollout

## Completion instructions

For each entry:

- describe the real business purpose, not a vague category
- note the main user group
- state the main data categories involved
- assign a practical internal risk label
- note the review or approval rule that applies
- name the owner who can answer questions about the row

If one tool has very different use cases, create separate rows. For example, internal brainstorming and customer support drafting should not be merged into one entry just because they use the same vendor.

## Recommended field definitions

| Field | What to enter | Practical guidance |
|---|---|---|
| Register ID | Unique identifier such as `AI-001` | Keep it stable even if the row changes |
| Tool / workflow name | Product or internal workflow name | Be specific enough that staff can recognize it |
| Vendor | External provider or internal team | If internal, note the underlying model/provider if known |
| Business purpose | What the tool helps the team do | Use plain language, for example "draft support replies for agent review" |
| Department / users | Who uses it | Team names or roles are enough |
| Data categories | Main input or output data involved | Use the same categories as your policy if possible |
| Use context | Internal only, external draft, production-adjacent, automated, etc. | Helps show where extra controls are needed |
| Internal risk label | Ordinary / Elevated / High attention | Keep labels simple and usable |
| Required review | Self-review, manager review, second-person review, PR review, etc. | Match the internal review SOP |
| Owner | Person accountable for the workflow | Use a real role or name |
| Vendor diligence status | Not started / In progress / Completed / Not required | Link to the vendor review checklist if used |
| Last review date | Date of latest check | Use ISO format for consistency |
| Next review date | Planned date | Keep the cadence realistic |
| Notes / controls | Current safeguards and open issues | This is often the most useful field |

## Suggested internal risk labels

These labels are for practical prioritization, not legal classification.

### Ordinary

Typical examples:

- internal drafting and rewriting
- brainstorming and summarization
- engineering assistance with normal code review
- internal note cleanup

Typical controls:

- approved tool only
- no secrets or restricted data
- user self-review

### Elevated

Typical examples:

- customer-facing drafts
- public marketing content
- workflows involving personal data
- people-process or commercial workflows
- automation that triggers downstream actions

Typical controls:

- second-person review
- tighter data limits
- named owner
- more frequent review

### High attention

Typical examples:

- use cases affecting an identifiable person materially
- sensitive HR, legal, financial, or regulated workflows
- tools connected to important internal systems or production actions

This starter kit is not intended to resolve whether a use case falls within a formal high-risk category under the EU AI Act. If you are close to that boundary, get specialist review.

## AI systems register template

| Register ID | Tool / Workflow Name | Vendor | Business Purpose | Department / Users | Data Categories | Use Context | Internal Risk Label | Required Review | Owner | Vendor Diligence Status | Last Review Date | Next Review Date | Notes / Current Controls |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-001 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| AI-002 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| AI-003 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| AI-004 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| AI-005 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| AI-006 |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Example entries

| Register ID | Tool / Workflow Name | Vendor | Business Purpose | Department / Users | Data Categories | Use Context | Internal Risk Label | Required Review | Owner | Vendor Diligence Status | Last Review Date | Next Review Date | Notes / Current Controls |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-001 | ChatGPT Team for internal drafting | OpenAI | Draft internal memos, meeting note cleanup, research summaries, first-pass policy drafts | Operations, founders, marketing | Public, internal non-sensitive, limited confidential business info | Internal drafting only | Ordinary | Self-review before internal use; second-person review before external reuse | Head of Operations | Completed | 2026-04-01 | 2026-07-01 | No personal data unless separately approved; no client secrets; policy acknowledgment required |
| AI-002 | Microsoft 365 Copilot for sales and account work | Microsoft | Draft customer emails and summarize internal account materials | Sales, customer success | Internal non-sensitive, customer contact details, limited customer context | External draft support | Elevated | Human approval before any external send | Revenue Operations Lead | Completed | 2026-04-01 | 2026-06-15 | No automated sending; pricing and commitments must be verified manually |
| AI-003 | GitHub Copilot in engineering workflow | GitHub / Microsoft | Suggest code, tests, and documentation snippets | Engineering | Internal code, technical documentation | Production-adjacent | Elevated | Normal PR review plus security review where applicable | Engineering Manager | Completed | 2026-04-01 | 2026-07-15 | No credentials or production secrets in prompts; generated code is treated like junior-contributor code |
| AI-004 | Notion AI for people and ops docs | Notion | Draft handbooks, summarize meeting notes, format internal process docs | Operations, people ops | Internal non-sensitive, limited confidential operations content | Internal documentation | Elevated | Manager review for policy or people-process docs | People Operations Lead | In progress | 2026-04-01 | 2026-06-01 | No employee case details; restricted workspace permissions |

## Practical prompts for completing missing rows

If a department lead says "we only use AI a little," ask:

- Which tool do you open most often?
- What do you ask it to do?
- What information do you paste in?
- Does any output go to customers or the public?
- Who would notice first if it went wrong?

Those answers usually produce a usable row.

## Common mistakes when maintaining the register

- listing vendors but not the actual use case
- using risk labels with no explanation or controls
- failing to split clearly different workflows into separate rows
- naming an owner who is not actually involved
- never updating the document after the first completion pass
- treating "everyone uses it" as a substitute for ownership

## Implementation notes for buyers

This template becomes substantially more useful when it is linked to the rest of the pack:

- the policy defines what is allowed
- the register shows where AI is actually used
- the review SOP defines the checking step
- the incident log captures failures or near misses
- the vendor checklist supports diligence on the tool itself

For a team of 5-30 people, a realistic first version of this file is usually 4-12 rows.

## Optional extra fields if your team needs them

Add these only if they genuinely help:

- contract or DPA reference
- model version or environment
- automation trigger or integration path
- output retention location
- customer disclosure requirement
- decommission date

## Document control

| Version | Date | Owner | Change summary |
|---|---|---|---|
| 2.0 | 2026-04-03 | Verto Studios starter template | Rewritten with stronger field guidance, ownership, examples, and implementation notes |
