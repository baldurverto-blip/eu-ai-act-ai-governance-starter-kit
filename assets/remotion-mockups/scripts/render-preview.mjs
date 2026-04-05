import {mkdirSync, writeFileSync} from "node:fs";
import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {canvas, palette, product} from "../src/scene.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const rendersDir = resolve(rootDir, "renders");

mkdirSync(rendersDir, {recursive: true});

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const multiline = (text, x, lineHeight, className) =>
  text
    .split("\n")
    .map((line, index) => {
      const dy = index === 0 ? 0 : lineHeight;
      return `<tspan x="${x}" dy="${dy}" class="${className}">${escapeXml(line)}</tspan>`;
    })
    .join("");

const renderSummaryCard = (x, y, width, label, copy) => `
  <g transform="translate(${x} ${y})">
    <rect width="${width}" height="120" rx="26" fill="rgba(255,249,241,0.72)" stroke="rgba(23,21,19,0.08)"/>
    <text x="24" y="36" class="meta-label">${escapeXml(label)}</text>
    <text x="24" y="66" class="summary-copy">${escapeXml(copy)}</text>
  </g>
`;

const renderBadge = (badge, index) => {
  const y = 154 + index * 62;
  return `
    <g transform="translate(1240 ${y})">
      <rect width="242" height="46" rx="23" fill="rgba(255,249,241,0.76)" stroke="rgba(23,21,19,0.10)"/>
      <circle cx="18" cy="23" r="5" fill="${palette.signal}"/>
      <text x="34" y="29" class="badge-text">${escapeXml(badge)}</text>
    </g>
  `;
};

const renderDoc = (doc, index) => {
  const frames = [
    {x: 1068, y: 168, width: 250, height: 336, rotate: 8},
    {x: 1150, y: 232, width: 246, height: 330, rotate: 3},
    {x: 980, y: 566, width: 408, height: 220, rotate: -4, landscape: true},
  ];
  const frame = frames[index];
  const lineBlocks = doc.lines
    .map((line, lineIndex) => {
      const y = frame.landscape ? 98 + lineIndex * 30 : 108 + lineIndex * 34;
      const width = frame.landscape ? 216 : 180;
      return `
        <g transform="translate(24 ${y})">
          <rect width="${width}" height="10" rx="5" fill="rgba(23,21,19,0.08)"/>
          <text x="0" y="28" class="doc-copy">${escapeXml(line)}</text>
        </g>
      `;
    })
    .join("");

  const footer = frame.landscape
    ? `
      <line x1="24" y1="160" x2="${frame.width - 24}" y2="160" stroke="rgba(23,21,19,0.09)"/>
      <text x="24" y="184" class="doc-micro">Preview</text>
      <text x="${frame.width - 146}" y="184" class="doc-micro">Ready to adapt</text>
    `
    : `
      <line x1="24" y1="226" x2="${frame.width - 24}" y2="226" stroke="rgba(23,21,19,0.09)"/>
      <text x="24" y="250" class="doc-micro">Scope</text>
      <text x="${frame.width - 88}" y="250" class="doc-micro">Owner</text>
      <rect x="24" y="268" width="92" height="42" rx="13" fill="rgba(255,249,241,0.9)" stroke="rgba(23,21,19,0.08)"/>
      <rect x="${frame.width - 112}" y="268" width="88" height="42" rx="13" fill="rgba(255,249,241,0.9)" stroke="rgba(23,21,19,0.08)"/>
      <text x="38" y="294" class="doc-data">Ordinary</text>
      <text x="${frame.width - 98}" y="294" class="doc-data">Ops</text>
    `;

  return `
    <g transform="translate(${frame.x} ${frame.y}) rotate(${frame.rotate})" filter="url(#shadowSoft)">
      <rect width="${frame.width}" height="${frame.height}" rx="24" fill="${palette.paper}" stroke="rgba(23,21,19,0.12)"/>
      <rect x="22" y="22" width="${frame.width - 44}" height="20" rx="10" fill="${doc.accent}" opacity="0.16"/>
      <rect x="24" y="56" width="${frame.landscape ? frame.width - 48 : frame.width - 48}" height="${frame.landscape ? 22 : 38}" rx="${frame.landscape ? 11 : 18}" fill="${doc.accent}" opacity="0.08"/>
      <text x="24" y="36" class="doc-chip" fill="${doc.accent}">${escapeXml(doc.chip)}</text>
      <text x="24" y="${frame.landscape ? 92 : 92}" class="doc-title">${escapeXml(doc.heading)}</text>
      ${lineBlocks}
      ${footer}
    </g>
  `;
};

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="220" y1="50" x2="1380" y2="860" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${palette.bgTop}"/>
      <stop offset="0.52" stop-color="${palette.bg}"/>
      <stop offset="1" stop-color="${palette.bgDeep}"/>
    </linearGradient>
    <linearGradient id="coverGradient" x1="780" y1="140" x2="1170" y2="730" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${palette.panelSoft}"/>
      <stop offset="1" stop-color="${palette.panel}"/>
    </linearGradient>
    <linearGradient id="spineGradient" x1="714" y1="180" x2="772" y2="720" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#3a352f"/>
      <stop offset="1" stop-color="#201d19"/>
    </linearGradient>
    <radialGradient id="haloWarm" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1310 150) rotate(139) scale(360 280)">
      <stop stop-color="${palette.signal}" stop-opacity="0.17"/>
      <stop offset="1" stop-color="${palette.signal}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="haloLight" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240 110) rotate(30) scale(320 250)">
      <stop stop-color="#ffffff" stop-opacity="0.82"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadowLg" x="-20%" y="-20%" width="140%" height="160%">
      <feDropShadow dx="0" dy="26" stdDeviation="28" flood-color="#261a10" flood-opacity="0.18"/>
    </filter>
    <filter id="shadowSoft" x="-20%" y="-20%" width="150%" height="170%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#261a10" flood-opacity="0.12"/>
    </filter>
  </defs>

  <rect width="${canvas.width}" height="${canvas.height}" fill="url(#bgGradient)"/>
  <circle cx="1310" cy="150" r="220" fill="url(#haloWarm)"/>
  <circle cx="240" cy="110" r="190" fill="url(#haloLight)"/>

  <rect x="66" y="62" width="1468" height="776" rx="42" fill="rgba(255,250,244,0.42)" stroke="rgba(255,255,255,0.52)"/>
  <rect x="90" y="86" width="1420" height="728" rx="34" fill="rgba(255,252,246,0.36)" stroke="rgba(23,21,19,0.06)"/>

  <g transform="translate(136 136)">
    <rect width="258" height="38" rx="19" fill="rgba(255,249,241,0.84)" stroke="rgba(196,93,47,0.20)"/>
    <circle cx="18" cy="19" r="5" fill="${palette.signal}"/>
    <text x="34" y="24" class="eyebrow">${escapeXml(product.eyebrow)}</text>
  </g>

  <g transform="translate(136 214)">
    <text x="0" y="0" class="title">${multiline(product.title, 0, 86, "title")}</text>
    <text x="0" y="290" class="subtitle">${escapeXml(product.subtitle)}</text>
  </g>

  ${renderSummaryCard(136, 558, 392, "Core pack", "5 governance templates plus a short implementation guide for week-one rollout.")}
  ${renderSummaryCard(136, 698, 392, "Preview before buying", "The landing page shows the sample register and the product pack at full size.")}

  <g>
    <ellipse cx="1030" cy="774" rx="340" ry="54" fill="rgba(36,24,12,0.12)"/>
    <rect x="736" y="150" width="428" height="548" rx="32" fill="url(#coverGradient)" filter="url(#shadowLg)"/>
    <path d="M736 182C736 164.327 750.327 150 768 150H820V698H768C750.327 698 736 683.673 736 666V182Z" fill="url(#spineGradient)"/>
    <rect x="820" y="150" width="344" height="548" rx="30" fill="url(#coverGradient)"/>
    <rect x="852" y="182" width="280" height="484" rx="22" fill="none" stroke="${palette.goldSoft}" stroke-opacity="0.72"/>
    <rect x="876" y="210" width="138" height="34" rx="17" fill="rgba(196,93,47,0.14)" stroke="rgba(196,93,47,0.30)"/>
    <text x="896" y="232" class="cover-chip">${product.price}</text>
    <text x="880" y="302" class="cover-kicker">AI GOVERNANCE</text>
    <text x="880" y="360" class="cover-title">${multiline("Starter\nKit", 880, 72, "cover-title")}</text>
    <text x="880" y="520" class="cover-copy">Policy, register, human review SOP, incident log, vendor checks, and implementation notes.</text>
    <line x1="880" y1="570" x2="1108" y2="570" stroke="${palette.gold}" stroke-opacity="0.34"/>
    <text x="880" y="612" class="cover-footer">Built for small EU teams already using AI</text>
  </g>

  ${product.documents.map(renderDoc).join("")}

  <g transform="translate(1240 110)">
    <rect width="242" height="342" rx="30" fill="rgba(29,28,27,0.94)" filter="url(#shadowSoft)"/>
    <text x="26" y="38" class="panel-label">${escapeXml(product.supportLabel)}</text>
    <text x="26" y="78" class="panel-copy">${escapeXml(product.supportCopy)}</text>
  </g>

  ${product.badges.map(renderBadge).join("")}

  <g transform="translate(1240 522)">
    <rect width="242" height="118" rx="26" fill="rgba(255,249,241,0.76)" stroke="rgba(23,21,19,0.08)"/>
    <text x="24" y="34" class="meta-label">Editable</text>
    <text x="24" y="64" class="summary-copy">Structured to adapt in Docs, Word, Notion, Excel, or Sheets.</text>
  </g>

  <text x="112" y="856" class="footer-copy">Verto Studios • product preview asset • 1600 × 900</text>

  <style>
    .eyebrow {
      font-family: Verdana, sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.16em;
      fill: ${palette.signal};
    }
    .title {
      font-family: Georgia, serif;
      font-size: 78px;
      font-weight: 700;
      letter-spacing: -0.055em;
      fill: ${palette.ink};
    }
    .subtitle {
      font-family: Verdana, sans-serif;
      font-size: 28px;
      font-weight: 500;
      fill: ${palette.inkSoft};
    }
    .meta-label {
      font-family: Verdana, sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      fill: ${palette.signalDeep};
    }
    .summary-copy {
      font-family: Verdana, sans-serif;
      font-size: 21px;
      font-weight: 500;
      fill: ${palette.inkSoft};
    }
    .cover-chip {
      font-family: Verdana, sans-serif;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.06em;
      fill: ${palette.signal};
    }
    .cover-kicker {
      font-family: Verdana, sans-serif;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.18em;
      fill: ${palette.goldSoft};
    }
    .cover-title {
      font-family: Georgia, serif;
      font-size: 64px;
      font-weight: 700;
      letter-spacing: -0.05em;
      fill: ${palette.paper};
    }
    .cover-copy {
      font-family: Verdana, sans-serif;
      font-size: 23px;
      font-weight: 500;
      fill: rgba(255,249,241,0.84);
    }
    .cover-footer {
      font-family: Verdana, sans-serif;
      font-size: 18px;
      font-weight: 600;
      fill: rgba(255,249,241,0.78);
    }
    .panel-label {
      font-family: Verdana, sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      fill: #f0d9c9;
    }
    .panel-copy {
      font-family: Georgia, serif;
      font-size: 29px;
      font-weight: 600;
      letter-spacing: -0.04em;
      fill: ${palette.paper};
    }
    .badge-text {
      font-family: Verdana, sans-serif;
      font-size: 15px;
      font-weight: 700;
      fill: ${palette.ink};
    }
    .doc-chip {
      font-family: Verdana, sans-serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.08em;
    }
    .doc-title {
      font-family: Georgia, serif;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: -0.04em;
      fill: ${palette.ink};
    }
    .doc-copy {
      font-family: Verdana, sans-serif;
      font-size: 15px;
      font-weight: 500;
      fill: ${palette.inkSoft};
    }
    .doc-micro {
      font-family: Verdana, sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      fill: ${palette.signalDeep};
    }
    .doc-data {
      font-family: Verdana, sans-serif;
      font-size: 15px;
      font-weight: 600;
      fill: ${palette.ink};
    }
    .footer-copy {
      font-family: Verdana, sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.04em;
      fill: rgba(23,21,19,0.48);
    }
  </style>
</svg>
`;

const svgPath = resolve(rendersDir, "eu-ai-act-toolkit-preview.svg");
writeFileSync(svgPath, svg, "utf8");

const result = {
  svg: svgPath,
};

writeFileSync(resolve(rendersDir, "render-result.json"), `${JSON.stringify(result, null, 2)}\n`, "utf8");

console.log(JSON.stringify(result, null, 2));
