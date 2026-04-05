# AI Governance Starter Kit for EU Teams — Deliverables

> **Status:** Review-ready documentation pack
> **Last Updated:** April 2026
> **Audience:** Small EU teams already using AI in ordinary business workflows
> **Important:** This pack is an operational starter kit. It is not legal advice, a compliance guarantee, or a substitute for specialist review where the use case is high-risk, prohibited, safety-critical, or otherwise regulated more heavily.

## What this pack is actually for

This pack is designed for a team that is already using AI and wants to stop operating on unwritten assumptions.

It is meant to help a small company move from:

- "everyone is using different AI tools in different ways"
- "we do not have clear internal boundaries"
- "we cannot easily explain what we use, who owns it, or how output gets checked"

to:

- one editable policy
- one maintainable tool-and-use-case register
- one lightweight human review process
- one incident record
- one vendor review workflow
- one buyer-visible sample showing what "usable" looks like

The product is intentionally practical. It is not sold as a magic compliance shortcut.

## What makes this pack materially useful

The value is not that it contains several Markdown files. The value is that the files work together as a small operating system for ordinary AI governance.

What is materially stronger than a generic template pack:

- each core file includes instructions, ownership guidance, and rollout notes
- the documents are built for ordinary business AI use, not just for theoretical compliance language
- the templates include practical examples that a small team can adapt quickly
- the pack draws boundaries carefully and avoids implying legal sufficiency
- the sample register lets a buyer inspect the level of depth before relying on the rest of the toolkit

## Who this is a fit for

Best fit:

- EU-based SaaS companies, agencies, consultancies, and service businesses
- teams roughly 5-100 people
- companies already using mainstream AI tools for drafting, support, research, coding assistance, content, and internal operations
- founders, ops leads, product leads, people leads, security owners, and compliance-adjacent owners who need a usable first governance baseline

Less suitable or out of scope:

- teams looking for legal advice or formal compliance certification
- companies placing high-risk AI systems on the market or putting them into service
- safety-critical, biometric, employment-scoring, law-enforcement, healthcare, or similarly regulated use cases
- buyers who want a consultant-led implementation rather than a documentation pack

## Included deliverables

### 1. `docs/AI-usage-policy.md`

What it is:
A practical internal policy template for approved use, prohibited use, data handling, review expectations, escalation, and exceptions.

Why it matters:
Most teams need a shared internal rulebook before anything else. Without it, AI usage becomes inconsistent and invisible.

What is inside:

- scope and policy objectives
- role definitions and ownership guidance
- approved and prohibited use sections
- data handling rules with practical data categories
- human review expectations
- approved tool list structure
- change control and escalation guidance
- training and acknowledgment language
- implementation notes and example clauses

Buyer value:
This is written to be adapted into a real internal policy, not left as a generic placeholder.

### 2. `docs/ai-systems-register-template.md`

What it is:
A working register template for AI tools and workflows across the company.

Why it matters:
You cannot govern what you cannot name. The register is the backbone of the rest of the pack.

What is inside:

- clear instructions for completing the first version
- ownership and maintenance guidance
- realistic field definitions
- practical internal risk labels
- example completed rows
- prompts for discovering undocumented use cases
- maintenance mistakes to avoid

Buyer value:
This is the file most teams can put to work immediately in week one.

### 3. `docs/internal-review-sop.md`

What it is:
A standard operating procedure for reviewing AI-assisted outputs before they are relied on or released.

Why it matters:
Unchecked output is where many small-team AI failures happen.

What is inside:

- review roles and principles
- a three-tier review model
- decision guidance for choosing the right review tier
- a practical review checklist
- workflow guidance for customer, marketing, policy, and code outputs
- documentation expectations
- rejection and escalation triggers
- example review scenarios

Buyer value:
This makes the pack operational. It tells a team what "human oversight" actually looks like in day-to-day work.

### 4. `docs/incident-log-template.md`

What it is:
A simple incident and near-miss log tailored to AI-related failures and control breakdowns.

Why it matters:
If a team never records what went wrong, it will keep repeating the same mistakes.

What is inside:

- definitions of what should be logged
- severity guidance
- incident categories
- a structured incident table
- root cause and corrective action prompts
- escalation guidance
- quarterly review structure
- example incidents based on realistic small-team failures

Buyer value:
This helps teams move beyond policy language into actual learning and follow-up.

### 5. `docs/vendor-review-checklist.md`

What it is:
A lightweight due-diligence checklist for evaluating new AI vendors and planned workflows.

Why it matters:
Most small teams adopt AI tools too casually. This adds enough procurement discipline to avoid obvious mistakes without creating enterprise-style drag.

What is inside:

- quick fit screen
- vendor legitimacy and reliability questions
- data handling and privacy questions
- security and access questions
- output risk and workflow control questions
- commercial practicality questions
- conditions-based approval model
- example assessment and approval conditions

Buyer value:
This is useful both before buying a tool and when cleaning up tools that are already in use.

### 6. `docs/sample-ai-systems-register.md`

What it is:
A buyer-visible sample of what a completed first-pass AI register can look like.

Why it matters:
It lets a buyer judge the quality of the pack before trusting the rest of it.

What is inside:

- a fictional but realistic small-team context
- six filled sample rows
- ownership, review, and control notes
- explanation of the internal risk labels
- guidance on how to adapt the sample in the first week

Buyer value:
This gives concrete proof that the toolkit is more than abstract positioning.

## How the documents work together

The pack is designed as a connected set:

1. The policy defines the rules.
2. The register records where AI is used.
3. The review SOP defines how outputs are checked.
4. The incident log records failures and near misses.
5. The vendor checklist supports new-tool approval.
6. The sample register shows the expected quality level.

That is why the pack feels more substantial than a single policy template. It gives a small team a basic governance workflow, not just a document.

## What a buyer can realistically do in the first week

For many small teams, the first week looks like this:

1. Customize the policy and name the owner.
2. Populate the register with real tools and use cases.
3. Decide which outputs require Tier 2 or Tier 3 review.
4. Publish the incident log and define where issues get reported.
5. Use the vendor checklist for any tool not yet reviewed.

This is usually a short implementation effort, not a major transformation project.

## Suggested owner map for a small team

One reason governance packs fail is that every file is "owned by everyone" and therefore maintained by no one.

This pack is designed to work with lightweight ownership:

| Deliverable | Typical owner | Supporting roles |
|---|---|---|
| `AI-usage-policy.md` | Operations lead, security lead, or founder | Department managers |
| `ai-systems-register-template.md` | Operations or compliance-adjacent owner | Each department lead for their own rows |
| `internal-review-sop.md` | Operations lead or function owner | Managers and reviewers |
| `incident-log-template.md` | Security lead, ops lead, or compliance-adjacent owner | Team leads and incident reporters |
| `vendor-review-checklist.md` | Ops, security, or procurement-adjacent owner | Requestor and budget owner |

For a team without dedicated compliance staff, that can still be one capable operations owner with manager participation.

## Suggested 30-60-90 day cadence

The pack is more credible when buyers can picture what happens after week one.

### Days 1-30

- customize the policy
- build the first register
- define review tiers for common outputs
- name owners and publish reporting paths

### Days 31-60

- use the vendor checklist on any unreviewed tools already in use
- log the first incidents or near misses instead of treating them as one-offs
- update the register where the first pass missed workflows

### Days 61-90

- run the first quarterly-style review
- remove abandoned or non-approved tools from the register
- tighten controls where repeated review or incident patterns show weakness

This is still a starter kit, not a full program. The goal is a credible baseline that holds up better than undocumented usage.

## Why the tone is conservative

The pack deliberately avoids saying:

- "this makes you compliant"
- "this satisfies the EU AI Act"
- "this replaces legal review"

Those claims would not be credible for a one-time downloadable toolkit.

Instead, the pack aims to be useful in the narrower and more honest sense:

- it helps a small team document real AI use
- it creates ownership and lightweight control
- it supports better internal decisions
- it leaves room for deeper legal or specialist review later if needed

## Format and usability

- all documents are delivered in Markdown
- files can be edited in Google Docs, Notion, Word, Confluence, or an internal wiki after conversion if needed
- the wording is designed to be editable rather than locked
- the examples are intentionally plain so buyers can adapt them quickly

## Summary of what the buyer is paying for

The buyer is paying for:

- a sharper starting point than generic AI policy templates
- a coherent mini-pack rather than isolated docs
- realistic examples and instructions
- enough practical depth that a small team can implement it without hiring a consultant first

The buyer is not paying for:

- bespoke legal advice
- a guarantee of compliance
- a full implementation project

## Disclaimer

This toolkit is a practical operational starting point for small teams using AI in normal business workflows. It does not constitute legal advice and does not guarantee compliance with the EU AI Act, GDPR, or other laws. Teams with high-risk, prohibited, safety-critical, or heavily regulated use cases should seek specialist review.
