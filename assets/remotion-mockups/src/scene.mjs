export const canvas = {
  width: 1600,
  height: 900,
};

export const palette = {
  bg: "#efe6d6",
  bgDeep: "#dccdb7",
  paper: "#fff9f1",
  paperSoft: "#f4ecdf",
  ink: "#171513",
  inkSoft: "#4a443c",
  line: "rgba(23, 21, 19, 0.14)",
  signal: "#c45d2f",
  signalDeep: "#8f3f1f",
  moss: "#31473f",
  mossSoft: "#dde8e1",
  gold: "#b9923f",
  goldSoft: "#efe0bc",
  shadow: "rgba(36, 24, 12, 0.16)",
};

export const product = {
  title: "EU AI Act\nAI Governance\nStarter Kit",
  subtitle:
    "Practical documentation templates for small EU teams using AI in everyday operations.",
  price: "EUR 149",
  badges: ["Policy template", "Systems register", "Review SOP", "Incident log", "Vendor checklist"],
  documents: [
    {
      chip: "AI-usage-policy.md",
      heading: "Internal AI use policy",
      accent: "#c45d2f",
      lines: [
        "Approved uses",
        "Confidentiality boundaries",
        "Human review requirements",
      ],
    },
    {
      chip: "ai-systems-register.md",
      heading: "Tool inventory register",
      accent: "#31473f",
      lines: [
        "Owner and purpose",
        "Data sensitivity",
        "Review cadence",
      ],
    },
    {
      chip: "incident-log.md",
      heading: "Incident record",
      accent: "#b9923f",
      lines: [
        "Misuse and exposure log",
        "Root cause capture",
        "Remediation tracking",
      ],
    },
  ],
};
