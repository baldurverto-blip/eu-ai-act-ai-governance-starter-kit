# AI Incident Log Template

> **Purpose:** Track and manage AI-related incidents for governance and continuous improvement.
> **Status:** Starter template — adapt to your incident management process.

---

## Instructions

1. Log every AI-related incident promptly
2. Capture sufficient detail for root cause analysis
3. Assign severity and track remediation
4. Review patterns quarterly
5. Escalate serious incidents immediately

---

## Incident Log

| ID | Date | Reporter | AI Tool | Incident Type | Description | Severity | Root Cause | Corrective Action | Status | Resolved Date |
|----|------|----------|---------|---------------|-------------|----------|------------|-------------------|--------|---------------|
| INC-001 | | | | | | | | | Open | |
| INC-002 | | | | | | | | | Open | |
| INC-003 | | | | | | | | | Open | |
| INC-004 | | | | | | | | | Open | |
| INC-005 | | | | | | | | | Open | |

---

## Field Definitions

### ID
Unique incident identifier (e.g., INC-001, INC-002)

### Date
Date and time the incident was discovered/reported

### Reporter
Person who discovered or reported the incident

### AI Tool
Which AI tool or service was involved

### Incident Type
- **Hallucination:** AI produced incorrect, fabricated, or misleading content
- **Misuse:** Tool used in violation of policy or intended purpose
- **Data Exposure:** Confidential data input to external AI tool
- **Policy Breach:** Violation of AI usage policy
- **Security Incident:** Vendor breach, unauthorized access, or tool vulnerability
- **Output Quality:** AI output quality issues affecting business operations

### Description
Brief description of what happened, including:
- What the AI was being used for
- What went wrong
- Who was affected (if anyone)

### Severity
- **Low:** Minor impact, no external consequence, easily remediated
- **Medium:** Moderate impact, potential external exposure, requires process change
- **High:** Significant impact, regulatory concern, requires immediate escalation

### Root Cause
What caused the incident (e.g., lack of review, missing controls, tool limitation)

### Corrective Action
Steps taken or planned to prevent recurrence

### Status
- **Open:** Under investigation
- **Remediating:** Corrective action in progress
- **Resolved:** Incident closed

### Resolved Date
Date the incident was fully resolved

---

## Example Entries

| ID | Date | Reporter | AI Tool | Incident Type | Description | Severity | Root Cause | Corrective Action | Status | Resolved Date |
|----|------|----------|---------|---------------|-------------|----------|------------|-------------------|--------|---------------|
| INC-001 | 2024-02-15 | Sarah M. | ChatGPT | Hallucination | AI generated fictional regulatory requirements in customer-facing email draft | Medium | Human review not performed | Required second-pass review for all external communications | Resolved | 2024-02-16 |
| INC-002 | 2024-03-01 | James L. | Claude | Data Exposure | Engineer input proprietary algorithm into external AI for debugging | High | Unclear policy on technical IP | Added IP handling to policy, conducted team training | Resolved | 2024-03-05 |

---

## Escalation Rules

**Immediate escalation to security owner and management required for:**

- Any incident involving customer PII or personal data
- Potential regulatory notification obligations
- Incidents with media or public exposure risk
- Repeat incidents of the same type

---

## Quarterly Review

Review all logged incidents quarterly to:

- Identify patterns and trends
- Assess effectiveness of corrective actions
- Update controls and policies as needed
- Report summary to leadership

