// A seat drawn as its taxonomy code: a small coloured box with the letter
// inside, never a bare colour and never a status badge. A dual seat ("C/D") is
// two boxes; a holder with no System 117 seat ("-") is an em dash with the
// words in SrOnly, because a box never ships without a code and a dash is not
// one. The fills come from --lt-horn-seat-* (app-tokens.css) via the seat-<l>
// classes in app.css.

import { SrOnly } from "@livetools/ui";

export function Seat({ seat }: { seat: string }) {
  if (seat === "-" || seat === "") {
    return (
      <span className="seat-nil">
        {"—"}
        <SrOnly> no System 117 seat</SrOnly>
      </span>
    );
  }
  const letters = seat.split("/");
  const boxes = letters.map((l) => {
    const cls = /^[A-Z]$/.test(l) ? ` seat-${l.toLowerCase()}` : "";
    return (
      <span key={l} className={`seat${cls}`}>
        {l}
      </span>
    );
  });
  if (letters.length > 1) return <span className="seat-pair">{boxes}</span>;
  return <>{boxes}</>;
}
