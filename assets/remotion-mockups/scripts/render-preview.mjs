import {mkdirSync, writeFileSync} from "node:fs";
import {dirname, resolve} from "node:path";
import {execFileSync} from "node:child_process";
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

const multiline = (text, x, y, lineHeight, className) =>
  text
    .split("\n")
    .map((line, index) => {
      const dy = index === 0 ? 0 : lineHeight;
      return `<tspan x="${x}" dy="${dy}" class="${className}">${escapeXml(line)}</tspan>`;
    })
    .join("");

const renderBadges = () =>
  product.badges
    .map((badge, index) => {
      const col = index % 2;
      const row = Math.floor(index / 2);
      const x = 1020 + col * 235;
      const y = 620 + row * 56;
      return `
        <g transform="translate(${x} ${y})">
          <rect width="198" height="38" rx="19" fill="rgba(255,249,241,0.72)" stroke="rgba(23,21,19,0.1)"/>
          <circle cx="18" cy="19" r="4" fill="${palette.signal}"/>
          <text x="32" y="24" class="badge-text">${escapeXml(badge)}</text>
        </g>
      `;
    })
    .join("");

const renderDocument = (doc, index) => {
  const positions = [
    {x: 720, y: 250, rotate: 10},
    {x: 650, y: 180, rotate: -6},
    {x: 565, y: 118, rotate: -14},
  ];
  const {x, y, rotate} = positions[index];

  const lineBlocks = doc.lines
    .map(
      (line, lineIndex) => `
        <g transform="translate(34 ${146 + lineIndex * 34})">
          <rect width="200" height="10" rx="5" fill="rgba(23,21,19,0.08)"/>
          <text x="0" y="28" class="doc-copy">${escapeXml(line)}</text>
        </g>
      `,
    )
    .join("");

  return `
    <g transform="translate(${x} ${y}) rotate(${rotate})">
      <rect x="18" y="22" width="348" height="430" rx="28" fill="rgba(36,24,12,0.08)"/>
      <rect width="348" height="430" rx="28" fill="${palette.paper}" stroke="rgba(23,21,19,0.12)"/>
      <rect x="28" y="28" width="292" height="26" rx="13" fill="${doc.accent}" opacity="0.12"/>
      <rect x="34" y="74" width="280" height="148" rx="18" fill="${doc.accent}" opacity="0.08"/>
      <text x="34" y="48" class="doc-chip" fill="${doc.accent}">${escapeXml(doc.chip)}</text>
      <text x="34" y="112" class="doc-title">${escapeXml(doc.heading)}</text>
      ${lineBlocks}
      <line x1="34" y1="290" x2="314" y2="290" stroke="rgba(23,21,19,0.09)"/>
      <text x="34" y="324" class="doc-micro">Scope</text>
      <text x="182" y="324" class="doc-micro">Owner</text>
      <rect x="34" y="342" width="126" height="54" rx="15" fill="rgba(255,249,241,0.8)" stroke="rgba(23,21,19,0.08)"/>
      <rect x="182" y="342" width="132" height="54" rx="15" fill="rgba(255,249,241,0.8)" stroke="rgba(23,21,19,0.08)"/>
      <text x="49" y="374" class="doc-data">Ordinary use</text>
      <text x="197" y="374" class="doc-data">Ops / Legal</text>
    </g>
  `;
};

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="240" y1="80" x2="1340" y2="840" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F7F0E4"/>
      <stop offset="0.52" stop-color="${palette.bg}"/>
      <stop offset="1" stop-color="${palette.bgDeep}"/>
    </linearGradient>
    <radialGradient id="haloOne" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1340 160) rotate(136) scale(420 320)">
      <stop stop-color="rgba(196,93,47,0.22)"/>
      <stop offset="1" stop-color="rgba(196,93,47,0)"/>
    </radialGradient>
    <radialGradient id="haloTwo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 96) rotate(32) scale(360 260)">
      <stop stop-color="rgba(255,255,255,0.82)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <filter id="blurGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="20"/>
    </filter>
  </defs>

  <rect width="${canvas.width}" height="${canvas.height}" fill="url(#bgGradient)"/>
  <circle cx="1340" cy="160" r="250" fill="url(#haloOne)" filter="url(#blurGlow)"/>
  <circle cx="220" cy="96" r="200" fill="url(#haloTwo)" filter="url(#blurGlow)"/>

  <rect x="72" y="72" width="1456" height="756" rx="42" fill="rgba(255,249,241,0.44)" stroke="rgba(255,255,255,0.5)"/>
  <rect x="96" y="96" width="1408" height="708" rx="34" fill="rgba(255,252,246,0.42)" stroke="rgba(23,21,19,0.06)"/>

  <g transform="translate(146 144)">
    <rect width="182" height="36" rx="18" fill="rgba(255,249,241,0.78)" stroke="rgba(196,93,47,0.18)"/>
    <circle cx="20" cy="18" r="5" fill="${palette.signal}"/>
    <text x="36" y="23" class="eyebrow">DOWNLOADABLE TOOLKIT</text>
  </g>

  <g transform="translate(146 218)">
    <text x="0" y="0" class="title">${multiline(product.title, 0, 0, 84, "title")}</text>
    <text x="0" y="288" class="subtitle">${escapeXml(product.subtitle)}</text>

    <g transform="translate(0 356)">
      <rect width="236" height="68" rx="34" fill="${palette.ink}"/>
      <text x="30" y="42" class="cta-primary">Preview the pack</text>
      <rect x="254" width="174" height="68" rx="34" fill="rgba(255,249,241,0.64)" stroke="rgba(23,21,19,0.12)"/>
      <text x="286" y="42" class="cta-secondary">${product.price}</text>
    </g>

    <g transform="translate(0 470)">
      <rect width="410" height="152" rx="28" fill="rgba(255,249,241,0.68)" stroke="rgba(23,21,19,0.08)"/>
      <text x="28" y="42" class="meta-label">Includes</text>
      <text x="28" y="86" class="meta-copy">Policy, register, review SOP, vendor diligence, and incident tracking.</text>
      <text x="28" y="122" class="meta-copy">Built for ordinary business AI use, with explicit scope limits.</text>
    </g>
  </g>

  <g>
    <ellipse cx="1000" cy="745" rx="302" ry="46" fill="rgba(36,24,12,0.10)"/>
    ${product.documents.map(renderDocument).join("")}
  </g>

  <g transform="translate(1020 188)">
    <rect width="360" height="132" rx="30" fill="rgba(29,28,27,0.92)"/>
    <text x="28" y="42" class="panel-label">What buyers get</text>
    <text x="28" y="82" class="panel-copy">A compact governance documentation system for small EU teams already using AI.</text>
  </g>

  ${renderBadges()}

  <g transform="translate(1020 484)">
    <rect width="360" height="92" rx="28" fill="rgba(255,249,241,0.68)" stroke="rgba(23,21,19,0.08)"/>
    <text x="28" y="38" class="meta-label">Tone</text>
    <text x="28" y="68" class="meta-copy">Premium, practical, and explicit about what the toolkit does not claim.</text>
  </g>

  <text x="112" y="854" class="footer-copy">Verto Studios • EU AI Act toolkit preview asset • 1600 × 900</text>

  <style>
    .eyebrow {
      font-family: sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.18em;
      fill: ${palette.signal};
    }
    .title {
      font-family: serif;
      font-size: 76px;
      font-weight: 700;
      letter-spacing: -0.05em;
      fill: ${palette.ink};
    }
    .subtitle {
      font-family: sans-serif;
      font-size: 27px;
      font-weight: 500;
      fill: ${palette.inkSoft};
    }
    .cta-primary {
      font-family: sans-serif;
      font-size: 24px;
      font-weight: 700;
      fill: ${palette.paper};
    }
    .cta-secondary {
      font-family: sans-serif;
      font-size: 24px;
      font-weight: 700;
      fill: ${palette.ink};
    }
    .meta-label {
      font-family: sans-serif;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      fill: ${palette.signalDeep};
    }
    .meta-copy {
      font-family: sans-serif;
      font-size: 20px;
      font-weight: 500;
      fill: ${palette.inkSoft};
    }
    .panel-label {
      font-family: sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      fill: #F0D9C9;
    }
    .panel-copy {
      font-family: serif;
      font-size: 26px;
      font-weight: 600;
      letter-spacing: -0.03em;
      fill: ${palette.paper};
    }
    .badge-text {
      font-family: sans-serif;
      font-size: 15px;
      font-weight: 600;
      fill: ${palette.ink};
    }
    .doc-chip {
      font-family: sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.08em;
    }
    .doc-title {
      font-family: serif;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: -0.04em;
      fill: ${palette.ink};
    }
    .doc-copy {
      font-family: sans-serif;
      font-size: 16px;
      font-weight: 500;
      fill: ${palette.inkSoft};
    }
    .doc-micro {
      font-family: sans-serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      fill: ${palette.signalDeep};
    }
    .doc-data {
      font-family: sans-serif;
      font-size: 16px;
      font-weight: 600;
      fill: ${palette.ink};
    }
    .footer-copy {
      font-family: sans-serif;
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

let pngPath = null;
let pngError = null;

try {
  execFileSync("/usr/bin/qlmanage", ["-t", "-s", "1600", "-o", rendersDir, svgPath], {
    stdio: "pipe",
  });
  pngPath = `${svgPath}.png`;
} catch (error) {
  pngError = error instanceof Error ? error.message : String(error);
}

const result = {
  svg: svgPath,
  png: pngPath,
  pngError,
};

writeFileSync(resolve(rendersDir, "render-result.json"), `${JSON.stringify(result, null, 2)}\n`, "utf8");

console.log(JSON.stringify(result, null, 2));
