# Story Sequence — publishing notes

Nine frames, `story-01.png` → `story-09.png`, **1080×1920**.
Destination: `omermethod.com`. Doubles as a permanent Highlight.

> The rendered PNGs are the deliverable and `frames.html` is the source of
> truth for their wording. `story-sequence.md` records the original strategy
> and structure, not the final copy.

## Order and timing

Post all nine **in one session, in order**. Highlights sort chronologically, so
a frame posted later lands out of sequence and the argument breaks.

| Frame | Job |
|---|---|
| 01 | The question people actually ask |
| 02 | Three years in — AI handed everyone a studio |
| 03 | Monica · the song that became real |
| 04 | Three worlds, one method |
| 05 | One keyword, and they moved |
| 06 | **The payload** — hardly any of it was about the AI, and what the method is |
| 07 | Where the work actually is — it's where you fit inside it |
| 08 | The five guides |
| 09 | Honest close + the link |

## Link stickers

- **Live run:** frames 08 and 09.
- **In the Highlight:** add one to frame 01 as well. Some viewers open a
  highlight, watch one frame and leave.

## The Highlight

| | |
|---|---|
| Name | `OMER METHOD` |
| Cover | Dark ground, `OM` in cyan. No photo — it has to read differently from the others at thumbnail size. |
| Build | Post the nine, then add them to a new highlight in one pass. |

## Optional interaction

A poll or emoji slider on **frame 05** — *"also assumed it was the AI?"* —
lifts engagement mid-sequence without interrupting the argument. Nothing on
frame 06; that frame wants to be read, not tapped.

## Frame 06 is the screenshot

It is the one frame carrying a sentence worth saving:

> **The questions you ask before you ever write a prompt — and the order you ask them in.**
> השאלות שלפני הפרומפט — ובאיזה סדר.

It is also the only inverted frame — light ground after six dark ones — so it
is the rhythm break as well as the payload. Do not reorder around it.

## Re-rendering

```bash
node 01-stories/render.mjs   # writes png/story-01..09.png
node 01-stories/lines.mjs    # unintended line wraps, canvas overflow
node 01-stories/band.mjs     # content past .pad, type outside y330–1620
```

Edit `frames.html`, never the PNGs. A fix made in Canva does not come back to
the source, and the next render silently reverts it.
