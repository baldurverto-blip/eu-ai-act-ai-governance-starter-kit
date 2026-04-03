# Internal AI Review SOP

> **Purpose:** Define how AI-assisted work is checked before it is relied on, shared externally, published, or used in important internal decisions.
> **Status:** Editable starter operating procedure.
> **Audience:** Small EU teams that need lightweight but repeatable human review around everyday AI use.
> **Important:** This SOP helps reduce avoidable mistakes. It does not remove the need for human judgment, domain expertise, or specialist review for regulated or high-stakes use cases.

## Why this SOP exists

Most AI problems in small businesses do not come from the existence of the tool. They come from workflow mistakes:

- output is treated as correct because it sounds confident
- customer-facing drafts are sent too quickly
- nobody verifies factual claims or source material
- AI suggestions slip into code or documents without normal checks
- responsibility becomes blurred because "the model wrote it"

This SOP is meant to prevent that by making review expectations explicit.

## Who should use it

Use this SOP whenever AI is involved in work that will:

- go to customers, partners, suppliers, candidates, or the public
- influence a material internal decision
- become internal policy, training material, or official documentation
- enter a production codebase, automation, or important operational workflow

It can also be used for internal-only outputs where the content is sensitive, high-impact, or likely to be reused externally later.

## Roles

| Role | Responsibility |
|---|---|
| Author | Uses AI, prepares the draft, performs first-pass self-check, and flags the correct review tier |
| Reviewer | Checks the draft for accuracy, fit, confidentiality, and policy alignment |
| Approver / owner | Required for elevated or sensitive use cases; decides on escalation, rejection, or release |
| Policy or process owner | Maintains this SOP and aligns it with the AI policy and systems register |

Small-team note:
One person may hold more than one role, but the author should not be the only checker for elevated external use.

## Review principles

Reviewers should apply these principles consistently:

- AI output is a draft, not a source of truth.
- The more external, sensitive, or consequential the output is, the stronger the review should be.
- Review should happen before release, not only after a problem appears.
- Normal business controls still apply. AI does not replace legal review, security review, managerial approval, or code review.

## Review tiers

Keep the tiers simple enough to use without debate.

### Tier 1: Self-review

Use for:

- internal notes
- brainstorming outputs
- low-stakes first drafts
- personal productivity outputs not reused externally

Minimum checks:

- read the full output
- remove obvious errors or unsupported claims
- check that no sensitive information was included accidentally
- decide whether the work is truly internal-only

### Tier 2: Second-person business review

Use for:

- customer emails and support drafts
- proposals and statements of work
- public-facing content drafts
- internal policies or procedures
- analytical summaries that will influence business decisions

Minimum checks:

- second person reviews before release or adoption
- key facts and figures are verified
- confidential and personal data handling is checked
- final message is confirmed to match company policy and actual commitments

### Tier 3: Elevated review and sign-off

Use for:

- legal, financial, HR, employment, or pricing-sensitive content
- communications involving regulatory claims
- press statements, major public messaging, or executive communications
- production code or automation where AI-generated changes could create material risk
- any use case involving an identifiable person materially

Minimum checks:

- second-person review plus owner or manager sign-off
- explicit fact validation against trusted sources
- consideration of whether specialist review is needed
- clear record of approval or rejection

If in doubt, choose the higher tier.

## Review decision tree

Use these questions in order:

1. Is this output staying internal and low-stakes?
2. Will any customer, candidate, partner, or public audience see it?
3. Does it include commitments, facts, pricing, policies, legal, HR, or security-sensitive content?
4. Will it affect systems, production, or a decision about a person?

Suggested rule:

- If the answer to question 1 is yes and the others are no, Tier 1 is usually enough.
- If question 2 is yes, start at Tier 2.
- If question 3 or 4 is yes, start at Tier 3.

## Standard review checklist

The reviewer should check as many of these as are relevant:

- [ ] The output answers the right question and is fit for purpose.
- [ ] Facts, figures, names, quotes, references, and dates have been verified where material.
- [ ] The content does not overstate legal, security, or regulatory claims.
- [ ] Pricing, commitments, timelines, and contractual statements are correct.
- [ ] Sensitive or personal data is not included improperly.
- [ ] The tone matches the audience and company standards.
- [ ] The content does not contain biased, discriminatory, offensive, or harmful language.
- [ ] The output is not copied blindly from the model where human judgment was required.
- [ ] For code or automation, normal engineering review still happened.

## Workflow by output type

### Customer support or account communication

- Author drafts with or without AI assistance.
- Reviewer confirms facts, entitlements, concessions, and tone.
- No AI-drafted message is sent externally without human approval.

### Marketing or public content

- Verify factual claims, pricing, product details, dates, and references.
- Remove vague or inflated claims introduced by the model.
- Where the content mentions regulation, law, or security, check with a human who actually understands the topic.

### Internal policy or procedure content

- Review for clarity and realism.
- Check that the procedure matches how the team will actually operate.
- Avoid copying generic AI governance language that the team will not follow in practice.

### Coding and technical content

- Treat AI-generated code like untrusted contributor code.
- Run normal PR review and testing.
- Check for insecure patterns, hidden assumptions, and license or provenance concerns where relevant.
- Never skip engineering controls because the code "looks right."

## Documentation expectations

You do not need a heavyweight audit trail for every draft. But you do need enough evidence for material outputs.

Recommended minimum recordkeeping:

- Tier 1: no formal log required unless the output later becomes important
- Tier 2: keep a lightweight record in email, ticket, task, or review log
- Tier 3: record approver, date, and any conditions or changes required

Suggested log fields:

- output type
- author
- reviewer
- date
- review tier
- approved / revised / rejected
- notes or issues found

## Rejection and escalation

The reviewer should stop release and escalate if:

- the output contains fabricated facts or unsupported claims
- the author used an unapproved tool or inappropriate data
- there is disagreement about whether the output is safe or accurate enough
- the draft touches legal, HR, security, or regulatory matters beyond the reviewer’s competence
- customer, employee, or confidential information may have been exposed

Escalation contact:
`[Manager / Security Lead / Policy Owner / Legal Contact]`

## Example review scenarios

### Example 1: customer email draft

AI drafts a refund explanation. The support lead checks policy wording, confirms no extra promise was added, and approves the final message.

Review tier:
Tier 2

### Example 2: blog post on an AI-related topic

AI drafts an outline and first version. Marketing checks product facts, removes unsupported regulatory claims, and gets manager approval before publication.

Review tier:
Tier 2 or Tier 3 depending on the claims made

### Example 3: code suggestion for a production feature

Engineer accepts an AI-generated code block. Normal PR review, tests, and security judgment still apply before merge.

Review tier:
Tier 3 if the change is material or production-affecting

### Example 4: internal brainstorming notes

Founder uses AI to summarize options for an internal meeting. The notes are checked informally before discussion.

Review tier:
Tier 1

## Common review failures to avoid

- checking tone but not factual accuracy
- checking the first paragraph but not the whole draft
- assuming AI summaries reflect the source faithfully
- applying self-review to content that should have second-person review
- letting speed pressure bypass review for customer-facing content
- forgetting that AI-assisted code still needs ordinary engineering scrutiny

## Implementation notes for buyers

This SOP works best when linked directly from the policy and referenced in team onboarding.

For very small teams, the practical version may be:

- Tier 1: self-review
- Tier 2: peer or manager review
- Tier 3: founder, manager, or function owner sign-off

That is enough to be useful if people actually follow it.

## Lightweight review log template

| Date | Output type | Author | Reviewer | Tier | Outcome | Notes |
|---|---|---|---|---|---|---|
|  |  |  |  |  | Approved / Revised / Rejected |  |

## Document control

| Version | Date | Owner | Change summary |
|---|---|---|---|
| 2.0 | 2026-04-03 | Verto Studios starter template | Rewritten with practical review tiers, workflow examples, documentation expectations, and escalation guidance |
