# OMER METHOD — Launch Content

Content assets for the OMER METHOD launch on `@omer_creatorai`.
Destination: **omermethod.com** · 5 guides · $19 each / $49 for all five.

## Contents

```
01-stories/     story-sequence.md    10 bilingual story frames, ready to design
                design-system.md     type, palette, safe zones, RTL rules
02-assets/      asset-manifest.md    every screenshot needed + status
                comments-inventory.md  transcribed comment evidence
                screenshots/         source files go here
03-carousel/    (next)               pinned carousel post
```

## The core idea

The sequence does not announce a product. It answers a question:

> For 3 years people asked *"how did you make this?"* — the wrong question.
> Nobody reacted to the AI. They reacted to the story.

That insight is the product, so the sale lands as a conclusion rather than a pitch.

## Proof stack

| Asset | Number |
|---|---|
| Monica Andrew | 92.8K followers · 2M / 1.6M / 1.3M view reels |
| omer_creatorai | 17.9K followers |
| Series | Only in Israel (16 episodes) · BRIEF 24 · Make Me Care |
| Single comment | **889 likes** |
| Comment languages | Hebrew · English · French · Portuguese |
| Cross-platform | 934 comments from Facebook on one reel |

## Status

- [x] Story sequence — copy, structure, bilingual
- [x] Design system
- [x] Comment evidence transcribed
- [x] Product reference — all 5 guides + proof section
- [x] Frame 8 — text only, no portrait needed
- [x] Frame export — 10 PNGs at 1080×1920 in `01-stories/png/`
- [x] All 10 frames complete — no outstanding asset dependencies
- [ ] Pinned carousel

## Rendering the frames

Frames are authored in `01-stories/frames.html` and exported with
`01-stories/render.mjs` (Playwright + Chromium):

```bash
node 01-stories/render.mjs   # writes 01-stories/png/story-01..10.png
```

Type is Rubik (Hebrew + Latin). Edit the HTML, re-run, and the PNGs regenerate
at 1080×1920.

`node 01-stories/lines.mjs` checks the rendered DOM for unintended line wraps
and frames overflowing the 1920px canvas. Run it after any copy edit — both
failures are invisible in the source and crop silently in the PNG.

### Where the imagery comes from

No frame waits on an upload any more:

- **Frames 3 and 4** crop regions out of `proof-three-worlds.png`, the site's
  own THE PROOF section, using CSS clipping rather than an image library.
- **Frames 5 and 6** rebuild the comments from the transcript in
  `02-assets/comments-inventory.md` as styled cards. This beats a screenshot:
  legible at story size, on-palette, and no usernames to blur.
- **Frame 1** carries the view counts as a stat row instead of a grid capture.
