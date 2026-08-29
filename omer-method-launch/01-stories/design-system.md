# Design System — OMER METHOD Stories

**Signal & Grain** — the visual philosophy behind the ten frames.

A dark field, one cyan signal, human faces surfacing through grain, and evidence
laid out like a specimen sheet. The sequence is about a person discovering that
the machinery was never the point, so the design never celebrates the machinery:
no gradients-for-their-own-sake, no chrome. Light comes from real sources — a
stadium, a stage beam, a glow behind a number that people actually earned.

The material logic is simple. Photography is treated as evidence and given the
full width of the frame. Type is treated as testimony and given a strict
hierarchy so a reader knows, in a quarter second, where to start. Every frame
carries the same typographic grammar and a different composition, so tapping
through feels like turning pages in one book rather than reloading one slide.

## Canvas

| | |
|---|---|
| Size | **1080 × 1920** (9:16), PNG, sRGB |
| Type safe band | `y: 330 → 1620`. Instagram covers the top ~250px and bottom ~250px. **No critical type outside this band** — verified by measurement, not by eye. |
| Imagery | May bleed anywhere, including off the top and bottom edges. Only type is bound by the safe band. |
| Side margins | 88px |

## Palette

| Role | Hex | Use |
|---|---|---|
| Ground | `#070A11` | Base field |
| Ink | `#080B12` | Type on the inverted frame; the payload card |
| Paper | `#F2F4F8` | Primary type; the ground of frame 07 |
| Deck | `#A9B2C4` | Body copy |
| Muted | `#6E7889` | Labels, captions, timestamps |
| **Cyan** | `#22D3EE` | The signal: one idea per frame gets it, nothing else |
| Cyan deep | `#0B93B0` | The same signal on the paper frame |
| Violet | `#A78BFA` | Secondary, used **twice only** — the stage beam on 02, the portrait grade on 08 |

**The palette breathes across the sequence** rather than sitting flat: frame 02
runs violet, 06 runs teal, 07 inverts to paper, 10 blooms cyan from the foot.
That drift is what stops ten dark frames reading as one dark frame.

## Typography

**Family:** `Rubik` (400/500/700/800/900, full Hebrew + Latin).
Fallback: `Rubik, Heebo, "Noto Sans Hebrew", Arial, sans-serif`

### The grammar — every frame reads in this order

```
OVERLINE ─────────────  23px / 600 / .3em / cyan      ← entry point, always first
Lead                    72–122px / 800 / −.032em      ← genuinely dominant
Deck copy, two to        32–36px / 400 / 1.5 / #A9B2C4 ← genuinely secondary
five real sentences.
│ כותרת עברית            43–50px / 500-600 / cyan rail ← a sibling voice
DATA · 889 · $49        19–212px                       ← the evidence layer
```

| Level | Size | Weight | Notes |
|---|---|---|---|
| Lead `xl` | 122px | 800 | Frame 01 only |
| Lead | 104px | 800 | Frames 02, 04, 07 |
| Lead `md` / `sm` | 86 / 72px | 800 | Dense frames |
| Deck | 32–36px | 400 | `line-height: 1.5`, max-width 830 |
| Pull quote | 46–56px | 500 | Left cyan bar, 36px indent — a second voice inside a frame |
| Hebrew line | 43–50px | 500–600 | Cyan rail, 32px indent |
| Overline | 23px | 600 | `.3em` tracking, trailing hairline that fades out |
| Caption / meta | 19–25px | 500–700 | `.14–.26em` tracking |
| Monument numeral | 92–212px | 800–900 | Frames 01 and 05 |

**Scale contrast is the point.** Frame 05 sets `889` at 212px against a 22px
label. Frame 01 sets a 122px question against a 21px `VIEWS`. Nothing in the
sequence sits in the mushy middle.

### Dense is allowed. Monotonous is not.

Image stories have no time limit — a viewer holds the frame as long as they want
to read. So the copy keeps its substance; what carries it is organisation:

- one **entry point** per frame (the overline), never two competing starts
- **grouping** — the Hebrew rail binds to the English above it; captions bind to
  their tile; data binds to its hairline
- **indents and rules** do the separating so blank lines don't have to
- a **pull quote** or a **boxed payload** whenever a frame has a second idea that
  must not be read as part of the first

### Bilingual rule

English leads, Hebrew supports at matching visual weight. The comment evidence
carries four languages, so English is the line that has to land — but Hebrew is
never a caption. It gets paper-white, 500–600 weight, and its own cyan rail.

- Hebrew blocks: `direction: rtl`. Default `text-align: left` keeps them on the
  shared left axis with a **left** rail.
- Frame 02 flips to `text-align: right` with a **right** rail — a deliberate
  counter-axis on the one frame with room for it.
- Any Latin or numeric run inside Hebrew is wrapped in `<bdi>` or
  `<span dir="ltr">` (`AI`, `$49`, `omermethod.com`). Bidi has scrambled this
  once already.

### Sentence case, never caps

Except the overline, chips, captions and the ticker. Uppercase reads as
advertising; this is a person talking.

## Composition — ten frames, ten layouts

No two adjacent frames share an archetype.

| # | Archetype | What carries it |
|---|---|---|
| 01 | Colossal type on a photographic bloom, data band at the foot | 122px question, ghost quote glyph, a darkened still under the view counts |
| 02 | Type only, lit | Violet stage beam from above, pull quote, a 2023→2026 timeline at the foot |
| 03 | Full-bleed photograph off the top edge | 1080×617 Monica still, type block below, stat row at the foot |
| 04 | Full-bleed triptych | Three 356×600 portraits edge to edge, captions inside the tiles, ghost `3` |
| 05 | Monument + evidence collage | `889` at 212px, one white comment card among dark ones, fanned and rotated |
| 06 | Dense repetition column | Eleven rows of one word, masked to fade at both ends, ghost vertical marquee |
| 07 | **Inverted** — paper ground, ink type | The one colour break; the payload sits in a dark card inside the light frame |
| 08 | Split | Portrait circle right, argument left, a two-column easy/hard contrast, then the line |
| 09 | Contents page | Ghost-outlined numerals 01–05, chapter names, descriptors, callout at the foot |
| 10 | Brand close | 146px stacked wordmark with a cyan bloom, price row, URL |

### The one constant

A **ten-segment chapter ticker** at `y 258` (at `y 648` on frame 03, which bleeds
an image off the top). It reads `Omer Method · 0N` and marks position in the
sequence. It is the only element that never moves, which is what licenses
everything else to.

## Photography

There is exactly one photographic asset with faces in it
(`proof-three-worlds.png`, 1370×748) plus a profile still. Everything is cropped
from it in CSS — `overflow: hidden` on a sized box with an oversized absolutely
positioned `<img>`.

**Resolution budget.** Each card photo in the source is ~398×228. Upscaling past
~3.2× shows. So:

- Sharp use tops out around **1080×617** (2.71×) for a full-width band.
- Tight portraits run at **2.7–3.1×** (frame 04's tiles, frame 03's band).
- The profile face runs at **3.6×** — soft, so it is graded, grained and ringed
  so the softness reads as treatment.
- Anything bigger is **blurred on purpose**: frames 01 and 08 use a massively
  scaled, `blur(26–78px)` copy as an atmospheric ground. Blur hides upscaling
  completely and gives a real colour field the palette could not fake.

**Grade.** `contrast(1.08–1.2) saturate(.9–1.12)`, a soft-light cyan/violet tone
layer, and a global `feTurbulence` grain at 13% overlay across every frame. The
grain is what makes ten CSS frames read as one printed object.

**Legibility over photographs.** Never set type on an untreated still. Every
photo element carries a directional scrim (`.fade`, `.scrim`, `.wash`) that
lands under whatever type crosses it.

## Voice

Unchanged, and load-bearing:

- **First person, willing to admit things.** "It took me a long time to admit
  it is the wrong question."
- **No slogans.** A line that would work for any brand is the wrong line.
- **Specifics over adjectives.** "889 likes on one comment," not "huge
  engagement."
- One aside per frame. The hesitations are what make it read as a person.

## Verify before shipping

Three checks, all against the rendered DOM:

1. `node 01-stories/lines.mjs` — every `.he-line` renders on exactly as many
   lines as it has explicit `<br>`s, and no frame has `scrollHeight > 1920`.
   A single added Hebrew word is enough to break a frame silently.
2. A safe-band measurement — the bounding box of every block inside `.pad` must
   sit within `330 → 1620`.
3. **Open all ten PNGs and look at them.** The checks above catch overflow. They
   do not catch a stray badge in a crop, a headline that wrapped into an orphan,
   a caption row that fell out of alignment, or a frame that is simply dead.
   Every one of those happened on the first pass here and only the eye caught them.
