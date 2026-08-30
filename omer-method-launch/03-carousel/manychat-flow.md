# ManyChat flow — keyword `HOW`

Triggered by a comment on the pinned carousel. Bilingual throughout: the
comments will come in both languages and ManyChat cannot reliably tell which,
so every message carries English first, then Hebrew.

## Trigger

**Comment on post → contains keyword**, matching (case-insensitive):

```
HOW · how · How? · HOW! · איך · HOW פליז
```

Set matching to **contains**, not exact — people add punctuation and emoji.

## 1 · Public reply to the comment

ManyChat posts this in the thread. Rotate 4 variants so it does not read as a
bot, and so the comment section does not fill with one repeated line.

```
Sent it to you 📩
```
```
Just sent it — check your DMs 📩
```
```
It's in your inbox 📩
```
```
שלחתי לך ב-DM 📩
```

## 2 · First DM

**Do not put the link here.** Instagram throttles automated DMs that open with a
link, and a first message with no interaction lands worse. Ask for one tap.

```
You asked how.

Here's the honest answer: it isn't the prompt. It's the questions you ask before
you write one, and the order you ask them in. That's the whole method — the part
that gets you a sharper result instead of a nice-looking guess.

I spent months putting it into five guides. Want the link?

—

שאלת איך.

התשובה הכנה: זה לא הפרומפט. אלה השאלות שאתה שואל לפני שאתה כותב אותו, ובאיזה
סדר. זו כל השיטה — החלק שמביא לתוצאה חדה במקום ניחוש שנראה טוב.

חודשים לקח לי להכניס את זה לחמישה מדריכים. רוצה את הקישור?
```

**Button:** `Yes, send it · כן, שלח לי`

## 3 · Second DM — the link

Fires on the button tap.

```
Here you go 👇

omermethod.com

Five guides. Start with 01 — it's the one that sets up the way of thinking, and
the rest build on it.

One thing worth saying: this isn't a shortcut. It's a muscle. The guides give you
the questions and the order, but the real work is figuring out where you fit
inside it. That part is yours.

If something in there doesn't land, write to me here. I read everything.

—

הנה 👇

omermethod.com

חמישה מדריכים. תתחיל מ-01 — הוא זה שמניח את דרך החשיבה, וכל השאר נבנים עליו.

משהו שחשוב לי להגיד: זה לא קיצור דרך. זה שריר. המדריכים נותנים לך את השאלות
ואת הסדר, אבל העבודה האמיתית היא להבין איפה אתה נכנס בתוך זה. החלק הזה שלך.

אם משהו שם לא מתחבר לך — תכתוב לי כאן. אני קורא הכל.
```

## 4 · Follow-up, 24 hours later

Send only to people who **did not** tap the link. Once. No second follow-up.

```
No pressure — just making sure this didn't get buried:

omermethod.com

—

בלי לחץ, רק לוודא שזה לא נקבר לך בהודעות:

omermethod.com
```

## Settings that matter

| | |
|---|---|
| **Send once per person** | On. Someone who comments twice should not get the flow twice. |
| **Existing subscribers** | Let them through — an old subscriber commenting HOW still wants the link. |
| **Quiet hours** | Off. The DM should land while they are still in the app, next to the comment they just left. |
| **Fallback** | If the button is never tapped, the 24h follow-up covers it. Do not auto-send the link without the tap. |

## Why the extra tap

A first DM carrying a bare link is the pattern Instagram's spam heuristics are
tuned for, and the ones that get delivered still convert badly — nothing has
been asked of the reader yet.

The button costs one tap and buys three things: it opens the 24-hour messaging
window, it marks the conversation as a real interaction, and it means the link
arrives to someone who just said yes to it.

## Before you switch it on

Comment `HOW` on the post from a second account and walk the whole flow. The
failure mode is a keyword that triggers nothing, and you only find it by
standing where the reader stands.
