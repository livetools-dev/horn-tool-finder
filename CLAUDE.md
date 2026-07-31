# Horn System 117 broaching selector

A single-page selector over an extract of the Horn Stechdrehen catalogue
(System 117, p. 750–785). It answers one question four ways: which insert cuts
the width I need, and which holders will take it.

Built on the Livetools Design System. The rules live in the
`livetools-design-system` skill pinned in `.claude/skills/` in this repo.
Consult it before writing or changing any markup or CSS.

The non-negotiables: never write a raw colour, px font size or shadow, use
`--lt-*` tokens; blue acts, red is identity and danger only; every status is
icon + colour + word; controls sit on `.lt-panel`.

## Running it

`components/lt-elements.js` is a module, so the page needs a server — opened as
a `file://` URL the browser blocks the module fetch and the tabs never upgrade.

```
python -m http.server 8117      # then http://localhost:8117/index.html
```

## Before every commit

```
python conformance.py .         # must pass; currently 0 findings
python lt_dom_audit.py index.html
```

Fix the cause of a finding; never add a file to `conformance.py`'s exempt list
to make it pass. One finding here was a false positive from writing a literal
`<select>` tag inside a prose comment — the fix was to write `.lt-select`
instead, not to exempt the file.

`lt_dom_audit.py` reads RENDERED html, not source: it catches a field that
paints an error chip without marking its control `aria-invalid`, which no
per-file check can see. This app has no validation and so no error chips, which
means the audit passes trivially today. **If you add a field that can be wrong,
the chip and `aria-invalid` are one thing** — paint one without the other and
the field looks wrong to the person reading it and reports perfectly valid to
everything else.

`node` is not installed on this machine, so `components/test-elements.mjs` and
the design system's `smoke-measure.py` cannot run here. `verify-tokens.py`
needs `coloraide`, also absent. The seat contrast figures in `app-tokens.css`
were therefore computed with the WCAG 2.1 formula directly rather than by that
tool; the numbers are in the file and are reproducible from it.

## Vendored copies

`tokens/`, `components/`, `fonts/` and `icons/` are copies of the design system
taken from `../livetools-design-system` on 2026-07-31, along with
`conformance.py` and `lt_dom_audit.py`. Do not edit them here. Changes belong in
the design-system repo, and upgrading this app is a deliberate re-copy, never an
ambient change: an app that shipped against one token set must not have its
colours reflow because that repo moved on.

## THE OPEN DECISION: the seat colour palette

**This is the one place the app knowingly sits outside the system, and it needs
somebody's decision, not an edit.** The full record with the measured ratios is
the header comment in `app-tokens.css`; the short version:

The seventeen seat colours are a domain palette — a "what something is"
taxonomy, ISO 513's third job for colour — and section 3b of `lt-tokens.css`
says a domain palette is certified upstream by `verify-tokens.py`. These are not
there yet, for two reasons:

1. **The hues are not confirmed against Horn.** They descend from Material
   Design 700/800 steps chosen by whoever first drew this UI, not from Horn's
   printed colour marking. Section 3b's premise is that a domain palette's hues
   are fixed *outside* the system by a trade convention and only the digital
   values are ours. Nobody has checked whether that premise holds here. **If
   Horn does not colour-code seats at all, delete the palette** — the seat
   letter is the signal either way and `.lt-swatch` falls back to a neutral box
   on its own, so nothing breaks.
2. **It reuses red, green and amber.** Section 3b's ring fence is explicit that
   ISO 513's permission for K's red is pinned to ISO 513 "and for nothing else",
   and that a second palette wanting those hues raises its own decision with its
   own numbers. This is that second palette. The numbers are written down; the
   sign-off is Scott Moyse's to give.

What was done in the meantime, so the deviation is contained:

- The palette lives in `app-tokens.css`, the one sanctioned home outside
  `lt-tokens.css` for an app's brand literals. **No colour literal exists
  anywhere else in this app** — not in `index.html`, not in `app.css`, not in
  the JS. `.seat-<letter>` classes in `app.css` hand `--lt-swatch-fill` and
  `--lt-swatch-ink` to the component and nothing else.
- The names are `--lt-horn-seat-*`, not `--horn-seat-*`, so promoting them to
  `lt-tokens.css` is a cut and paste and so `conformance.py`'s token graph
  catches a typo in a `var()` reference today.
- Five fills were darkened to clear the 4.80 ink headroom the generator uses for
  text (F, K, L, M and O; F was at 3.79:1 and failed AA outright). All
  seventeen now clear it with white ink.
- Rule 3 holds independently of any of the above: a seat renders **only** as a
  `.lt-swatch` with its letter inside. There is no colour-only seat dot, no
  legend key and no bare swatch anywhere, and the letter also appears as text in
  the heading and the spec list. That matters more than usual at seventeen
  values — the closest pairs are 21–22 units apart in sRGB and nobody can tell
  them apart at 22px.

## Decisions worth not re-litigating

- **The four search modes are `lt-tabs`, not cards.** They were four clickable
  cards with descriptions. The descriptions moved into each panel as a
  `.lt-prose` intro, which keeps them on screen while the panel is in use
  instead of only before it is chosen.
- **The seat picker is native radios sharing one `name` across three
  fieldsets.** One radio group to the browser and to a screen reader: arrow keys
  walk all seventeen and exactly one is ever chosen. Toggle buttons would mean
  hand-rolling the roving tabindex and the ARIA.
- **A count is not a badge.** "12 of 12 inserts" is plain secondary text with
  tabular figures. A badge says how a record is going, and a count is not a
  state — a `.lt-badge` here would also owe a glyph it has no meaning for.
- **Geometry is plain words.** The A/B pills were two invented colours doing a
  job two words do: "Slotting head" and "Traditional" in the table cell.
- **Nothing floats.** The "hidden by your filters" note and the empty results
  are conditions that stay true until a control changes, so they are
  `.lt-alert--info` and `.lt-empty` in the flow. Nothing here is a toast,
  because there is no action whose receipt would be off screen.
- **One render, one announcement.** Result renders go through `announce()` from
  `lt-elements.js` — the live region the system already owns — debounced 500 ms,
  and silent until the first paint. The visible banners carry no `role`, so
  nothing is read twice. A screen reader reading a running total per keystroke
  as somebody types in the bore field is worse than silence.
- **A dual seat ("C/D") is two swatches, not a split fill.** A gradient would
  break the swatch's derived boundary edge and there is no half-and-half letter
  to read off it. A holder with no System 117 seat is an em dash with the words
  in `.lt-sr-only` — `.lt-swatch` never ships without a code, and a dash is not
  one.
- **The catalogue `DATA` line is byte-identical to commit f8190eb.** It was
  spliced across, not reformatted or re-serialised, so the transcription is
  still the one that was reviewed. Leave it that way.
