import json
from pathlib import Path
from PIL import Image, ImageColor, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
RENDERS = ROOT / "renders"
RENDERS.mkdir(parents=True, exist_ok=True)

WIDTH = 1600
HEIGHT = 900

COLORS = {
    "bg_top": "#f8f1e6",
    "bg": "#efe6d6",
    "bg_deep": "#d7c4aa",
    "paper": "#fff9f1",
    "paper_soft": "#f6eee3",
    "ink": "#171513",
    "ink_soft": "#4a443c",
    "signal": "#c45d2f",
    "signal_deep": "#8f3f1f",
    "moss": "#31473f",
    "gold": "#b9923f",
    "gold_soft": "#ead8ab",
    "panel": "#1d1c1b",
    "panel_soft": "#2a2723",
}

GEORGIA_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"
VERDANA = "/System/Library/Fonts/Supplemental/Verdana.ttf"
VERDANA_BOLD = "/System/Library/Fonts/Supplemental/Verdana Bold.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


TITLE_FONT = font(GEORGIA_BOLD, 78)
SUBTITLE_FONT = font(VERDANA, 28)
EYEBROW_FONT = font(VERDANA_BOLD, 14)
META_LABEL = font(VERDANA_BOLD, 14)
SUMMARY_FONT = font(VERDANA, 21)
COVER_KICKER = font(VERDANA_BOLD, 18)
COVER_TITLE = font(GEORGIA_BOLD, 64)
COVER_COPY = font(VERDANA, 23)
COVER_FOOTER = font(VERDANA_BOLD, 18)
COVER_CHIP = font(VERDANA_BOLD, 16)
DOC_CHIP = font(VERDANA_BOLD, 13)
DOC_TITLE = font(GEORGIA_BOLD, 30)
DOC_COPY = font(VERDANA, 15)
DOC_MICRO = font(VERDANA_BOLD, 12)
DOC_DATA = font(VERDANA_BOLD, 15)
PANEL_LABEL = font(VERDANA_BOLD, 14)
PANEL_COPY = font(GEORGIA_BOLD, 29)
BADGE_FONT = font(VERDANA_BOLD, 15)
FOOTER_FONT = font(VERDANA, 14)


def rounded_box(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def add_shadow(base, box, radius=28, alpha=36, blur=24, offset=(0, 18)):
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    x1, y1, x2, y2 = box
    ox, oy = offset
    shadow_draw.rounded_rectangle((x1 + ox, y1 + oy, x2 + ox, y2 + oy), radius=radius, fill=(36, 24, 12, alpha))
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(shadow)


def draw_gradient_background():
    image = Image.new("RGBA", (WIDTH, HEIGHT))
    px = image.load()
    top = ImageColor.getrgb(COLORS["bg_top"])
    mid = ImageColor.getrgb(COLORS["bg"])
    bottom = ImageColor.getrgb(COLORS["bg_deep"])
    for y in range(HEIGHT):
      t = y / (HEIGHT - 1)
      if t < 0.52:
        u = t / 0.52
        row = tuple(int(top[i] * (1 - u) + mid[i] * u) for i in range(3))
      else:
        u = (t - 0.52) / 0.48
        row = tuple(int(mid[i] * (1 - u) + bottom[i] * u) for i in range(3))
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


def wrap_lines(draw, text, font_obj, max_width):
    words = text.split()
    lines = []
    current = []
    for word in words:
        trial = " ".join(current + [word])
        if draw.textlength(trial, font=font_obj) <= max_width or not current:
            current.append(word)
        else:
            lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


def draw_wrapped(draw, text, font_obj, fill, box, line_gap=8):
    x, y, w, h = box
    lines = wrap_lines(draw, text, font_obj, w)
    cursor = y
    for line in lines:
        bbox = draw.textbbox((x, cursor), line, font=font_obj)
        if bbox[3] > y + h:
            break
        draw.text((x, cursor), line, font=font_obj, fill=fill)
        cursor = bbox[3] + line_gap


def draw_summary_card(base, xy, title, copy):
    x, y = xy
    draw = ImageDraw.Draw(base)
    rounded_box(draw, (x, y, x + 392, y + 120), 26, (255, 249, 241, 184), (23, 21, 19, 20), 1)
    draw.text((x + 24, y + 18), title.upper(), font=META_LABEL, fill=COLORS["signal_deep"])
    draw_wrapped(draw, copy, SUMMARY_FONT, COLORS["ink_soft"], (x + 24, y + 46, 340, 58), 6)


def draw_cover(base):
    add_shadow(base, (736, 150, 1164, 698), radius=32, alpha=42, blur=28, offset=(0, 24))
    cover = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(cover)

    for y in range(150, 698):
        t = (y - 150) / 548
        r1, g1, b1 = ImageColor.getrgb(COLORS["panel_soft"])
        r2, g2, b2 = ImageColor.getrgb(COLORS["panel"])
        color = (int(r1 * (1 - t) + r2 * t), int(g1 * (1 - t) + g2 * t), int(b1 * (1 - t) + b2 * t), 255)
        draw.line((736, y, 1164, y), fill=color)

    rounded_box(draw, (736, 150, 1164, 698), 32, None, None, 0)
    rounded_box(draw, (820, 150, 1164, 698), 30, None, None, 0)
    draw.rectangle((736, 182, 820, 666), fill="#221f1b")
    draw.rectangle((820, 150, 1164, 698), fill=(0, 0, 0, 0))
    draw.rounded_rectangle((820, 150, 1164, 698), radius=30, outline=None, fill=(0, 0, 0, 0))
    draw.rounded_rectangle((736, 150, 1164, 698), radius=32, outline=(23, 21, 19, 34), width=1)
    draw.rounded_rectangle((852, 182, 1132, 666), radius=22, outline=COLORS["gold_soft"], width=2)
    draw.rounded_rectangle((876, 210, 1014, 244), radius=17, fill=(196, 93, 47, 36), outline=(196, 93, 47, 76), width=1)
    draw.text((896, 217), "EUR 149", font=COVER_CHIP, fill=COLORS["signal"])
    draw.text((880, 286), "AI GOVERNANCE", font=COVER_KICKER, fill=COLORS["gold_soft"])
    draw.text((880, 336), "Starter", font=COVER_TITLE, fill=COLORS["paper"])
    draw.text((880, 408), "Kit", font=COVER_TITLE, fill=COLORS["paper"])
    draw_wrapped(
        draw,
        "Policy, register, human review SOP, incident log, vendor checks, and implementation notes.",
        COVER_COPY,
        (255, 249, 241, 214),
        (880, 496, 228, 88),
        6,
    )
    draw.line((880, 570, 1108, 570), fill=(185, 146, 63, 86), width=1)
    draw_wrapped(
        draw,
        "Built for small EU teams already using AI",
        COVER_FOOTER,
        (255, 249, 241, 198),
        (880, 590, 240, 36),
        4,
    )
    base.alpha_composite(cover)


def draw_doc(base, config):
    w = config["width"]
    h = config["height"]
    layer = Image.new("RGBA", (w + 120, h + 120), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    ox = 60
    oy = 60
    draw.rounded_rectangle((ox + 8, oy + 14, ox + w + 8, oy + h + 14), radius=24, fill=(36, 24, 12, 26))
    draw.rounded_rectangle((ox, oy, ox + w, oy + h), radius=24, fill=COLORS["paper"], outline=(23, 21, 19, 30), width=1)
    accent = ImageColor.getrgb(config["accent"])
    draw.rounded_rectangle((ox + 22, oy + 22, ox + w - 22, oy + 42), radius=10, fill=accent + (40,))
    draw.rounded_rectangle((ox + 24, oy + 56, ox + w - 24, oy + (78 if config["landscape"] else 94)), radius=(11 if config["landscape"] else 18), fill=accent + (20,))
    draw.text((ox + 24, oy + 24), config["chip"], font=DOC_CHIP, fill=config["accent"])
    draw.text((ox + 24, oy + 92), config["title"], font=DOC_TITLE, fill=COLORS["ink"])
    start_y = oy + (118 if config["landscape"] else 108)
    step = 30 if config["landscape"] else 34
    for idx, line in enumerate(config["lines"]):
        yy = start_y + idx * step
        draw.rounded_rectangle((ox + 24, yy, ox + (240 if config["landscape"] else 204), yy + 10), radius=5, fill=(23, 21, 19, 20))
        draw.text((ox + 24, yy + 14), line, font=DOC_COPY, fill=COLORS["ink_soft"])
    if config["landscape"]:
        draw.line((ox + 24, oy + 160, ox + w - 24, oy + 160), fill=(23, 21, 19, 24), width=1)
        draw.text((ox + 24, oy + 172), "PREVIEW", font=DOC_MICRO, fill=COLORS["signal_deep"])
        draw.text((ox + w - 146, oy + 172), "READY TO ADAPT", font=DOC_MICRO, fill=COLORS["signal_deep"])
    else:
        draw.line((ox + 24, oy + 226, ox + w - 24, oy + 226), fill=(23, 21, 19, 24), width=1)
        draw.text((ox + 24, oy + 238), "SCOPE", font=DOC_MICRO, fill=COLORS["signal_deep"])
        draw.text((ox + w - 88, oy + 238), "OWNER", font=DOC_MICRO, fill=COLORS["signal_deep"])
        draw.rounded_rectangle((ox + 24, oy + 268, ox + 116, oy + 310), radius=13, fill=(255, 249, 241, 228), outline=(23, 21, 19, 20), width=1)
        draw.rounded_rectangle((ox + w - 112, oy + 268, ox + w - 24, oy + 310), radius=13, fill=(255, 249, 241, 228), outline=(23, 21, 19, 20), width=1)
        draw.text((ox + 38, oy + 282), "Ordinary", font=DOC_DATA, fill=COLORS["ink"])
        draw.text((ox + w - 98, oy + 282), "Ops", font=DOC_DATA, fill=COLORS["ink"])

    rotated = layer.rotate(config["rotate"], resample=Image.Resampling.BICUBIC, expand=True)
    base.alpha_composite(rotated, dest=(config["x"], config["y"]))


base = draw_gradient_background()
add_glow(base, (1310, 150), 220, COLORS["signal"], 42)
add_glow(base, (240, 110), 180, "#ffffff", 128)

draw = ImageDraw.Draw(base)
rounded_box(draw, (66, 62, 1534, 838), 42, (255, 250, 244, 108), (255, 255, 255, 132), 2)
rounded_box(draw, (90, 86, 1510, 814), 34, (255, 252, 246, 92), (23, 21, 19, 18), 1)

rounded_box(draw, (136, 136, 394, 174), 19, (255, 249, 241, 214), (196, 93, 47, 52), 1)
draw.ellipse((149, 150, 159, 160), fill=COLORS["signal"])
draw.text((170, 147), "DOWNLOADABLE GOVERNANCE PACK", font=EYEBROW_FONT, fill=COLORS["signal"])

title_x = 136
title_y = 214
for idx, line in enumerate(["EU AI Act", "AI Governance", "Starter Kit"]):
    draw.text((title_x, title_y + idx * 86), line, font=TITLE_FONT, fill=COLORS["ink"])

draw_wrapped(
    draw,
    "Practical policy and register templates for EU teams already using AI in everyday operations.",
    SUBTITLE_FONT,
    COLORS["ink_soft"],
    (136, 504, 400, 120),
    10,
)

draw_summary_card(base, (136, 558), "Core pack", "5 governance templates plus a short implementation guide for week-one rollout.")
draw_summary_card(base, (136, 698), "Preview before buying", "The landing page shows the sample register and the product pack at full size.")

draw.ellipse((690, 720, 1370, 828), fill=(36, 24, 12, 30))
draw_cover(base)

docs = [
    {
        "x": 1002,
        "y": 128,
        "width": 250,
        "height": 336,
        "rotate": 8,
        "accent": COLORS["moss"],
        "chip": "ai-systems-register.md",
        "title": "Sample register",
        "lines": ["Named owner", "Purpose + data categories", "Review date + controls"],
        "landscape": False,
    },
    {
        "x": 1082,
        "y": 194,
        "width": 246,
        "height": 330,
        "rotate": 3,
        "accent": COLORS["signal"],
        "chip": "ai-usage-policy.md",
        "title": "Usage policy",
        "lines": ["Allowed use cases", "Confidentiality rules", "Escalation triggers"],
        "landscape": False,
    },
    {
        "x": 912,
        "y": 520,
        "width": 408,
        "height": 220,
        "rotate": -4,
        "accent": COLORS["gold"],
        "chip": "human-review-sop.md",
        "title": "Review SOP",
        "lines": ["Human sign-off path", "Sensitive output checks", "Incident follow-up"],
        "landscape": True,
    },
]

for doc in docs:
    draw_doc(base, doc)

draw = ImageDraw.Draw(base)
add_shadow(base, (1240, 110, 1482, 452), radius=30, alpha=32, blur=18, offset=(0, 14))
rounded_box(draw, (1240, 110, 1482, 452), 30, (29, 28, 27, 240))
draw.text((1266, 130), "WHAT BUYERS RECEIVE", font=PANEL_LABEL, fill="#f0d9c9")
draw_wrapped(
    draw,
    "A clean starter pack with policy, systems register, human review SOP, incident log, vendor checklist, and a short implementation guide.",
    PANEL_COPY,
    COLORS["paper"],
    (1266, 170, 190, 220),
    4,
)

badges = ["Policy template", "Systems register", "Review SOP", "Incident log", "Vendor checklist"]
for idx, badge in enumerate(badges):
    y = 154 + idx * 62
    rounded_box(draw, (1240, y, 1482, y + 46), 23, (255, 249, 241, 194), (23, 21, 19, 24), 1)
    draw.ellipse((1254, y + 18, 1264, y + 28), fill=COLORS["signal"])
    draw.text((1274, y + 14), badge, font=BADGE_FONT, fill=COLORS["ink"])

rounded_box(draw, (1240, 522, 1482, 640), 26, (255, 249, 241, 194), (23, 21, 19, 18), 1)
draw.text((1264, 542), "EDITABLE", font=META_LABEL, fill=COLORS["signal_deep"])
draw_wrapped(
    draw,
    "Structured to adapt in Docs, Word, Notion, Excel, or Sheets.",
    SUMMARY_FONT,
    COLORS["ink_soft"],
    (1264, 570, 186, 50),
    6,
)

draw.text((112, 856), "Verto Studios • product preview asset • 1600 × 900", font=FOOTER_FONT, fill=(23, 21, 19, 122))

png_path = RENDERS / "eu-ai-act-toolkit-preview.png"
base.save(png_path)

result = {
    "png": str(png_path),
}

(RENDERS / "render-result.json").write_text(f"{json.dumps(result, indent=2)}\n", encoding="utf-8")
print(json.dumps(result, indent=2))
