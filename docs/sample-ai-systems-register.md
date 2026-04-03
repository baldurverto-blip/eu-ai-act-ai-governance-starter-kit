# Sample AI Systems Register

> **Purpose:** Free sample showing what a completed first-pass AI systems register can look like for a small team.
> **Audience:** Buyers evaluating whether the toolkit contains usable operational material rather than generic policy language.
> **Important:** This sample illustrates structure, ownership, and control thinking. It is not legal advice and it does not imply that the listed controls are sufficient for every organization.

## What this sample is trying to prove

This sample is included so a buyer can judge whether the paid pack is concrete enough to use.

Specifically, it shows:

- AI usage documented as real workflows rather than abstract tool names
- named ownership
- visible data boundaries
- a simple internal risk label
- review expectations and current controls
- a level of detail that a small team could realistically maintain

## Example company context

The fictional company behind this sample is a small EU-based B2B software team with roughly 20 staff using AI in normal business operations. It does not claim to operate high-risk AI systems. Its AI usage is mostly drafting, research, support, coding assistance, and internal operations.

That matters because the useful level of documentation for a small ordinary-use team is different from the level needed for regulated or safety-critical deployments.

## Sample register entries

| Register ID | Tool / Workflow Name | Vendor | Business Purpose | Department / Users | Data Categories | Use Context | Internal Risk Label | Required Review | Owner | Vendor Diligence Status | Last Review Date | Next Review Date | Notes / Current Controls |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-001 | ChatGPT Team for internal drafting and research support | OpenAI | Draft internal memos, meeting note summaries, first-pass research summaries, and outline internal process docs | Operations, founders, marketing | Public material, internal non-sensitive content, limited confidential business context | Internal drafting and analysis | Ordinary | Self-review for internal use; second-person review before anything is reused externally | Head of Operations | Completed | 2026-04-01 | 2026-07-01 | Team instructed not to paste client secrets, contracts, or HR files; outputs treated as drafts, not verified facts |
| AI-002 | Microsoft 365 Copilot for customer communication drafting | Microsoft | Draft customer emails, summarize account notes, and help structure follow-up messages for account managers | Sales, customer success | Customer contact details, account history, internal non-sensitive notes | External draft support | Elevated | Human approval required before any external send | Revenue Operations Lead | Completed | 2026-04-01 | 2026-06-15 | No automated sending; pricing, service commitments, and policy statements must be manually checked |
| AI-003 | GitHub Copilot in engineering workflow | GitHub / Microsoft | Suggest code, tests, comments, and documentation snippets to improve developer speed | Engineering | Internal code, technical documentation, non-secret development context | Production-adjacent engineering workflow | Elevated | Normal PR review and testing required; security-sensitive changes get additional scrutiny | Engineering Manager | Completed | 2026-04-01 | 2026-07-15 | Team instructed not to include credentials, tokens, or client data in prompts; generated code is reviewed like junior-contributor code |
| AI-004 | Notion AI for handbook and process drafting | Notion | Draft and restructure internal handbook pages, meeting summaries, onboarding materials, and process notes | Operations, people ops | Internal non-sensitive, limited confidential operations content | Internal documentation | Elevated | Manager review for people-process or policy content | People Operations Lead | In progress | 2026-04-01 | 2026-06-01 | No employee case notes or sensitive HR matters; workspace permissions reviewed quarterly |
| AI-005 | Claude for long-form document review and synthesis | Anthropic | Summarize long internal documents, compare policy drafts, and help rewrite technical or operational text | Operations, product, engineering leads | Public material, internal non-sensitive, limited confidential operational content | Internal analysis and drafting | Ordinary | Self-review for internal use; second-person review for policy or external reuse | COO | Completed | 2026-04-01 | 2026-07-01 | Used mainly for synthesis and drafting; legal or regulatory conclusions must be checked by a human |
| AI-006 | AI-assisted blog drafting workflow | Internal workflow using approved models | Create first drafts and outlines for product marketing articles using approved tools and public source material | Marketing | Public content, approved internal product facts | Public content creation | Elevated | Marketing lead review plus factual verification before publication | Head of Marketing | Completed | 2026-04-01 | 2026-05-15 | Product claims, pricing, release dates, and regulatory references are checked manually before publish |

## What the sample should signal to a buyer

This sample is deliberately more detailed than a superficial inventory. It shows the kind of distinctions that make a register genuinely useful:

- the same vendor can support more than one workflow and may require different controls
- "internal use" and "external draft support" are not the same thing
- ownership matters more than a long list of tools
- notes and current controls are where most of the real governance value sits

## Why the risk labels are simple

This sample uses practical internal labels rather than pretending a small team can solve every regulatory classification question inside one spreadsheet.

- **Ordinary** is for routine internal drafting and assistance.
- **Elevated** is for workflows that touch customers, public content, people processes, or production-adjacent work.
- If a workflow looks closer to formal high-risk or regulated use, the right answer is usually not to rename it in the spreadsheet but to trigger deeper review.

## How a buyer could adapt this in the first week

1. Duplicate the structure into the team’s own register.
2. Replace the fictional rows with real tools and workflows.
3. Add one owner per row.
4. Confirm what data types each workflow actually touches.
5. Link each elevated workflow to a human review rule.

For many small teams, that exercise alone surfaces undocumented AI usage they did not realize had spread.

## How this sample connects to the paid pack

The full pack adds the supporting documents that make a register actionable:

- a policy defining what staff may and may not do
- a review SOP describing how human checks happen
- an incident log for recording failures and near misses
- a vendor checklist for approving new tools
- a richer register template for ongoing maintenance

The point of the sample is not that one file solves AI governance. The point is to show that the full toolkit is grounded in usable documentation rather than abstract positioning.

## Document control

| Version | Date | Owner | Change summary |
|---|---|---|---|
| 2.0 | 2026-04-03 | Verto Studios sample | Rewritten as a fuller, buyer-facing sample with realistic rows, ownership, and control notes |
