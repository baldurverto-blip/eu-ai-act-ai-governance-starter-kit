# AI Systems Register Template

> **Purpose:** Inventory of all AI tools and use cases in use across the organization.
> **Status:** Starter template — maintain and update as use evolves.
> **Why it matters:** You cannot govern what you do not know about. This register creates the foundational inventory that most teams are missing, and it becomes the reference point for any later compliance discussion.
> **Audience:** Small EU teams (5–100 people) wanting a practical governance baseline.

---

## Instructions

1. List every AI tool used in your organization
2. Document the business purpose for each use case
3. Identify the data categories involved
4. Set review dates and controls
5. Assign ownership for each entry
6. Update quarterly or when new tools are introduced

> **Tip:** Start with what you actually use today. Most small teams discover they're using 5-10 AI tools across the organization when they first do this exercise. That visibility alone is valuable for governance.

## How this supports EU AI Act readiness

While this register is not a compliance certificate, it creates the documentation baseline that becomes relevant when:
- Mapping AI systems to regulatory requirements
- Responding to information requests from authorities
- Conducting internal risk assessments
- Demonstrating due diligence to partners or customers

The register answers the first question regulators ask: "What AI systems are you using, and for what purpose?"

---

## AI Systems Register

| # | AI Tool | Vendor | Version/Model | Business Purpose | User Group | Data Categories | Risk Level | Owner | Review Date | Controls |
|---|---------|--------|---------------|-------------------|------------|-----------------|-------------|-------|-------------|----------|
| 1 | | | | | | | | | | |
| 2 | | | | | | | | | | |
| 3 | | | | | | | | | | |
| 4 | | | | | | | | | | |
| 5 | | | | | | | | | | |
| 6 | | | | | | | | | | |
| 7 | | | | | | | | | | |
| 8 | | | | | | | | | | |
| 9 | | | | | | | | | | |
| 10 | | | | | | | | | | |

---

## Field Definitions

### AI Tool
Name of the AI tool or service (e.g., ChatGPT, Claude, Copilot, Notion AI)

### Vendor
Company providing the tool (e.g., OpenAI, Anthropic, Microsoft, Google)

### Version/Model
Specific model or version in use (e.g., GPT-4, Claude 3.5 Sonnet)

### Business Purpose
Describe what the tool is used for in your organization

### User Group
Which team or role uses this tool (e.g., Marketing, Engineering, Sales, Operations)

### Data Categories
What types of data are processed:
- Internal (non-sensitive)
- Internal (confidential)
- Customer PII
- Financial data
- Legal/privileged
- Health data
- None / public data only

### Risk Level
- **Ordinary:** Internal drafting, research, summarization, coding assistance — the vast majority of small team AI use
- **Elevated:** Customer-facing content, material business decisions, sensitive internal data
- **High:** Employment decisions, credit decisions, healthcare, legal advice, biometric processing, law enforcement, scoring or ranking of individuals

> **Note on high-risk:** If any of your use cases map to the EU AI Act's high-risk categories (Annex III), you likely need specialist advice beyond what this toolkit provides. This template is designed for ordinary and elevated use cases.

### Owner
Person responsible for this tool's usage and compliance

### Review Date
When this use case should be reviewed (recommend quarterly)

### Controls
Existing or planned controls (e.g., human review, output logging, access restrictions)

---

## Example Entries

| # | AI Tool | Vendor | Version/Model | Business Purpose | User Group | Data Categories | Risk Level | Owner | Review Date | Controls |
|---|---------|--------|---------------|-------------------|------------|-----------------|-------------|-------|-------------|----------|
| 1 | ChatGPT Team | OpenAI | GPT-4.1 class models | Email drafting, meeting-note cleanup, internal research support | All staff | Internal (non-sensitive) | Ordinary | Operations Lead | 2026-07-01 | Training acknowledgment signed, human review before external use |
| 2 | Claude | Anthropic | Claude 3.7 Sonnet | Code review and technical writing | Engineering | Internal (confidential) | Ordinary | Engineering Lead | 2026-07-01 | No credentials or customer data in prompts |
| 3 | Notion AI | Notion | Current | Internal documentation assistance | All staff | Internal (non-sensitive) | Ordinary | Operations Lead | 2026-07-01 | Workspace access controls maintained |
| 4 | Microsoft 365 Copilot | Microsoft | 365 Copilot | Email and document assistance | Sales, Marketing | Customer contact details possible | Elevated | Revenue Operations Lead | 2026-07-01 | Human review before external send, manager approval for sensitive workflows |

---

## Maintenance

- **Quarterly review:** Update register quarterly or when new AI tools are introduced
- **Annual audit:** Full review of all entries for accuracy and completeness
- **Incident-driven:** Update immediately after any AI-related incident

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Verto Studios | Initial starter-kit release |
