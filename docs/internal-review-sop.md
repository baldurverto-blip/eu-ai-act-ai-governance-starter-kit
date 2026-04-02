# Internal AI Review SOP

> **Purpose:** Standard operating procedure for human review of AI-assisted output.
> **Status:** Starter SOP — adapt to your team's review workflow.
> **Why it matters:** The biggest risk with AI in business isn't the tool itself — it's unchecked output reaching the wrong audience. A simple review checkpoint dramatically reduces hallucination risk, confidentiality leaks, and brand damage.
> **Audience:** Small EU teams (5–100 people) wanting practical review workflows without enterprise overhead.

---

## 1. Purpose

This SOP establishes a consistent process for human review of AI-assisted output before it reaches customers, candidates, stakeholders, or production systems.

## 2. Scope

This procedure applies to all AI-assisted output that will be:

- Shared with customers or external parties
- Published (blog, website, marketing materials)
- Used in hiring, promotion, or compensation decisions
- Stored as organizational knowledge or policy
- Fed into production systems or automation

## 3. Roles

| Role | Responsibility |
|------|----------------|
| **Author** | Uses AI tool, drafts initial output, flags for review |
| **Reviewer** | Reviews AI-assisted output for accuracy, appropriateness, and alignment |
| **Owner** | Final approver for high-stakes output, escalation point |

## 4. Review Tiers

### Tier 1: Standard Review
**When:** Internal documents, emails, meeting notes, internal drafts

- Author reviews own output for coherence, basic accuracy, and appropriate tone
- Quick sanity check: "Would I be comfortable sending this internally?"
- No second person required unless author has concerns

### Tier 2: Business Review
**When:** Customer-facing content, external communications, proposals, quotes, reports

- Second person reviews for accuracy, tone, brand alignment, and confidentiality
- Reviewer adds initials or log entry with date
- This is where most small teams need to be disciplined

### Tier 3: Elevated Review
**When:** Public-facing content (website, blog, social media), legal/financial implications, hiring decisions, press statements

- Two-person review minimum
- Manager or owner sign-off required
- Document review in project log or email trail

> **Quick rule:** If you're unsure which tier applies, err on the side of the higher tier. The cost of extra review is small compared to the cost of a mistake.

---

## 5. Review Checklist

Before approving AI-assisted output, the reviewer should confirm:

- [ ] **Accuracy:** Facts, figures, and claims are correct
- [ ] **Relevance:** Output addresses the intended request/purpose
- [ ] **Tone:** Appropriate for the audience and context
- [ ] **Confidentiality:** No internal or third-party sensitive information exposed
- [ ] **Bias:** No discriminatory or inappropriate content
- [ ] **Hallucinations:** No fabricated facts, quotes, or references
- [ ] **Compliance:** Output does not violate policy or regulations

---

## 6. Workflow

```
┌─────────────────┐
│  Author uses   │
│  AI tool       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Author drafts  │◄─────── No issues
│  output         │         ──────► APPROVE
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Determine      │
│  review tier   │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
 ▼ ▼ ▼ ▼ ▼ ▼ ▼
T1 T2 T3 → Review
         │
         ▼
┌─────────────────┐
│  Approve /     │
│  Request       │
│  Revisions     │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
 APPROVE  REVISE
         │
         ▼
    [Back to Author]
```

---

## 7. Documentation

- Tier 2 and Tier 3 reviews should be logged
- Log entry should include: date, author, reviewer, output type, outcome
- Retain logs for quarterly review and incident investigation

---

## 8. Escalation

Escalate to the security owner or management if:

- Output contains apparent hallucinations or false claims
- Potential policy violation identified
- Customer or third-party data appears in output
- Reviewer and author disagree on approval

---

## 9. Training

All team members using AI tools should:

1. Complete AI usage policy training
2. Sign the training acknowledgment
3. Understand the review tiers and when they apply

---

## Document Control

| Version | Date | Owner | Changes |
|---------|------|-------|---------|
| 1.0 | 2026-04-02 | Verto Studios | Initial starter-kit release |
