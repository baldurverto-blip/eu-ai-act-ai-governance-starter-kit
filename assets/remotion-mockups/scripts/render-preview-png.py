import json
from pathlib import Path
from PIL import Image, ImageColor, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
RENDERS = ROOT / "renders"
RENDERS.mkdir(parents=True, exist_ok=True)

WIDTH = 1600
HEIGHT = 900

COLORS = {
    "bg": "#efe6d6",
    "bg_deep": "#dccdb7",
    "paper": "#fff9f1",
    "paper_soft": "#f4ecdf",
    "ink": "#171513",
    "ink_soft": "#4a443c",
    "signal": "#c45d2f",
    "signal_deep": "#8f3f1f",
    "gold": "#b9923f",
    "panel": "#1d1c1b",
}

GEORGIA_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"
VERDANA = "/System/Library/Fonts/Supplemental/Verdana.ttf"
VERDANA_BOLD = "/System/Library/Fonts/Supplemental/Verdana Bold.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


TITLE_FONT = font(GEORGIA_BOLD, 76)
SUBTITLE_FONT = font(VERDANA, 27)
UI_FONT = font(VERDANA_BOLD, 24)
LABEL_FONT = font(VERDANA_BOLD, 15)
META_FONT = font(VERDANA, 20)
PANEL_FONT = font(GEORGIA_BOLD, 28)
DOC_TITLE = font(GEORGIA_BOLD, 31)
DOC_COPY = font(VERDANA, 16)
DOC_MICRO = font(VERDANA_BOLD, 13)
FOOTER_FONT = font(VERDANA, 14)
EYEBROW_FONT = font(VERDANA_BOLD, 14)


def rounded_box(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def add_shadow(base, box, radius=26, alpha=36, blur=24, offset=(0, 18)):
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    x1, y1, x2, y2 = box
    ox, oy = offset
    shadow_draw.rounded_rectangle((x1 + ox, y1 + oy, x2 + ox, y2 + oy), radius=radius, fill=(30, 20, 12, alpha))
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(shadow)


def draw_gradient_background():
    image = Image.new("RGBA", (WIDTH, HEIGHT))
    px = image.load()
    top = ImageColor.getrgb("#f7f0e4")
    bottom = ImageColor.getrgb(COLORS["bg_deep"])
    for y in range(HEIGHT):
        t = y / (HEIGHT - 1)
        row = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
        for x in range(WIDTH):
            px[x, y] = row + (255,)
    return image


def add_glow(base, center, radius, color, opacity):
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    x, y = center
    rgba = ImageColor.getrgb(color) + (opacity,)
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=rgba)
    layer = layer.filter(ImageFilter.GaussianBlur(radius // 2))
    base.alpha_composite(layer)


def fit_text(draw, text, box_width, box_height, font_obj, fill, start_x, start_y, line_gap=10):
    words = text.split()
    lines = []
    current = []
    for word in words:
        trial = " ".join(current + [word])
        if draw.textlength(trial, font=font_obj) <= box_width or not current:
            current.append(word)
        else:
            lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    y = start_y
    for line in lines:
        draw.text((start_x, y), line, font=font_obj, fill=fill)
        bbox = draw.textbbox((start_x, y), line, font=font_obj)
        y = bbox[3] + line_gap
        if y > start_y + box_height:
          break


base = draw_gradient_background()
add_glow(base, (1340, 160), 220, COLORS["signal"], 48)
add_glow(base, (220, 96), 180, "#ffffff", 120)

draw = ImageDraw.Draw(base)

rounded_box(draw, (72, 72, 1528, 828), 42, (255, 249, 241, 112), (255, 255, 255, 140), 2)
rounded_box(draw, (96, 96, 1504, 804), 34, (255, 252, 246, 96), (23, 21, 19, 20), 1)

rounded_box(draw, (146, 144, 328, 180), 18, (255, 249, 241, 200), (196, 93, 47, 56), 1)
draw.ellipse((160, 157, 170, 167), fill=COLORS["signal"])
draw.text((182, 154), "DOWNLOADABLE TOOLKIT", font=EYEBROW_FONT, fill=COLORS["signal"])

title_x = 146
title_y = 218
for idx, line in enumerate(["EU AI Act", "AI Governance", "Starter Kit"]):
    draw.text((title_x, title_y + idx * 84), line, font=TITLE_FONT, fill=COLORS["ink"])

fit_text(
    draw,
    "Practical documentation templates for small EU teams using AI in everyday operations.",
    540,
    120,
    SUBTITLE_FONT,
    COLORS["ink_soft"],
    146,
    502,
    10,
)

rounded_box(draw, (146, 574, 382, 642), 34, COLORS["ink"])
draw.text((176, 596), "Preview the pack", font=UI_FONT, fill=COLORS["paper"])
rounded_box(draw, (400, 574, 574, 642), 34, (255, 249, 241, 164), (23, 21, 19, 30), 1)
draw.text((432, 596), "EUR 149", font=UI_FONT, fill=COLORS["ink"])

rounded_box(draw, (146, 688, 556, 840), 28, (255, 249, 241, 176), (23, 21, 19, 20), 1)
draw.text((174, 716), "INCLUDES", font=LABEL_FONT, fill=COLORS["signal_deep"])
fit_text(
    draw,
    "Policy, register, review SOP, vendor diligence, and incident tracking.",
    350,
    60,
    META_FONT,
    COLORS["ink_soft"],
    174,
    752,
    8,
)
fit_text(
    draw,
    "Built for ordinary business AI use, with explicit scope limits.",
    350,
    60,
    META_FONT,
    COLORS["ink_soft"],
    174,
    804,
    8,
)

draw.ellipse((698, 699, 1302, 791), fill=(36, 24, 12, 26))

docs = [
    {
        "box": (720, 250, 1068, 680),
        "rotate": 10,
        "accent": "#c45d2f",
        "chip": "AI-usage-policy.md",
        "title": "Internal AI use policy",
        "lines": ["Approved uses", "Confidentiality boundaries", "Human review requirements"],
    },
    {
        "box": (650, 180, 998, 610),
        "rotate": -6,
        "accent": "#31473f",
        "chip": "ai-systems-register.md",
        "title": "Tool inventory register",
        "lines": ["Owner and purpose", "Data sensitivity", "Review cadence"],
    },
    {
        "box": (565, 118, 913, 548),
        "rotate": -14,
        "accent": "#b9923f",
        "chip": "incident-log.md",
        "title": "Incident record",
        "lines": ["Misuse and exposure log", "Root cause capture", "Remediation tracking"],
    },
]

for doc in reversed(docs):
    layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    layer_draw = ImageDraw.Draw(layer)
    box = doc["box"]
    add_shadow(base, box, radius=28, alpha=24, blur=18, offset=(0, 16))
    rounded_box(layer_draw, box, 28, COLORS["paper"], (23, 21, 19, 30), 1)
    x1, y1, x2, y2 = box
    rounded_box(layer_draw, (x1 + 28, y1 + 28, x1 + 320, y1 + 54), 13, ImageColor.getrgb(doc["accent"]) + (32,))
    rounded_box(layer_draw, (x1 + 34, y1 + 74, x1 + 314, y1 + 222), 18, ImageColor.getrgb(doc["accent"]) + (20,))
    layer_draw.text((x1 + 34, y1 + 34), doc["chip"], font=LABEL_FONT, fill=doc["accent"])
    layer_draw.text((x1 + 34, y1 + 102), doc["title"], font=DOC_TITLE, fill=COLORS["ink"])
    for idx, line in enumerate(doc["lines"]):
        yy = y1 + 168 + idx * 42
        rounded_box(layer_draw, (x1 + 34, yy, x1 + 234, yy + 10), 5, (23, 21, 19, 20))
        layer_draw.text((x1 + 34, yy + 18), line, font=DOC_COPY, fill=COLORS["ink_soft"])
    layer_draw.line((x1 + 34, y1 + 290, x1 + 314, y1 + 290), fill=(23, 21, 19, 24), width=1)
    layer_draw.text((x1 + 34, y1 + 312), "SCOPE", font=DOC_MICRO, fill=COLORS["signal_deep"])
    layer_draw.text((x1 + 182, y1 + 312), "OWNER", font=DOC_MICRO, fill=COLORS["signal_deep"])
    rounded_box(layer_draw, (x1 + 34, y1 + 342, x1 + 160, y1 + 396), 15, (255, 249, 241, 216), (23, 21, 19, 20), 1)
    rounded_box(layer_draw, (x1 + 182, y1 + 342, x1 + 314, y1 + 396), 15, (255, 249, 241, 216), (23, 21, 19, 20), 1)
    layer_draw.text((x1 + 49, y1 + 360), "Ordinary use", font=DOC_COPY, fill=COLORS["ink"])
    layer_draw.text((x1 + 197, y1 + 360), "Ops / Legal", font=DOC_COPY, fill=COLORS["ink"])
    rotated = layer.rotate(doc["rotate"], resample=Image.Resampling.BICUBIC, center=((x1 + x2) / 2, (y1 + y2) / 2))
    base.alpha_composite(rotated)

draw = ImageDraw.Draw(base)

rounded_box(draw, (1020, 188, 1380, 320), 30, (29, 28, 27, 234))
draw.text((1048, 212), "WHAT BUYERS GET", font=LABEL_FONT, fill="#F0D9C9")
fit_text(
    draw,
    "A compact governance documentation system for small EU teams already using AI.",
    304,
    90,
    PANEL_FONT,
    COLORS["paper"],
    1048,
    246,
    6,
)

badges = ["Policy template", "Systems register", "Review SOP", "Incident log", "Vendor checklist"]
for idx, badge in enumerate(badges):
    col = idx % 2
    row = idx // 2
    x = 1020 + col * 235
    y = 620 + row * 56
    rounded_box(draw, (x, y, x + 198, y + 38), 19, (255, 249, 241, 184), (23, 21, 19, 26), 1)
    draw.ellipse((x + 14, y + 15, x + 22, y + 23), fill=COLORS["signal"])
    draw.text((x + 32, y + 10), badge, font=LABEL_FONT, fill=COLORS["ink"])

rounded_box(draw, (1020, 484, 1380, 576), 28, (255, 249, 241, 176), (23, 21, 19, 20), 1)
draw.text((1048, 508), "TONE", font=LABEL_FONT, fill=COLORS["signal_deep"])
fit_text(
    draw,
    "Premium, practical, and explicit about what the toolkit does not claim.",
    300,
    50,
    META_FONT,
    COLORS["ink_soft"],
    1048,
    536,
    8,
)

draw.text((112, 854), "Verto Studios • EU AI Act toolkit preview asset • 1600 × 900", font=FOOTER_FONT, fill=(23, 21, 19, 124))

output_path = RENDERS / "eu-ai-act-toolkit-preview.png"
base.convert("RGB").save(output_path, quality=95)

result_path = RENDERS / "render-result.json"
if result_path.exists():
    payload = json.loads(result_path.read_text())
else:
    payload = {}
payload["png"] = str(output_path)
result_path.write_text(json.dumps(payload, indent=2) + "\n")

print(output_path)
