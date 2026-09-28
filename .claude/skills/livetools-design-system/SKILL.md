---
name: livetools-design-system
description: >-
  Build user interfaces with the Livetools Design System (lt-tokens.css,
  lt-components.css, lt-elements.js), the design system behind Livetools'
  machining and tooling applications. Use this skill whenever you are writing,
  editing, or reviewing markup or CSS for a Livetools tool, calculator,
  configurator, catalogue, quoting front-end, or shop-floor kiosk, and whenever
  you see --lt-* custom properties, lt- prefixed classes, or lt-number-field /
  lt-unit-toggle / lt-tabs / lt-dialog / lt-table / lt-wizard / lt-menu /
  lt-status-select elements in a file. Trigger it even for small changes like "make this button red", "add a
  field here", or "why is this the wrong colour", because the system's rules
  are the whole point and a plausible-looking change is usually the wrong one.
  For adding or changing tokens, ramps, surfaces, or contrast values, use
  livetools-design-tokens instead.
---

# Building with the Livetools Design System

You are working inside a system that has already made its decisions and written
down why. Your job is to find the existing answer, not to invent a new one. If
the system genuinely has no answer, that is a gap in the token layer and it gets
fixed there (see `livetools-design-tokens`), never patched around in a component.

Read `reference.md` in this folder for the component catalogue, the custom
element APIs, and worked examples. Read it before writing markup for a component
you have not used before.

## Rule number one: never write a raw value

No hex colours. No `rgb()`. No raw `px` font sizes. No hand-rolled shadows. Every
colour, size, space, radius and duration comes from a `--lt-*` token.

This is the failure the system was built to prevent, and it is specifically a
failure agents commit. Asked to "make the button red", the tempting move is to
write `#ED1C24` into a component. It looks correct on the day and it is wrong
from then on, because it will not respond to scheme, density or theme, and
nobody will notice until a customer does.

If no token fits, stop and say so. Do not approximate with the nearest hex.

## The other three rules

**Red is identity and danger. Blue acts.** (One named exception, and it is
named rather than general: ISO 513's cast-iron K swatch — see "Colour has three
jobs" below.) A positive call to action is blue at
every size, on every surface, including a kiosk. Red is for the logotype, for
`--danger` (delete, destroy, stop), and for fault states. Livetools Red is
4.38:1 on white, so it fails AA for normal text and cannot carry body copy, a
small label, or a normal-size button label. This was decided on 2026-07-26 by
Scott Moyse after reviewing three options, and the file says in as many words:
do not quietly revert it. It also matches what blue already means on a machine
control panel, mandatory action.

**Colour never carries meaning alone** (WCAG 1.4.1). Every status needs an icon
and words as well as a colour. Around 8% of men have red-green colour vision
deficiency and Livetools' users are mostly men on a shop floor. This is why
statuses are chips with icons rather than bare coloured text. It bites hardest
on badges: five severities cannot separate a fourteen-state vocabulary, so
*draft* and *retired* both come out grey and the glyph is the only thing left
carrying the difference. The `lt` sprite ships seven status glyphs for this
(pencil, check, dash-circle, slash, bookmark, tilde, flask) — see
`reference.md`.

**Danger has three weights, and they are weights, not hues.** Filled
`lt-btn--danger` is the confirm step. `lt-btn--danger-quiet` (outlined) is a
delete that repeats down a list of rows; `lt-btn--danger-text` is one inside a
menu. Seventeen filled red buttons on one page made the rarest action the
loudest element on it, which is what added the tier on 2026-07-28. All three
always carry an icon **and** the word.

**Interactive borders use `--lt-border-interactive` or darker.** The lighter grey
border tokens are under 3:1 and are decorative only. A control boundary that
uses one fails SC 1.4.11.

## Surfaces decide everything

The single most important structural idea, and the one that causes the worst
bugs when it is missed. Three surfaces, each a context that re-declares tokens:

| surface | class | tone | what goes on it |
|---|---|---|---|
| page | (default) | follows the scheme | the background behind everything |
| panel | `.lt-panel` | **light in both schemes** | every control, form, table, card |
| shell | `.lt-shell` | **dark in both schemes** | brand chrome, nav, headers |

Controls belong on a panel. The panel staying light in both schemes is
deliberate: it is what lets brand blue and brand red keep their exact values
instead of being re-tuned per scheme.

**Put the class on the container, then let components inherit.** Do not set
surface tokens on individual components.

```html
<body>
  <header class="lt-shell">…brand chrome…</header>
  <main class="lt-panel">…controls belong here…</main>
</body>
```

If you build a new surface context, it must re-declare **all** of its tokens:
ink, borders, fields, **its `--lt-surface-*` values, and its `color-scheme`**.
Declaring only the text colours is the bug that produces dark-on-dark readouts
and native radio buttons that render as filled discs on a light card. See
`livetools-design-tokens` before adding one.

## Density is a feature, not a default

Set `data-lt-density="compact | comfortable | spacious"` on `<html>` or any
container, and persist the user's choice.

- **comfortable** (36px controls) is the default for a Windows desktop tool
- **compact** (28px) for a dense catalogue or spec grid
- **spacious** (48px) for a touchscreen kiosk

The comfortable values are also the `:root` defaults baked into the token
file (the comfortable block's selector is `:root, [data-lt-density=…]`), so a
page that sets no attribute gets comfortable, not nothing — forgetting the
attribute must degrade to a sane density, never to unstyled. The attribute is
how you *change* density, and the place the persisted choice lands. On a
coarse pointer the tokens floor themselves at `--lt-target-touch` (44px)
whatever density is set.

Never hardcode a control height. Read `--lt-control-height` — and never the
`--lt-control-height-base` / `--lt-row-height-base` names, which are internal
to the token file's density section and skip the touch floor. And whatever
density is set, an interactive hit area must still reach `--lt-target-min`
(24px). Pad the target, do not shrink it past the floor.

## Icons

Two grids, no exceptions: `0 0 24 24` renders at 16–24px through `.lt-icon`,
`0 0 48 48` at 32–48px through `.lt-pictogram` (decided 2026-07-28, the full
record is ICONS-PROPOSAL.md). Any other viewBox renders strokes at broken
widths — the Evolute set drew a "2px" stroke at 1.09px in its own tables —
and `conformance.py` fails it.

An icon paints through the `lt-ic-*` layer classes and nothing else: `ink`
(currentColor — surfaces and forced colours work unaided), `tint` (stock,
never load-bearing), `accent` and `emphasis` (read `--lt-icon-accent`, a slot
each app pins to its own brand hue in `app-tokens.css`; Evolute pins
`#2F8DCB`), `accent-fill`. Writing `fill="#..."` on an SVG attribute is the
one raw-hex route the old checks could not see; `icon-raw-colour` now catches
it. No `opacity` in an icon, ever — a tint that needs compositing cannot be
contrast-checked and is discarded by forced colours.

The acceptance test: render the set at its tier floor with the accent
collapsed to ink (which is exactly what an unpinned slot does). If two icons
are not tellable apart, the artwork is wrong — colour is reinforcement, never
the signal, same as rule 3. Sprites live in `icons/<set>/sprite.svg`, ids are
`<set>-ic-<name>`, and `icons/verify-icons.py` gates every hosted set.

The 24 grid's floor is 16px and it is a floor, not a preference: a 2-unit
stroke lands at 1.33px there and a 3-unit distinguishing mark at 2px, so
anything smaller loses the marks that separate one glyph from another while
still reviewing fine at 24px. The chip slots (`--lt-icon-size-xs` / `-sm`, the
badge and field-chip sizes) sat at 12 and 14px until 2026-07-28 for exactly
that reason — nobody had looked at them at the size they shipped.

## Theme intensity

Operational is the default: grey first, colour reserved for meaning, following
the High Performance HMI convention. Internal tools get it without asking.
Customer-facing surfaces that sit next to Livetools marketing opt in to the
fuller brand expression with `data-lt-theme="commercial"`.

## Status visuals: lifetime picks the component

Severity picks the colour. How long the message stays true picks the
component. If there is something on screen the message belongs to, put it
there: under the field, on the row, above the section. Only float it when
there is nowhere to put it, and that is a toast.

| showing | use |
|---|---|
| a condition that is true right now | `.lt-alert--*` banner, in the flow |
| the result of an action, with nothing on screen that shows it | `toast()` |
| a problem with one input | `.lt-field__error` + `aria-invalid` |
| what an input expects, before it is wrong | `.lt-field__hint` |
| a record's state in a table or card | `.lt-badge--*` |
| what a record *is* — a taxonomy code | `.lt-swatch--*` |
| a machine or job's live condition | `.lt-state--*` |
| a state the user can set | `lt-status-select` |
| a taxonomy the user can set | `lt-status-select` + `data-swatch` |
| a result outside its safe range | `.lt-readout--warning` / `--danger` |
| a decision that blocks everything else | `lt-dialog` |

**A toast is a receipt. A banner is a condition.** "Quote saved" is finished
business, so it can vanish. "Feed above the published range" stays true until
the number changes, so it stays on the page. Anything the user has to act on
is a banner: a toast is gone in five seconds, and on a kiosk they are looking
at the workpiece. One event gets one visual, never both. A banner your code
inserts is silent, so set `role="alert"` or `role="status"` before inserting
it, or call `announce()`; toasts announce themselves.

**A validation error never floats**, inline or on submit. It goes under every
failing field, and earns a banner as well only when that field can be off
screen (a long form, a wizard step); focus moves to the first one. Only a
failure with nothing to point at, a network drop or a server error, follows
the toast rules. In `lt-number-field` the chip and `field.state` are one
thing: read the state, never write the chip. Rest in `reference.md` §6.

**An error chip without `aria-invalid` is half a field.** A hand-rolled field
that paints `.lt-field__error` must also set `aria-invalid="true"` on its
control and point `aria-describedby` at the chip's id. This is not just
assistive tech: `lt-wizard` gates Continue on `aria-invalid`, so a step whose
fields carry only chips lets the user walk past a bad value. `lt_dom_audit.py`
checks rendered HTML for it (consumers run it in their own tests, and
`run-all.sh` step 7 runs it here); `auditFields()` checks a live DOM, with
`<body data-lt-audit>` to warn in the console. Neither repairs the markup, on
purpose.

## Colour has three jobs, not two

Brand identity says **who we are**. Status severity says **how something is
going**. A domain palette says **what something is** — and it is the one people
reach for the wrong tool for, because a taxonomy that happens to be red is not
danger.

Domain palettes live in `lt-tokens.css` section 3b. Today there is exactly one,
ISO 513's six workpiece-material groups (`--lt-iso-p` … `--lt-iso-h`, each with
a matching `-on` ink), drawn by `.lt-swatch`. The hues are fixed by the trade,
not by us; the digital values are ours and are certified by `verify-tokens.py`
on every run. Never build a taxonomy out of the status tokens: a cast-iron row
in `--lt-danger-*` reads as a fault, and a non-ferrous row in `--lt-success-*`
reads as a pass.

**Adding a colour to a domain palette is a decision, not an edit.** Every fill
is pinned by name in `DOMAIN_PINS` in `verify-tokens.py`, so a new one fails the
build until somebody puts it there deliberately. That fence exists because ISO
513's K reuses red, against "red is identity and danger only". K is approved
**for ISO 513 and for nothing else** (Scott Moyse, 2026-07-29): it is duller and
darker than `--lt-brand-red`, and it only ever appears as a fill behind a
required letter. A second palette that wants red, green or amber does not
inherit that — it raises its own decision with its own numbers.

## Status colour: three different jobs

Getting these confused is a bug that has now happened twice, once in each
direction, so check yourself here.

- `--lt-*-on-surface` is ink AND edge for content sitting **on its own status
  surface**: the words inside an alert, a badge, a toast, and the alert's left
  bar. Scheme-independent, because the status surfaces are light in both
  schemes.
- `--lt-*-text` is for a hint or field error sitting on the **page**. It
  follows the scheme and lifts on dark chrome. Never use it on a status
  surface: in dark mode that puts lifted pastel ink on a pale card at ~3.4:1.
  That bug shipped and was fixed on 2026-07-27.
- `--lt-*-accent` is for status colour on a **neutral** surface, e.g. a
  `.lt-state` dot and label on a plain grey panel.

Use the accent for `.lt-state` and anything like it. Know that the danger and
warning accents are the vivid step-9 tones and do NOT meet AA, by a recorded
owner decision (2026-07-27): for those two the icon and words are the signal
and the colour is reinforcement. Do not "fix" them back to AA values, and do
not describe them as AA-compliant. `--lt-*-border` keeps the vivid boundary
jobs, like the invalid-field edge; it is no longer the alert's left bar.

## Before you commit

```bash
python3 tokens/verify-tokens.py     # colour maths and surface pairings
python3 conformance.py .            # token use and accessibility basics
node components/test-elements.mjs   # component behaviour
python3 smoke-measure.py            # design-system repo only: renders the
                                    # built gallery headless, measures the paint
```

Run them all. `conformance.py` catches raw hexes, raw font sizes, unlabelled
inputs, icon buttons with no accessible name, inline state styling, page-surface
tokens used in fields, brand red used as small text, and a `.lt-swatch` with no
code in it (`empty-swatch`, 2026-07-29) — and, since
2026-07-28, the token graph itself: a `var(--lt-*)` nothing defines
(`undefined-token`), a token whose every definition is conditional consumed
with no fallback (`conditional-token-no-fallback`), and a token that
references itself (`token-self-cycle`). If it flags something, fix the cause.
Do not add the file to the exempt list to make it pass.

`smoke-measure.py` exists because the first consumer report proved a class of
defect no text scan can see: markup and CSS both individually correct, and
the computed result wrong. It asserts every icon slot paints square at
exactly its token, every control hits `--lt-control-height`, no target falls
under `--lt-target-min` — with the density attribute removed, and with the
coarse-pointer floor applied.

## When you are asked to change something visual

1. Find the token or component that already does it. Read the comment above it,
   the reasoning is usually written down.
2. If the answer conflicts with what was asked, say so and explain the rule.
   "Make the CTA red" gets pushback, not compliance.
3. Change it at the right layer. Component CSS reads tokens. Token values live
   in `lt-tokens.css`. App overrides live in `app.css`, which loads last.
4. Re-run the three checks.

## Load order

```html
<link rel="stylesheet" href="tokens/lt-tokens.css">
<link rel="stylesheet" href="components/lt-components.css">
<link rel="stylesheet" href="app.css">
<script type="module" src="components/lt-elements.js"></script>
```

Tokens first, because every rule in `lt-components.css` reads a `--lt-*` value
and gets nothing if the tokens have not landed. `app.css` last so your own rules
win without a specificity fight. The script is a module with no build step and
no dependencies.

## Distribution

`run-all.sh` finishes by publishing this skill to `~/.claude/skills/` on the
machine it runs on, bundling the verified `tokens/`, `components/` and
`fonts/` files as `dist/` and the `conformance.py`/`scaffold.py` tooling as
`scripts/`, plus a consumer appendix from `skill/APPENDIX.md`. The repo is the
only source; the published copy is a build output, overwritten on every green
run, and can never be ahead of the repo. New consumer apps are created with
the published skill's `scripts/scaffold.py`; each app pins its own copy of the
skill and of the files it was scaffolded with, so upgrading an app is a
deliberate re-copy, never an ambient change.

## Traps that have already bitten

These are real bugs that shipped, not hypotheticals. Full detail in
`reference.md`.

- **Inlining `lt-elements.js` into an HTML file** breaks the page unless you
  escape the closing tag in its header comment as `<\/script>`. The HTML parser
  does not care that it is inside a JS comment; it ends the script block there
  and the rest of the file parses as garbage.
- **A field's label-to-control gap changing** when a hint is present means
  `.lt-field` is stretching its grid rows. It needs `align-content: start`.
- **A floating light card reading page ink.** A menu, a dialog, anything that
  paints its own light surface and sits above the page, must take a surface
  context rather than `--lt-surface-overlay` plus `--lt-text-primary`. In the
  dark scheme that pair measures 1.09:1 (#FDFDFD card, #EBEBEB ink), because
  the card is scheme-independent and the ink is not — the same split that put
  every alert and badge at 3.35–3.44:1 in 2026-07-27. `lt-menu` and `lt-dialog`
  both put `.lt-panel` on the floating element and paint nothing themselves.
- **An affix taller than its input** means it is relying on `align-items:
  stretch` instead of carrying a definite `block-size`.
- **A grouped control whose border changes shade partway along, or shows a
  double line at a seam,** means its parts are reading different border
  families or keeping their own radii. Inside `.lt-input-group` every child is
  squared, overlapped one border width, and reads `--lt-field-border`; hover
  darkens the whole group to `--lt-border-strong`, never just the part under
  the pointer.
- **A component that overrides a surface class's background** while the surface
  class has already switched the text tokens gives you light-on-light. Watch
  source order between app CSS and surface classes.
- **An icon painted smaller than its token in a narrow container** means the
  reset's fluid-media clamp (`max-inline-size: 100%` on every svg) is beating
  a definite `inline-size` — a different property, so `:where()`'s zero
  specificity is irrelevant. Every sized icon slot in `lt-components.css`
  carries `max-inline-size: none`; a new rule that sizes a replaced element
  must join that list. Found by the first consumer, 2026-07-28: a 20px icon
  painting 15×15 in a table column that was narrow *because* the icon was its
  only content.
- **A token that references itself** (`--x: max(var(--x), …)`) is a cycle and
  computes to guaranteed-invalid everywhere — an inherited value does not
  break it. The pointer-coarse touch floor shipped this way and silently
  destroyed `--lt-control-height` on all touch hardware. Derive through a
  second name instead (the `-base` pattern in the density section);
  `conformance.py` now fails the pattern as `token-self-cycle`.
