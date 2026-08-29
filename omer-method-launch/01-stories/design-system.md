# Design System — OMER METHOD Stories

Derived from `omermethod.com` so the story sequence and the landing page read as
one brand. A viewer who taps through should feel they arrived somewhere they
already recognise.

## Canvas

| | |
|---|---|
| Size | **1080 × 1920** (9:16) |
| Export | PNG, sRGB |
| Safe area | `y: 260 → 1620`. Instagram covers the top ~250px (profile header) and the bottom ~250px (reply bar + link sticker). **No type outside this band.** |
| Side margins | 90px each side |

## Palette

| Role | Hex | Use |
|---|---|---|
| Ground | `#070B14` | Base background |
| Ground lift | `#0E1320` | Gradient top / card fills |
| Primary text | `#FFFFFF` | Hebrew headlines |
| Secondary text | `#8B93A7` | English lines, captions |
| **Accent** | `#22D3EE` | Numbers, key words, CTA, monogram |
| Accent deep | `#0EA5C4` | Gradient pairing for accent |

**One accent only.** The screenshots bring their own colour — the frame must not
compete with them.

## Typography

Single family across both scripts so the frames read as one system.

**Family:** `Rubik` (full Hebrew + Latin coverage, real 900 weight)
Fallback stack: `Rubik, Heebo, "Noto Sans Hebrew", Arial, sans-serif`

### Hierarchy

| Level | Script | Size | Weight | Notes |
|---|---|---|---|---|
| Headline | Hebrew | 96–112px | 900 | `line-height: 1.15`, `dir="rtl"` |
| Headline | English | 46–54px | 700 | UPPERCASE, `letter-spacing: 0.04em`, colour `#8B93A7` |
| Body | Hebrew | 60–68px | 500 | |
| Body | English | 34–40px | 500 | UPPERCASE, `letter-spacing: 0.03em` |
| Stat chip | Both | 38px | 800 | Accent colour, pill background `rgba(34,211,238,0.12)` |
| Corner label | Both | 26px | 600 | `letter-spacing: 0.18em`, 45% opacity |

### Bilingual layout rule

**Hebrew on top, larger. English below, smaller, dimmer.**

Not two equal blocks — that reads as a translated document and halves the impact
of both. The Hebrew carries the emotion; the English carries the meaning for the
global audience. A ~2:1 size ratio and a colour step make the hierarchy obvious
at a glance.

```
┌──────────────────────────────┐
│                              │
│   HEBREW HEADLINE            │  ← 100px / 900 / white / RTL
│   HEBREW HEADLINE            │
│                              │  ← 40px gap
│   ENGLISH HEADLINE           │  ← 50px / 700 / #8B93A7 / LTR / UPPER
│                              │
└──────────────────────────────┘
```

Separator between the blocks when a frame is dense: a 3px × 120px accent rule at
40% opacity, aligned right (Hebrew side).

### Direction

- Hebrew blocks: `direction: rtl; text-align: right`
- English blocks: `direction: ltr; text-align: right` — **kept right-aligned** so
  both blocks share one edge. Left-aligning the English breaks the axis.
- Any block mixing scripts or containing numbers: wrap the Latin/numeric run in
  `<span dir="ltr">` to stop bidi reordering (`2M`, `92.8K`, `$49`, `omermethod.com`).

## Legibility over screenshots

Screenshots are busy. Every frame with an image gets:

1. Dark overlay `rgba(7,11,20,0.55)` across the whole image, **plus**
2. A bottom-up gradient `rgba(7,11,20,0.95) → transparent` over the lower 45%
   where type sits
3. Text shadow `0 4px 24px rgba(0,0,0,0.6)` as a final safety net

Never set type directly on an untreated screenshot. It will fail on a phone in
daylight, which is where it will actually be read.

## Motion (optional, if exporting video frames)

Keep it minimal — a slow 4% scale push on the image, type static. Moving type in
stories costs readability and readability is the entire job here.
