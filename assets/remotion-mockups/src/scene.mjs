export const canvas = {
  width: 1600,
  height: 900,
};

export const palette = {
  bg: "#efe6d6",
  bgTop: "#f8f1e6",
  bgDeep: "#d7c4aa",
  paper: "#fff9f1",
  paperSoft: "#f6eee3",
  ink: "#171513",
  inkSoft: "#4a443c",
  line: "rgba(23, 21, 19, 0.14)",
  signal: "#c45d2f",
  signalDeep: "#8f3f1f",
  moss: "#31473f",
  mossSoft: "#dbe7df",
  gold: "#b9923f",
  goldSoft: "#ead8ab",
  panel: "#1d1c1b",
  panelSoft: "#2a2723",
  shadow: "rgba(36, 24, 12, 0.18)",
};

export const product = {
  eyebrow: "DOWNLOADABLE GOVERNANCE PACK",
  title: "EU AI Act\nAI Governance\nStarter Kit",
  subtitle:
    "Practical policy and register templates for EU teams already using AI in everyday operations.",
  price: "EUR 149",
  supportLabel: "What buyers receive",
  supportCopy:
    "A clean starter pack with policy, systems register, human review SOP, incident log, vendor checklist, and a short implementation guide.",
  badges: [
    "Policy template",
    "Systems register",
    "Review SOP",
    "Incident log",
    "Vendor checklist",
  ],
  documents: [
    {
      chip: "ai-systems-register.md",
      heading: "Sample register",
      accent: "#31473f",
      lines: ["Named owner", "Purpose + data categories", "Review date + controls"],
    },
    {
      chip: "ai-usage-policy.md",
      heading: "Usage policy",
      accent: "#c45d2f",
      lines: ["Allowed use cases", "Confidentiality rules", "Escalation triggers"],
    },
    {
      chip: "human-review-sop.md",
      heading: "Review SOP",
      accent: "#b9923f",
      lines: ["Human sign-off path", "Sensitive output checks", "Incident follow-up"],
    },
  ],
};
