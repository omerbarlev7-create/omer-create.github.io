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
| Lead | English | 74–88px | 800 | `line-height: 1.1`, `letter-spacing: -0.028em` |
| Sub | English | 41px | 400 | colour `#B9C0CE`, max-width 900px |
| Support | Hebrew | 37px | 500 | colour `#7E8798`, `dir="rtl"` |
| Method box | English | 56px | 800 | left accent bar, no fill |
| Stat chip | English | 28px | 600 | accent pill, `rgba(34,211,238,0.10)` |
| Corner label | English | 24px | 500 | `letter-spacing: 0.16em`, 38% opacity |

### Bilingual layout rule

**English leads. Hebrew supports.**

The audience spans four languages — the comment thread alone carries Hebrew,
English, French and Portuguese — so English is the line that has to land, and it
gets the size, the weight and the paper-white. Hebrew sits below at roughly 40%
of the lead size in muted grey: present for the Israeli audience, never
competing for the same eye.

```
┌──────────────────────────────┐
│                              │
│  English lead                │  ← 88px / 800 / #F2F4F8
│  English lead                │
│                              │
│  English sub, one or two     │  ← 41px / 400 / #B9C0CE
│  sentences of real voice.    │
│  ────                        │
│  שורת עברית תומכת            │  ← 37px / 500 / #7E8798
│                              │
└──────────────────────────────┘
```

### Direction

- One **left** axis for the whole frame. Every block — English and Hebrew alike —
  starts at x=96. Verified by measurement, not by eye.
- Hebrew blocks: `direction: rtl; text-align: left`. The `dir` keeps the glyph
  order correct; `text-align: left` keeps the block on the shared axis.
- Any Latin or numeric run inside a Hebrew line: wrap in `<span dir="ltr">` to
  stop bidi reordering (`2M`, `92.8K`, `$49`, `omermethod.com`).

### Sentence case, never caps

Uppercase reads as advertising. Sentence case reads as a person talking. Since
the whole sequence is a first-person story, nothing is set in caps except the
small corner label and the chips.

## Voice

The copy is written the way Omer would say it out loud, not the way a campaign
would phrase it:

- **First person, and willing to admit things.** "It took me a while to admit
  it's the wrong one" beats "Wrong question."
- **No slogans.** A line that would work on a billboard for any brand is the
  wrong line here.
- **Contractions, and one aside per frame.** "That part is easy now, and honestly
  it's the least interesting thing about any of this."
- **Specifics over adjectives.** "889 likes on one comment" instead of
  "incredible engagement."

Ten frames of confident declaratives feel machine-made no matter how good the
type is. The hesitations are what make it read as a person.

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
