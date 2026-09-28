// The four lookups, as pure functions over the catalogue. No DOM and no markup:
// each returns data the screen renders. An insert and a holder fit if and only
// if their seat letters match — the coupling code (an insert's `his`, a
// holder's `hws`) carries that, and everything here keys on it.

import { INSERTS, HOLDERS, SETUP_NAME, SEAT_GROUPS, type Insert, type Holder, type Geom } from "../data/horn";

export type Setup = "both" | Geom;

const num = (s: string): number => parseFloat(s);

export const okSetup = (i: Insert, setup: Setup): boolean => setup === "both" || i.geom === setup;
export const okBoreInsert = (i: Insert, bore: number | null): boolean =>
  bore === null || isNaN(num(i.dmin)) || num(i.dmin) <= bore;
export const okBoreHolder = (h: Holder, bore: number | null): boolean => bore === null || num(h.dmin) <= bore;

/** "≥ 12 mm" for a numeric minimum bore, else the printed string as-is. */
export function boreText(dmin: string): string {
  return isNaN(num(dmin)) ? dmin : `≥ ${dmin} mm`;
}

/** The widths each insert in a list cuts, grouped by profile, as one sentence. */
export function coverage(list: readonly Insert[]): string {
  const parts: string[] = [];
  const band = (profile: string, label: string, numeric: boolean) => {
    let vals = [...new Set(list.filter((i) => i.profile === profile).map((i) => i.nw))];
    if (numeric) vals = vals.map((v) => String(parseInt(v, 10))).sort((a, b) => Number(a) - Number(b));
    if (vals.length) parts.push(`${label} ${vals.join(", ")} mm`);
  };
  band("Keyway", "Keyway", true);
  band("Chamfer", "Chamfer", false);
  band("Square SQ", "Square", false);
  band("Hexagon SW", "Hexagon SW", false);
  return parts.join(" · ");
}

/** A short width range for one seat code: a dash range when the keyway widths
 *  are contiguous, else the widths listed, else the first insert's width. */
export function rangeHint(code: string): string {
  const ins = INSERTS.filter((i) => i.his.includes(code));
  const kw = [...new Set(ins.filter((i) => i.profile === "Keyway").map((i) => parseInt(i.nw, 10)))].sort(
    (a, b) => a - b,
  );
  if (!kw.length) return ins.length ? `${ins[0].nw} mm` : "";
  const contiguous = kw.length > 1 && kw[kw.length - 1] - kw[0] === kw.length - 1;
  return (contiguous ? `${kw[0]}–${kw[kw.length - 1]}` : kw.join(" · ")) + " mm";
}

/** The band a seat code belongs to (Keyway / Hexagon / Square), for the picker. */
function bandOf(code: string): string {
  for (const [label, codes] of SEAT_GROUPS) {
    if (codes.includes(code)) return label.startsWith("Keyway") ? "Keyway" : label;
  }
  return "";
}

/** The seat picker's options, in printed order: one radio each, its letter as
 *  the label and its band and width range as the hint. One group, so the arrow
 *  keys walk every seat and exactly one is ever chosen. */
export function seatPickerItems(): readonly { value: string; label: string; hint: string }[] {
  return SEAT_GROUPS.flatMap(([, codes]) =>
    codes.map((code) => {
      const range = rangeHint(code);
      const band = bandOf(code);
      return { value: code, label: `Seat ${code[3]}`, hint: range ? `${band}, ${range}` : band };
    }),
  );
}

// -- Panel 1: find by width ---------------------------------------------------

export interface HolderSection {
  code: string;
  seat: string;
  holders: readonly Holder[];
  hidden: number;
  smallestBore: number | null;
}

export interface WidthResult {
  width: string;
  inserts: readonly Insert[];
  total: number;
  hidden: number;
  madeFor: string;
  seatSections: readonly HolderSection[];
}

export function widthResult(width: string, setup: Setup, bore: number | null): WidthResult {
  const all = INSERTS.filter((i) => i.wk === width);
  const inserts = all.filter((i) => okSetup(i, setup) && okBoreInsert(i, bore));
  const madeFor = [...new Set(all.map((i) => SETUP_NAME[i.geom]))].join(" and ");

  const codes: string[] = [];
  inserts.forEach((i) => {
    if (!codes.includes(i.his)) codes.push(i.his);
  });

  const seatSections = codes.map((code) => {
    const hsAll = HOLDERS.filter((h) => code.includes(h.hws));
    const holders = hsAll.filter((h) => okBoreHolder(h, bore));
    const found = inserts.find((i) => i.his === code);
    const bores = hsAll.map((h) => num(h.dmin)).filter((n) => !isNaN(n));
    return {
      code,
      seat: found ? found.seat : "",
      holders,
      hidden: hsAll.length - holders.length,
      smallestBore: bores.length ? Math.min(...bores) : null,
    };
  });

  return { width, inserts, total: all.length, hidden: all.length - inserts.length, madeFor, seatSections };
}

// -- Panel 2: browse by seat --------------------------------------------------

export interface SeatResult {
  code: string;
  letter: string;
  inserts: readonly Insert[];
  insertsTotal: number;
  hidden: number;
  holders: readonly Holder[];
  smallestBore: number | null;
  coverageText: string;
  madeFor: string;
}

export function seatResult(code: string, setup: Setup): SeatResult {
  const letter = code[3];
  const insAll = INSERTS.filter((i) => i.his.includes(code));
  const holders = HOLDERS.filter((h) => h.hws === code);
  const inserts = insAll.filter((i) => okSetup(i, setup));
  const bores = insAll.map((i) => num(i.dmin)).filter((n) => !isNaN(n));
  return {
    code,
    letter,
    inserts,
    insertsTotal: insAll.length,
    hidden: insAll.length - inserts.length,
    holders,
    smallestBore: bores.length ? Math.min(...bores) : null,
    coverageText: coverage(insAll),
    madeFor: [...new Set(insAll.map((i) => SETUP_NAME[i.geom]))].join(" and "),
  };
}

// -- Panels 3 and 4: look up an insert / a holder -----------------------------

export const insertLabel = (i: Insert): string =>
  i.profile === "Keyway" ? `${i.tol} · ${i.nw} mm · ${i.geom}` : `${i.profile} ${i.nw} · ${i.geom}`;

export const holderLabel = (h: Holder): string => `seat ${h.seat} · ${h.mach}`;

export function findInsert(pn: string): { insert: Insert; holders: readonly Holder[] } | null {
  const insert = INSERTS.find((x) => x.pn === pn);
  if (!insert) return null;
  return { insert, holders: HOLDERS.filter((h) => insert.his.includes(h.hws)) };
}

export function findHolder(pn: string): { holder: Holder; inserts: readonly Insert[] } | null {
  const holder = HOLDERS.find((x) => x.pn === pn);
  if (!holder) return null;
  return { holder, inserts: INSERTS.filter((i) => i.his.includes(holder.hws)) };
}
