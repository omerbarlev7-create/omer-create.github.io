# Asset Manifest

Every image the story sequence needs, its status, and the frame it feeds.
Drop files into `02-assets/screenshots/` using the exact filenames below.

## ✅ Captured

| ID | Filename | Content | Feeds |
|---|---|---|---|
| `A1` | `monica-profile.png` | monica.andrew1 — 286 posts, **92.8K followers**, verified | Frame 3 stat chip |
| `A3` | `monica-reels-grid.png` | Reels grid — **2M / 1.6M / 1.3M** view counts | **Frame 1 (hook)** |
| `A-hero` | `monica-stage.png` | Monica singing, white dress, stage lighting | Frame 3 |
| `B1` | `oii-episode-strip.png` | Only in Israel — Ep 6–9 + Kapara Edition thumbnails | Frame 4 |
| `B2` | `omer-grid.png` | omer_creatorai grid — OII + BRIEF 24 + MAKE ME CARE | Frame 4 |
| `O1` | `omer-profile.png` | omer_creatorai — 51 posts, 17.9K followers, bio | Reference |
| `P1` | `proof-three-worlds.png` | Site's THE PROOF strip — Monica, Only in Israel, BRIEF 24 in one band | **Frame 4 — composited** |
| `E3` | `method-landing.png` | omermethod.com hero — headline, pricing, CTA | Frame 10 / carousel |
| `D2a` | `comments-monica-emotion.png` | HE/EN/FR/PT comments, incl. **889-like** comment, "934 comments from Facebook" | **Frame 5** |
| `D3` | `comments-ring-column.png` | The "Ring" keyword column | **Frame 6** |
| `D1` | `comments-wow.png` | "גאונות!" / "זה מעלף גאוני" / "סרט מושלם" / 🔥🔥🔥 | Frame 5 |

| `E2` | `method-guide-cards.png` | Guide 01 + 02 cards with chapter bullets and $19 pricing | **Frame 9** |

## ❌ Still needed

| ID | Filename | What | Feeds | Why it matters |
|---|---|---|---|---|
| `F2` | `omer-portrait.png` | One still portrait — no video, no recording | **Frame 8** | Replaces the dropped selfie. Without it the sequence sells a personal method with no person in it. The existing profile photo works if nothing better exists. |

## Capture spec

- Shoot from the phone, full screen — not desktop screenshots
- Clean status bar: no notifications, full battery, airplane mode
- **Dark mode throughout** — matches the frame palette, no mixing
- PNG, not JPG — keeps small text from crumbling
- Don't crop on the phone. Send full, cropping happens here.

## Note on file transfer

Images pasted into the chat reach the assistant as visual input only — they are
not written to disk and cannot be composited into an export. To get finished
PNGs, the source files need to land in `02-assets/screenshots/` by one of:

1. Committing them from a local machine, or
2. A shareable link (Drive / Dropbox) that can be fetched into the repo

Otherwise the deliverable is transparent frame overlays with exact placement
marks, composited by hand in Canva or Photoshop.

## Uploading: name files before you upload them

GitHub's web uploader names a **pasted** image `image.png` every time, so each
paste silently overwrites the previous one — three uploads landed as one file.
Earlier versions are still in git history (`git show <commit>:<path>`), which is
how `proof-three-worlds.png` was recovered.

Save each screenshot to disk with its manifest name first, then upload the
files. Don't paste from the clipboard.
