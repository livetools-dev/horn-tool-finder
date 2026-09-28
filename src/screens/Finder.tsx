// The selector, one screen with four lookup modes as tabs. A shared machine-
// geometry choice and the seat-match rule sit above the tabs; each tab reads
// the catalogue through the pure functions in ../lib/finder and renders the
// result from parts. Every lookup lives in memory only — there is nothing to
// save.

import { useRef, useState } from "react";
import {
  Alert,
  Card,
  Code,
  Empty,
  Input,
  Link,
  Num,
  NumberField,
  Prose,
  RadioGroup,
  Select,
  Specs,
  SrOnly,
  Stack,
  Table,
  Tabs,
  announce,
} from "@livetools/ui";
import type { RadioItem, SelectItem, TableColumn, TableRow } from "@livetools/ui";
import { GEOM_LABEL, INSERTS, HOLDERS, WIDTHS, type Holder, type Insert } from "../data/horn";
import {
  boreText,
  findHolder,
  findInsert,
  holderLabel,
  insertLabel,
  seatPickerItems,
  seatResult,
  widthResult,
  type Setup,
} from "../lib/finder";
import { Seat } from "../lib/Seat";

const GEOMETRY_ITEMS: readonly RadioItem[] = [
  { value: "both", label: "Both" },
  { value: "A", label: "Slotting head (A)" },
  { value: "B", label: "Traditional (B)" },
];

const WIDTH_ITEMS: readonly SelectItem[] = WIDTHS.map((w) => ({ value: w, label: w }));
const SEAT_ITEMS: readonly RadioItem[] = seatPickerItems();

const INSERT_COLUMNS: readonly TableColumn[] = [
  { id: "pn", label: "Order number", kind: "code", rowHeader: true },
  { id: "width", label: "Width", kind: "number" },
  { id: "tol", label: "Tolerance" },
  { id: "for", label: "For" },
  { id: "seat", label: "Seat" },
  { id: "bore", label: "Needs bore", kind: "number" },
  { id: "page", label: "Cat. page", kind: "number" },
];

const HOLDER_COLUMNS: readonly TableColumn[] = [
  { id: "pn", label: "Order number", kind: "code", rowHeader: true },
  { id: "mach", label: "Fits machine" },
  { id: "shank", label: "Shank", kind: "number" },
  { id: "reach", label: "Reach", kind: "number" },
  { id: "bore", label: "Needs bore", kind: "number" },
  { id: "seat", label: "Seat" },
  { id: "cool", label: "Coolant" },
  { id: "page", label: "Cat. page", kind: "number" },
];

/** A part number that opens on the Horn eShop in a new tab. The words that say
 *  where it goes ride along in SrOnly, so the new-tab jump is never silent. */
function PartLink({ pn, url }: { pn: string; url: string }) {
  return (
    <Link href={url} target="_blank" rel="noopener">
      <Code>{pn}</Code>
      <SrOnly> (opens on the Horn eShop)</SrOnly>
    </Link>
  );
}

function insertRows(list: readonly Insert[]): readonly TableRow[] {
  return list.map((i) => ({
    id: i.pn,
    cells: {
      pn: <PartLink pn={i.pn} url={i.url} />,
      width: <Num>{i.w} mm</Num>,
      tol: i.tol,
      for: GEOM_LABEL[i.geom],
      seat: <Seat seat={i.seat} />,
      bore: <Num>{boreText(i.dmin)}</Num>,
      page: <Num>{i.page}</Num>,
    },
  }));
}

function holderRows(list: readonly Holder[]): readonly TableRow[] {
  return list.map((h) => ({
    id: h.pn,
    cells: {
      pn: <PartLink pn={h.pn} url={h.url} />,
      mach: h.mach,
      shank: <Num>{h.d} mm</Num>,
      reach: <Num>{h.l2} mm</Num>,
      bore: <Num>{boreText(h.dmin)}</Num>,
      seat: <Seat seat={h.seat} />,
      cool: h.cool === "IK" ? "Internal (IK)" : "—",
      page: <Num>{h.page}</Num>,
    },
  }));
}

function SectionHead({ seat, heading, count, sub }: { seat?: string; heading: string; count: string; sub?: string }) {
  return (
    <div className="app-section-head">
      {seat !== undefined && <Seat seat={seat} />}
      <h2>{heading}</h2>
      <span className="app-count">{count}</span>
      {sub !== undefined && <span className="app-sub">{sub}</span>}
    </div>
  );
}

function HiddenNote({ n, noun }: { n: number; noun: string }) {
  if (n <= 0) return null;
  return (
    <Alert variant="info">
      {n} {noun}
      {n === 1 ? " is" : "s are"} hidden by the machine or bore filter above.
    </Alert>
  );
}

export function Finder() {
  const [setup, setSetup] = useState<Setup>("both");
  const [bore, setBore] = useState<number | null>(null);
  const [width, setWidth] = useState<string>("6 mm keyway");
  const [seatCode, setSeatCode] = useState<string>("117A005");
  const [insertQuery, setInsertQuery] = useState("");
  const [insertPn, setInsertPn] = useState<string>("S117.0600.02.10.A1");
  const [holderQuery, setHolderQuery] = useState("");
  const [holderPn, setHolderPn] = useState<string>("SH117.0025.2.10.IK");
  const [tab, setTab] = useState("width");

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  function say(message: string) {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => announce(message), 500);
  }

  // -- Panel 1: find by width -------------------------------------------------
  const w = widthResult(width, setup, bore);
  const widthPanel = (
    <Stack>
      <Prose>
        <p>Pick the width you need to cut. The inserts that make it appear first, then the holders that take each one.</p>
      </Prose>
      <Select
        label="Width to cut"
        items={WIDTH_ITEMS}
        value={width}
        onValueChange={(v) => {
          if (v === null) return;
          setWidth(v);
          const r = widthResult(v, setup, bore);
          say(`${r.inserts.length} ${r.inserts.length === 1 ? "insert" : "inserts"} for ${v}.`);
        }}
      />
      <NumberField
        label="Bore to reach through"
        unit="mm"
        decimals={1}
        min={0}
        value={bore}
        hint="Optional. Hides inserts and holders that need a larger bore."
        onValueChange={(v) => setBore(v !== null && v > 0 ? v : null)}
      />
      <div>
        <SectionHead heading="Step 1 — pick your insert" count={`${w.inserts.length} of ${w.total} in ${width}`} />
        <Table
          label={`Inserts in ${width}`}
          columns={INSERT_COLUMNS}
          rows={insertRows(w.inserts)}
          empty={{
            title: `Nothing in ${width} matches your choices`,
            body: `Horn makes this width for ${w.madeFor}.`,
          }}
        />
        <HiddenNote n={w.hidden} noun="insert" />
      </div>
      {w.seatSections.map((s) => (
        <div key={s.code}>
          <SectionHead
            seat={s.seat}
            heading={`Step 2 — holders for seat ${s.seat}`}
            count={`${s.holders.length} ${s.holders.length === 1 ? "holder" : "holders"}`}
            sub={`Any holder here fits any seat-${s.seat} insert above — coupling code ${s.code} on both.`}
          />
          <Table
            label={`Holders for seat ${s.seat}`}
            columns={HOLDER_COLUMNS}
            rows={holderRows(s.holders)}
            empty={{
              title: `No seat-${s.seat} holder enters a ${bore} mm bore`,
              body: s.smallestBore !== null ? `The smallest needs ${s.smallestBore} mm.` : "",
            }}
          />
          <HiddenNote n={s.hidden} noun="holder" />
        </div>
      ))}
    </Stack>
  );

  // -- Panel 2: browse by seat ------------------------------------------------
  const s = seatResult(seatCode, setup);
  const seatPanel = (
    <Stack>
      <Prose>
        <p>Pick a seat to see everything on it. Every insert and holder here shares one coupling, so any of these inserts fits any of these holders.</p>
      </Prose>
      <RadioGroup
        label="Seat"
        items={SEAT_ITEMS}
        value={seatCode}
        onValueChange={(v) => {
          setSeatCode(v);
          const r = seatResult(v, setup);
          say(`Seat ${r.letter}: ${r.inserts.length} inserts, ${r.holders.length} holders.`);
        }}
      />
      <Card title={<><Seat seat={s.letter} /> Seat {s.letter}</>}>
        <Specs
          items={[
            { label: "Coupling code", value: <Code>{s.code}</Code> },
            { label: "Covers", value: s.coverageText },
            { label: "Fits bores from", value: s.smallestBore !== null ? `${s.smallestBore} mm` : "see the rows below" },
            { label: "On this seat", value: `${s.insertsTotal} inserts, ${s.holders.length} holders` },
          ]}
        />
      </Card>
      <div>
        <SectionHead heading={`Inserts on seat ${s.letter}`} count={`${s.inserts.length} of ${s.insertsTotal}`} />
        <Table
          label={`Inserts on seat ${s.letter}`}
          columns={INSERT_COLUMNS}
          rows={insertRows(s.inserts)}
          empty={{
            title: `Seat ${s.letter} has no matching inserts`,
            body: `Horn makes it for ${s.madeFor} only.`,
          }}
        />
        <HiddenNote n={s.hidden} noun="insert" />
      </div>
      <div>
        <SectionHead
          heading={`Holders on seat ${s.letter}`}
          count={`${s.holders.length} ${s.holders.length === 1 ? "holder" : "holders"}`}
        />
        <Table
          label={`Holders on seat ${s.letter}`}
          columns={HOLDER_COLUMNS}
          rows={holderRows(s.holders)}
          empty={{ title: `No holders on seat ${s.letter}`, body: "" }}
        />
      </div>
    </Stack>
  );

  // -- Panel 3: look up an insert ---------------------------------------------
  const insertMatches = INSERTS.filter((i) =>
    `${i.pn} ${insertLabel(i)}`.toLowerCase().includes(insertQuery.toLowerCase()),
  );
  const insertItems: readonly SelectItem[] = insertMatches.map((i) => ({
    value: i.pn,
    label: `${i.pn}   ·   ${insertLabel(i)}`,
  }));
  const effectiveInsertPn = insertMatches.some((i) => i.pn === insertPn) ? insertPn : insertMatches[0]?.pn ?? null;
  const insertHit = effectiveInsertPn ? findInsert(effectiveInsertPn) : null;
  const insertPanel = (
    <Stack>
      <Prose>
        <p>Find an insert by its order number or spec, and see every holder that takes it.</p>
      </Prose>
      <Input
        label="Filter inserts"
        type="search"
        value={insertQuery}
        placeholder="Order number, tolerance, width…"
        onValueChange={setInsertQuery}
      />
      <Select
        label="Insert"
        items={insertItems}
        value={effectiveInsertPn}
        placeholder="No insert matches that filter"
        onValueChange={(v) => {
          if (v === null) return;
          setInsertPn(v);
          const hit = findInsert(v);
          if (hit) say(`${hit.insert.pn}: ${hit.holders.length} holders fit.`);
        }}
      />
      {insertHit && (
        <>
          <Card title={<PartLink pn={insertHit.insert.pn} url={insertHit.insert.url} />} actions={<Seat seat={insertHit.insert.seat} />}>
            <Specs
              items={[
                {
                  label: "Cuts",
                  value:
                    insertHit.insert.profile === "Keyway"
                      ? `${insertHit.insert.profile} ${insertHit.insert.nw} mm, ${insertHit.insert.tol}`
                      : `${insertHit.insert.profile} ${insertHit.insert.nw} mm`,
                },
                { label: "For", value: GEOM_LABEL[insertHit.insert.geom] },
                { label: "Needs bore", value: boreText(insertHit.insert.dmin) },
                { label: "Seat", value: <>{insertHit.insert.seat}, coupling <Code>{insertHit.insert.his}</Code></> },
                { label: "Catalogue", value: `p. ${insertHit.insert.page}` },
              ]}
            />
          </Card>
          <div>
            <SectionHead
              seat={insertHit.insert.seat}
              heading="Holders that fit this insert"
              count={`${insertHit.holders.length} ${insertHit.holders.length === 1 ? "holder" : "holders"}`}
              sub={`Every row shares seat ${insertHit.insert.seat} — coupling ${insertHit.insert.his}.`}
            />
            <Table
              label="Holders that fit this insert"
              columns={HOLDER_COLUMNS}
              rows={holderRows(insertHit.holders)}
              empty={{ title: "No holder shares this coupling", body: "" }}
            />
          </div>
        </>
      )}
      {!insertHit && <Empty title="No insert matches that filter">Clear the filter to see every insert.</Empty>}
    </Stack>
  );

  // -- Panel 4: look up a holder ----------------------------------------------
  const holderMatches = HOLDERS.filter((h) =>
    `${h.pn} ${holderLabel(h)}`.toLowerCase().includes(holderQuery.toLowerCase()),
  );
  const holderItems: readonly SelectItem[] = holderMatches.map((h) => ({
    value: h.pn,
    label: `${h.pn}   ·   ${holderLabel(h)}`,
  }));
  const effectiveHolderPn = holderMatches.some((h) => h.pn === holderPn) ? holderPn : holderMatches[0]?.pn ?? null;
  const holderHit = effectiveHolderPn ? findHolder(effectiveHolderPn) : null;
  const holderPanel = (
    <Stack>
      <Prose>
        <p>Find a holder by its order number or machine, and see every insert that fits it.</p>
      </Prose>
      <Input
        label="Filter holders"
        type="search"
        value={holderQuery}
        placeholder="Order number, seat, machine…"
        onValueChange={setHolderQuery}
      />
      <Select
        label="Holder"
        items={holderItems}
        value={effectiveHolderPn}
        placeholder="No holder matches that filter"
        onValueChange={(v) => {
          if (v === null) return;
          setHolderPn(v);
          const hit = findHolder(v);
          if (hit) say(`${hit.holder.pn}: ${hit.inserts.length} inserts fit.`);
        }}
      />
      {holderHit && (
        <>
          <Card title={<PartLink pn={holderHit.holder.pn} url={holderHit.holder.url} />} actions={<Seat seat={holderHit.holder.seat} />}>
            <Specs
              items={[
                { label: "Fits machine", value: holderHit.holder.mach },
                { label: "Shank", value: `${holderHit.holder.d} mm` },
                { label: "Reach", value: `${holderHit.holder.l2} mm` },
                { label: "Needs bore", value: boreText(holderHit.holder.dmin) },
                { label: "Seat", value: <>{holderHit.holder.seat}, coupling <Code>{holderHit.holder.hws}</Code></> },
                { label: "Coolant", value: holderHit.holder.cool === "IK" ? "Internal (IK)" : "None" },
                { label: "Catalogue", value: `p. ${holderHit.holder.page}` },
              ]}
            />
          </Card>
          <div>
            <SectionHead
              seat={holderHit.holder.seat}
              heading="Inserts that fit this holder"
              count={`${holderHit.inserts.length} ${holderHit.inserts.length === 1 ? "insert" : "inserts"}`}
              sub={`Every row shares seat ${holderHit.holder.seat} — coupling ${holderHit.holder.hws}.`}
            />
            <Table
              label="Inserts that fit this holder"
              columns={INSERT_COLUMNS}
              rows={insertRows(holderHit.inserts)}
              empty={{
                title: "No System 117 insert shares this coupling",
                body: `${holderHit.holder.pn} is a System 356 holder (catalogue p. ${holderHit.holder.page}), coupling ${holderHit.holder.hws}. Ask Horn for the matching System 356 insert.`,
              }}
            />
          </div>
        </>
      )}
      {!holderHit && <Empty title="No holder matches that filter">Clear the filter to see every holder.</Empty>}
    </Stack>
  );

  return (
    <Stack>
      <Prose>
        <h1>Horn System 117 broaching selector</h1>
        <p>Which insert cuts the width you need, and which holders will take it. From the Horn Stechdrehen catalogue, System 117 (p. 750–785).</p>
      </Prose>
      <Alert variant="info" title="How a seat works">
        An insert fits a holder when their seat letters match — same letter, same coupling code, it fits. The seat colour is only there to help you spot it faster.
      </Alert>
      <RadioGroup
        label="What is on your machine?"
        layout="buttons"
        items={GEOMETRY_ITEMS}
        value={setup}
        onValueChange={(v) => setSetup(v as Setup)}
      />
      <Tabs
        label="Lookup mode"
        value={tab}
        onValueChange={setTab}
        items={[
          { value: "width", label: "Find by width", content: widthPanel },
          { value: "seat", label: "Browse by seat", content: seatPanel },
          { value: "insert", label: "Look up an insert", content: insertPanel },
          { value: "holder", label: "Look up a holder", content: holderPanel },
        ]}
      />
    </Stack>
  );
}
