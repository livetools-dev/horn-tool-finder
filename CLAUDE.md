# Horn System 117 broaching selector

A single-page selector over an extract of the Horn Stechdrehen catalogue
(System 117, p. 750–785). It answers one question four ways: which insert cuts
the width I need, and which holders will take it. An insert and a holder fit if
and only if their seat letters match — same letter, same coupling code, it fits.

Built from the `livetools-app-vite` template: Vite 8, React 19, TypeScript and
React Router 7, every screen made from the parts in `@livetools/ui` (pinned to
1.4.0) and from nothing else. The design system's rules are also pinned as a
skill in `.claude/skills/livetools-design-system/`; consult it before writing
or changing any screen or CSS.

The person you build this for does not read code. Read "Talking to the person"
before your first message to them.

## How this app is shaped

One screen, four lookup modes as tabs, not four pages. The whole tool is
`src/screens/Finder.tsx`: a shared machine-geometry choice and the seat-match
rule sit above a `Tabs` part whose four panels are the four lookups —

- **Find by width**: a width to cut and an optional bore, then the inserts that
  make it and, under each, the holders that share its seat.
- **Browse by seat**: one of the seventeen seats, then every insert and holder
  on it with a coverage summary.
- **Look up an insert** / **a holder**: a search box that narrows a picker,
  then a detail card and everything on the other side of the coupling.

The catalogue is `src/data/horn.ts` (131 inserts, 97 holders, 25 widths). The
four lookup algorithms and the formatters are pure functions in
`src/lib/finder.ts`; the seat box is `src/lib/Seat.tsx`. Every lookup lives in
memory — there is nothing to save, no backend and no accounts.

To change a lookup, edit its panel in `Finder.tsx` and the function it calls in
`finder.ts`. To add a fifth lookup, add a tab to the `Tabs` items and a function
beside the others. The files you edit are `src/screens/*.tsx`, `src/data/*.ts`,
`src/lib/*.ts`, `src/App.tsx`, `src/app.css` and `src/app-tokens.css`.

## The catalogue data is a reviewed transcription

`src/data/horn.ts` was transcribed from the catalogue and reviewed against
commit `f8190eb`; the values are byte-exact from that transcription, only
re-typed. Do not tidy, round or re-serialise a value: the `"-"` and `"C/D"`
sentinels, the string dimensions and the page numbers are all load-bearing. A
correction to the catalogue is a deliberate edit with the catalogue open, never
a reformat.

## THE OPEN DECISION: the seat colour palette

The seventeen seat colours are a **domain palette** — a "what something is"
taxonomy (ISO 513's third job for colour), not a status — and they knowingly sit
outside the certified system, pending Scott Moyse's sign-off. The full record,
with the measured contrast ratios, is the header comment in `src/app-tokens.css`.
The short version: the hues descend from Material Design steps chosen by whoever
first drew the UI, not from Horn's printed marking, and they reuse red, green and
amber, which section 3b of the design tokens rings off for ISO 513 alone. Both
are decisions, not edits. If Horn does not colour-code seats at all, delete the
palette — the letter is the signal either way.

How the deviation is contained:

- The colours live only in `src/app-tokens.css`, as `--horn-seat-*` custom
  properties (the one file the lint lets hold a colour literal). No colour
  literal exists anywhere else in this app.
- The React `Swatch` part carries only the certified ISO material groups
  (P/M/K/N/S/H/W/O), so it **cannot** draw a Horn seat. The seat therefore has
  its own small part, `Seat` in `src/lib/Seat.tsx`: a boxed letter whose fill
  and ink come from the `seat-<letter>` classes in `src/app.css`, which read the
  `--horn-seat-*` tokens. A dual seat ("C/D") is two boxes, never a split
  fill; a holder with no System 117 seat ("-") is an em dash with the words in
  `SrOnly`, because a box never ships without a code.
- A seat also always appears as a letter in text (the table cell, the heading,
  the spec list), so the colour is never the only signal.

When the hues are confirmed and the reuse is signed off, the seventeen pairs
move upstream into the design tokens under the same names and this block, the
`Seat` part and the `seat-*` classes retire.

## The parts and where the list is

Read `node_modules/@livetools/ui/PARTS.md` before writing a screen. It is
generated from the installed version, so it is never out of step with what is
installed: every part, its import line, its props, and the one rule an app most
needs about it. Take part names and props from it and nowhere else, including
your memory of other design systems or of the older `lt-` classes this app used
before the migration.

A need that is not in PARTS.md is a part that does not exist in this version.
Tell the person in plain words what the screen cannot do yet, report the gap
(see "Reporting a part that is wrong"), and do not build a stand-in from raw
elements. Never import `@base-ui/react` or `react-aria-components`, types
included; the lint fails the import.

## The root and the rules in React terms

The root is already set up and is not changed. `src/main.tsx` wraps the whole
app in exactly one `LivetoolsProvider` and imports `globals.css`, which holds
three imports in a fixed order:

```css
@import "@livetools/ui/styles.css";  /* tokens and components together */
@import "./app-tokens.css";          /* this app's own custom properties */
@import "./app.css";                 /* this app's own classes, last */
```

The provider writes density, scheme and theme onto the page. Change them through
its props, never by writing `data-lt-*` attributes. The rules, in this app's
terms:

- **Never write a raw value.** No colour, px or pt font size or hand-rolled
  shadow in a `style` prop, a style object, a class string or `app.css`;
  everything reads a `--lt-*` token. A value the system lacks is a custom
  property in `src/app-tokens.css`, the only place a literal is allowed — and a
  token from another job is not an answer either.
- **Blue acts, red is identity and danger.** A positive action is a blue
  `Button`; there is no brand-red variant, and CSS must not fake one.
- **Colour never carries meaning alone.** `Badge`, `Alert`, `State` and status
  `Select` items carry an icon and words as well as a colour. A seat is a boxed
  letter, never a bare colour.
- **Severity picks the colour, lifetime picks the part.** `Alert` for a
  condition true now (the seat-match banner, the "hidden by filters" notes, an
  empty result); `toast()` for a receipt with nothing on screen to show it. This
  app has no toasts, because every message points at something on the page.
- **A page is a `Shell` header over a `Panel` main**, and controls go only on
  the `Panel`.
- **Lists are data in props** (`items`, `columns`, `rows`), never markup. Never
  reach into a part with a ref; use only the methods PARTS.md lists.
- **A number a person types is a `NumberField`.** Dates and times are
  `DateField`/`TimeField`, files are `FileDrop` — none of which this app needs
  today.

The lint that enforces this is switched on by `eslint.config.js` and
`stylelint.config.js` at the root; they are not changed, and no rule is disabled
locally. A rule that stops you means use a part, or ask upstream for one.

## The checks and hooks

`npm run check` runs the lint, the type check, the build, and a check that only
one copy of React and of each behaviour library is installed. Run it before
every push; the publish workflow runs the same check, and a failure there means
the site does not update.

The hooks in `.claude/settings.json` run the lint on every file you edit and
again before you stop. Fix every finding before you tell the person anything is
done; they never see a lint or type error. If `node_modules` is missing, run
`npm install` yourself — the person never runs a command.

The old Python checks (`conformance.py`, `lt_dom_audit.py`) and the vendored
`tokens/`, `components/`, `fonts/` and `icons/` are gone: the design system now
comes from the `@livetools/ui` package and its own JS lint, not from vendored
copies.

## Publishing

A push to `main` publishes the site through `.github/workflows/pages.yml`:
install, `npm run check`, build, deploy to GitHub Pages. Pages' source must be
set to "GitHub Actions" once, by hand, in the repository settings — a one-time
developer step. A failed check fails the deploy and leaves the site as it was,
and the workflow opens or updates an issue titled "The site did not update"
saying which check failed. The base path comes from Pages and is never written
into the app; the workflow copies the page to `404.html` so a deep link resolves.

## Talking to the person

The person does not read code. Everything you say describes what changed on the
screen, in their words.

- Never name a file, folder, library, command, component or setting. Say "the
  seat browser now shows the bore size", never a filename.
- Never show them a terminal or ask them to run anything. You install, check and
  push.
- Never pass on a lint error, a type error or a failed build. Fix it first, or
  say what is wrong on the screen in a sentence.
- Never mention React, Vite, Base UI or any other library by name.

Machining and workshop vocabulary is fine; they are experts in it. Software
vocabulary is not. Ask for a decision as a choice about the screen ("should the
holders sit under each insert, or in one list?"), not about how it is built.

## Updating the design system

`@livetools/ui` is pinned to an exact version with the lockfile committed.
Move it only when the person asks, and then: change the exact version in
`package.json` (no `^` or `~`), run `npm install`, run `npm run check` and fix
every finding, read the package's `CHANGELOG.md` for every version in between
and re-read PARTS.md for each part this app uses, then push and tell the person
what changed on the screen. Do not run `npm audit fix`.

## Reporting a part that is wrong

A part that paints or announces wrong, refuses a legitimate shape, or lacks a
prop a real screen needs is the design system's defect, not this app's. Do not
patch around it here. Report it as a consumer report in
`livetools-dev/livetools-design-system` at
`docs/consumer-reports/<yyyy-mm-dd>-horn-tool-finder.md`: what the screen needed,
what the part did, what you expected, and the smallest code that shows it. The
seat palette is a candidate the day someone signs the hues off: the certified
`Swatch` part gaining a Horn-seat group would retire this app's `Seat` part.
