// Horn System 117 catalogue extract (Stechdrehen, p. 750-785).
// Transcribed and reviewed against commit f8190eb; values are byte-exact from
// that transcription, only re-typed here. Do not tidy or re-serialise values:
// numbers, strings and the "-" / "C/D" sentinels are all load-bearing.

export type Profile = "Keyway" | "Chamfer" | "Square SQ" | "Hexagon SW";
export type Geom = "A" | "B";

/** An insert. Every dimension is a catalogue string (kept as printed); `page`
 *  is the catalogue page number and `geom` is A (slotting head) or B
 *  (traditional broaching). `seat` is the seat letter (or a dual "C/D"); `his`
 *  is the holder-interface coupling code an insert and holder must share. */
export interface Insert {
  pn: string;
  profile: Profile;
  tol: string;
  nw: string;
  w: string;
  r: string;
  l: string;
  dmin: string;
  tmax: string;
  geom: Geom;
  seat: string;
  his: string;
  page: number;
  wk: string;
  url: string;
}

/** A holder. `hws` is its holder-width seat code (matched against an inserts
 *  `his`); `cool` is "IK" for internal coolant or "-" for none; `seat` is the
 *  seat letter or "-" for a holder with no System 117 seat. */
export interface Holder {
  pn: string;
  mach: string;
  d: string;
  l2: string;
  dmin: string;
  seat: string;
  hws: string;
  cool: string;
  page: number;
  note: string;
  url: string;
}

export const INSERTS: readonly Insert[] = [
  {"pn":"S117.0412.05.08.A1","profile":"Keyway","tol":"C11","nw":"4","w":"4.12","r":"0.5","l":"13","dmin":"14","tmax":"2.1","geom":"A","seat":"F","his":"117F805","page":764,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704120508a1-an45"},
  {"pn":"S117.0612.09.10.A1","profile":"Keyway","tol":"C11","nw":"6","w":"6.12","r":"0.85","l":"16","dmin":"22","tmax":"2.6","geom":"A","seat":"B","his":"117B005","page":764,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11706120910a1-an45"},
  {"pn":"S117.0713.11.10.A1","profile":"Keyway","tol":"C11","nw":"7","w":"7.13","r":"1.05","l":"16","dmin":"22","tmax":"3.3","geom":"A","seat":"B","his":"117B005","page":764,"wk":"7 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11707131110a1-an45"},
  {"pn":"S117.0813.11.10.A1","profile":"Keyway","tol":"C11","nw":"8","w":"8.13","r":"1.05","l":"16","dmin":"22","tmax":"3.4","geom":"A","seat":"B","his":"117B005","page":764,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11708131110a1-an45"},
  {"pn":"S117.1013.11.14.A1","profile":"Keyway","tol":"C11","nw":"10","w":"10.13","r":"1.05","l":"20.7","dmin":"30","tmax":"4.2","geom":"A","seat":"C","his":"117C605","page":764,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11710131114a1-an45"},
  {"pn":"S117.1215.14.14.A1","profile":"Keyway","tol":"C11","nw":"12","w":"12.15","r":"1.35","l":"20.7","dmin":"38","tmax":"5.1","geom":"A","seat":"D","his":"117D605","page":764,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712151414a1-an45"},
  {"pn":"S117.1215.18.14.A1","profile":"Keyway","tol":"C11","nw":"16","w":"12.15","r":"1.75","l":"20.7","dmin":"38","tmax":"6.6","geom":"A","seat":"D","his":"117D605","page":764,"wk":"16 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712151814a1-an45"},
  {"pn":"S117.1215.23.14.A1","profile":"Keyway","tol":"C11","nw":"24","w":"12.15","r":"2.25","l":"20.7","dmin":"38","tmax":"8.5","geom":"A","seat":"D","his":"117D605","page":764,"wk":"24 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712152314a1-an45"},
  {"pn":"S117.0310.04.08.B1","profile":"Keyway","tol":"C11","nw":"3","w":"3.1","r":"0.35","l":"13","dmin":"14","tmax":"2","geom":"B","seat":"G","his":"117G805","page":772,"wk":"3 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11703100408b1-an45"},
  {"pn":"S117.0412.05.08.B1","profile":"Keyway","tol":"C11","nw":"4","w":"4.12","r":"0.5","l":"13","dmin":"14","tmax":"2.1","geom":"B","seat":"F","his":"117F805","page":772,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704120508b1-an45"},
  {"pn":"S117.0612.09.10.B1","profile":"Keyway","tol":"C11","nw":"6","w":"6.12","r":"0.85","l":"16","dmin":"22","tmax":"2.6","geom":"B","seat":"B","his":"117B005","page":772,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11706120910b1-an45"},
  {"pn":"S117.0713.11.10.B1","profile":"Keyway","tol":"C11","nw":"7","w":"7.13","r":"1.05","l":"16","dmin":"22","tmax":"3.3","geom":"B","seat":"B","his":"117B005","page":772,"wk":"7 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11707131110b1-an45"},
  {"pn":"S117.0813.11.10.B1","profile":"Keyway","tol":"C11","nw":"8","w":"8.13","r":"1.05","l":"16","dmin":"22","tmax":"3.4","geom":"B","seat":"B","his":"117B005","page":772,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11708131110b1-an45"},
  {"pn":"S117.1013.11.14.B1","profile":"Keyway","tol":"C11","nw":"10","w":"10.13","r":"1.05","l":"20.7","dmin":"30","tmax":"4.2","geom":"B","seat":"C","his":"117C605","page":772,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11710131114b1-an45"},
  {"pn":"S117.1215.14.14.B1","profile":"Keyway","tol":"C11","nw":"12","w":"12.15","r":"1.35","l":"20.7","dmin":"38","tmax":"5.1","geom":"B","seat":"D","his":"117D605","page":772,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712151414b1-an45"},
  {"pn":"S117.1215.18.14.B1","profile":"Keyway","tol":"C11","nw":"16","w":"12.15","r":"1.75","l":"20.7","dmin":"38","tmax":"6.6","geom":"B","seat":"D","his":"117D605","page":772,"wk":"16 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712151814b1-an45"},
  {"pn":"S117.1215.23.14.B1","profile":"Keyway","tol":"C11","nw":"24","w":"12.15","r":"2.25","l":"20.7","dmin":"38","tmax":"8.5","geom":"B","seat":"D","his":"117D605","page":772,"wk":"24 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712152314b1-an45"},
  {"pn":"S117.1417.14.16.B1","profile":"Keyway","tol":"C11","nw":"14","w":"14.17","r":"1.35","l":"20.7","dmin":"40","tmax":"6.8","geom":"B","seat":"E","his":"117E605","page":772,"wk":"14 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11714171416b1-an45"},
  {"pn":"S117.1617.18.18.B1","profile":"Keyway","tol":"C11","nw":"16","w":"16.17","r":"1.75","l":"28.6","dmin":"40","tmax":"6.8","geom":"B","seat":"H","his":"117H005","page":772,"wk":"16 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11716171818b1-an45"},
  {"pn":"S117.1817.18.20.B1","profile":"Keyway","tol":"C11","nw":"18","w":"18.17","r":"1.75","l":"28.6","dmin":"50","tmax":"7.8","geom":"B","seat":"I","his":"117I005","page":772,"wk":"18 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11718171820b1-an45"},
  {"pn":"S117.2020.20.20.B1","profile":"Keyway","tol":"C11","nw":"20","w":"20.2","r":"1.95","l":"28.6","dmin":"50","tmax":"7.8","geom":"B","seat":"I","his":"117I005","page":772,"wk":"20 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11720202020b1-an45"},
  {"pn":"S117.0305.01.08.A1","profile":"Keyway","tol":"D10","nw":"3","w":"3.05","r":"0.12","l":"13","dmin":"14","tmax":"2","geom":"A","seat":"G","his":"117G805","page":765,"wk":"3 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11703050108a1-an45"},
  {"pn":"S117.0407.01.08.A1","profile":"Keyway","tol":"D10","nw":"4","w":"4.07","r":"0.12","l":"13","dmin":"14","tmax":"2.2","geom":"A","seat":"F","his":"117F805","page":765,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704070108a1-an45"},
  {"pn":"S117.0507.02.08.A1","profile":"Keyway","tol":"D10","nw":"5","w":"5.07","r":"0.2","l":"13","dmin":"14","tmax":"2.9","geom":"A","seat":"F","his":"117F805","page":765,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705070208a1-an45"},
  {"pn":"S117.0507.02.10.A1","profile":"Keyway","tol":"D10","nw":"5","w":"5.07","r":"0.2","l":"14.5","dmin":"17","tmax":"2.8","geom":"A","seat":"A","his":"117A005","page":765,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705070210a1-an45"},
  {"pn":"S117.0607.02.10.A1","profile":"Keyway","tol":"D10","nw":"6","w":"6.07","r":"0.2","l":"14.5","dmin":"17","tmax":"3.5","geom":"A","seat":"A","his":"117A005","page":765,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11706070210a1-an45"},
  {"pn":"S117.0808.02.10.A1","profile":"Keyway","tol":"D10","nw":"8","w":"8.08","r":"0.2","l":"16","dmin":"22","tmax":"4.3","geom":"A","seat":"B","his":"117B005","page":765,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11708080210a1-an45"},
  {"pn":"S117.1008.03.14.A1","profile":"Keyway","tol":"D10","nw":"10","w":"10.08","r":"0.3","l":"20.7","dmin":"30","tmax":"4.4","geom":"A","seat":"C","his":"117C605","page":765,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11710080314a1-an45"},
  {"pn":"S117.1210.03.14.A1","profile":"Keyway","tol":"D10","nw":"12","w":"12.1","r":"0.3","l":"20.7","dmin":"38","tmax":"5.9","geom":"A","seat":"D","his":"117D605","page":765,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712100314a1-an45"},
  {"pn":"S117.1410.03.16.A1","profile":"Keyway","tol":"D10","nw":"14","w":"14.1","r":"0.3","l":"20.7","dmin":"40","tmax":"6.8","geom":"A","seat":"E","his":"117E605","page":765,"wk":"14 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11714100316a1-an45"},
  {"pn":"S117.0305.01.08.B1","profile":"Keyway","tol":"D10","nw":"3","w":"3.05","r":"0.12","l":"13","dmin":"14","tmax":"2","geom":"B","seat":"G","his":"117G805","page":773,"wk":"3 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11703050108b1-an45"},
  {"pn":"S117.0407.01.08.B1","profile":"Keyway","tol":"D10","nw":"4","w":"4.07","r":"0.12","l":"13","dmin":"14","tmax":"2.2","geom":"B","seat":"F","his":"117F805","page":773,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704070108b1-an45"},
  {"pn":"S117.0507.02.08.B1","profile":"Keyway","tol":"D10","nw":"5","w":"5.07","r":"0.2","l":"13","dmin":"14","tmax":"2.9","geom":"B","seat":"F","his":"117F805","page":773,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705070208b1-an45"},
  {"pn":"S117.0507.02.10.B1","profile":"Keyway","tol":"D10","nw":"5","w":"5.07","r":"0.2","l":"14.5","dmin":"17","tmax":"2.8","geom":"B","seat":"A","his":"117A005","page":773,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705070210b1-an45"},
  {"pn":"S117.0607.02.10.B1","profile":"Keyway","tol":"D10","nw":"6","w":"6.07","r":"0.2","l":"14.5","dmin":"17","tmax":"3.5","geom":"B","seat":"A","his":"117A005","page":773,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11706070210b1-an45"},
  {"pn":"S117.0808.02.10.B1","profile":"Keyway","tol":"D10","nw":"8","w":"8.08","r":"0.2","l":"16","dmin":"22","tmax":"4.3","geom":"B","seat":"B","his":"117B005","page":773,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11708080210b1-an45"},
  {"pn":"S117.1008.03.14.B1","profile":"Keyway","tol":"D10","nw":"10","w":"10.08","r":"0.3","l":"20.7","dmin":"30","tmax":"4.4","geom":"B","seat":"C","his":"117C605","page":773,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11710080314b1-an45"},
  {"pn":"S117.1210.03.14.B1","profile":"Keyway","tol":"D10","nw":"12","w":"12.1","r":"0.3","l":"20.7","dmin":"38","tmax":"5.9","geom":"B","seat":"D","his":"117D605","page":773,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712100314b1-an45"},
  {"pn":"S117.1410.03.16.B1","profile":"Keyway","tol":"D10","nw":"14","w":"14.1","r":"0.3","l":"20.7","dmin":"40","tmax":"6.8","geom":"B","seat":"E","his":"117E605","page":773,"wk":"14 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11714100316b1-an45"},
  {"pn":"S117.1610.03.18.B1","profile":"Keyway","tol":"D10","nw":"16","w":"16.1","r":"0.3","l":"26.8","dmin":"40","tmax":"6.8","geom":"B","seat":"H","his":"117H005","page":773,"wk":"16 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11716100318b1-an45"},
  {"pn":"S117.1810.03.20.B1","profile":"Keyway","tol":"D10","nw":"18","w":"18.1","r":"0.3","l":"26.8","dmin":"50","tmax":"7.8","geom":"B","seat":"I","his":"117I005","page":773,"wk":"18 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11718100320b1-an45"},
  {"pn":"S117.2012.05.20.B1","profile":"Keyway","tol":"D10","nw":"20","w":"20.12","r":"0.5","l":"26.8","dmin":"50","tmax":"8.5","geom":"B","seat":"I","his":"117I005","page":773,"wk":"20 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11720120520b1-an45"},
  {"pn":"S117.0302.01.08.A1","profile":"Keyway","tol":"H9","nw":"3","w":"3.02","r":"0.12","l":"13","dmin":"14","tmax":"2","geom":"A","seat":"G","his":"117G805","page":766,"wk":"3 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11703020108a1-an45"},
  {"pn":"S117.0402.01.08.A1","profile":"Keyway","tol":"H9","nw":"4","w":"4.02","r":"0.12","l":"13","dmin":"14","tmax":"2.2","geom":"A","seat":"F","his":"117F805","page":766,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704020108a1-an45"},
  {"pn":"S117.0502.02.08.A1","profile":"Keyway","tol":"H9","nw":"5","w":"5.02","r":"0.2","l":"13","dmin":"14","tmax":"2.9","geom":"A","seat":"F","his":"117F805","page":766,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705020208a1-an45"},
  {"pn":"S117.0502.02.10.A1","profile":"Keyway","tol":"H9","nw":"5","w":"5.02","r":"0.2","l":"14.5","dmin":"17","tmax":"2.8","geom":"A","seat":"A","his":"117A005","page":766,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705020210a1-an45"},
  {"pn":"S117.0602.02.10.A1","profile":"Keyway","tol":"H9","nw":"6","w":"6.02","r":"0.2","l":"14.5","dmin":"17","tmax":"3.5","geom":"A","seat":"A","his":"117A005","page":766,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11706020210a1-an45"},
  {"pn":"S117.0803.02.10.A1","profile":"Keyway","tol":"H9","nw":"8","w":"8.03","r":"0.2","l":"16","dmin":"22","tmax":"4.3","geom":"A","seat":"B","his":"117B005","page":766,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11708030210a1-an45"},
  {"pn":"S117.1003.03.14.A1","profile":"Keyway","tol":"H9","nw":"10","w":"10.03","r":"0.3","l":"20.7","dmin":"30","tmax":"4.4","geom":"A","seat":"C","his":"117C605","page":766,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11710030314a1-an45"},
  {"pn":"S117.1203.03.14.A1","profile":"Keyway","tol":"H9","nw":"12","w":"12.04","r":"0.3","l":"20.7","dmin":"38","tmax":"5.9","geom":"A","seat":"D","his":"117D605","page":766,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712030314a1-an45"},
  {"pn":"S117.1403.03.16.A1","profile":"Keyway","tol":"H9","nw":"14","w":"14.04","r":"0.3","l":"20.7","dmin":"40","tmax":"6.8","geom":"A","seat":"E","his":"117E605","page":766,"wk":"14 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11714030316a1-an45"},
  {"pn":"S117.0302.01.08.B1","profile":"Keyway","tol":"H9","nw":"3","w":"3.02","r":"0.12","l":"13","dmin":"14","tmax":"2","geom":"B","seat":"G","his":"117G805","page":774,"wk":"3 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11703020108b1-an45"},
  {"pn":"S117.0402.01.08.B1","profile":"Keyway","tol":"H9","nw":"4","w":"4.02","r":"0.12","l":"13","dmin":"14","tmax":"2.2","geom":"B","seat":"F","his":"117F805","page":774,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704020108b1-an45"},
  {"pn":"S117.0502.02.08.B1","profile":"Keyway","tol":"H9","nw":"5","w":"5.02","r":"0.2","l":"13","dmin":"14","tmax":"2.9","geom":"B","seat":"F","his":"117F805","page":774,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705020208b1-an45"},
  {"pn":"S117.0502.02.10.B1","profile":"Keyway","tol":"H9","nw":"5","w":"5.02","r":"0.2","l":"14.5","dmin":"17","tmax":"2.8","geom":"B","seat":"A","his":"117A005","page":774,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705020210b1-an45"},
  {"pn":"S117.0602.02.10.B1","profile":"Keyway","tol":"H9","nw":"6","w":"6.02","r":"0.2","l":"14.5","dmin":"17","tmax":"3.5","geom":"B","seat":"A","his":"117A005","page":774,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11706020210b1-an45"},
  {"pn":"S117.0803.02.10.B1","profile":"Keyway","tol":"H9","nw":"8","w":"8.03","r":"0.2","l":"16","dmin":"22","tmax":"4.3","geom":"B","seat":"B","his":"117B005","page":774,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11708030210b1-an45"},
  {"pn":"S117.1003.03.14.B1","profile":"Keyway","tol":"H9","nw":"10","w":"10.03","r":"0.3","l":"20.7","dmin":"30","tmax":"4.4","geom":"B","seat":"C","his":"117C605","page":774,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11710030314b1-an45"},
  {"pn":"S117.1203.03.14.B1","profile":"Keyway","tol":"H9","nw":"12","w":"12.04","r":"0.3","l":"20.7","dmin":"38","tmax":"5.9","geom":"B","seat":"D","his":"117D605","page":774,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712030314b1-an45"},
  {"pn":"S117.1403.03.16.B1","profile":"Keyway","tol":"H9","nw":"14","w":"14.04","r":"0.3","l":"20.7","dmin":"40","tmax":"6.8","geom":"B","seat":"E","his":"117E605","page":774,"wk":"14 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11714030316b1-an45"},
  {"pn":"S117.1603.03.18.B1","profile":"Keyway","tol":"H9","nw":"16","w":"16.04","r":"0.3","l":"28.6","dmin":"40","tmax":"6.8","geom":"B","seat":"H","his":"117H005","page":774,"wk":"16 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11716030318b1-an45"},
  {"pn":"S117.1803.03.20.B1","profile":"Keyway","tol":"H9","nw":"18","w":"18.04","r":"0.3","l":"28.6","dmin":"50","tmax":"7.8","geom":"B","seat":"I","his":"117I005","page":774,"wk":"18 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11718030320b1-an45"},
  {"pn":"S117.2004.05.20.B1","profile":"Keyway","tol":"H9","nw":"20","w":"20.04","r":"0.5","l":"28.6","dmin":"50","tmax":"8.5","geom":"B","seat":"I","his":"117I005","page":774,"wk":"20 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11720040520b1-an45"},
  {"pn":"S117.0298.01.08.A1","profile":"Keyway","tol":"P9","nw":"3","w":"2.99","r":"0.12","l":"13","dmin":"14","tmax":"2","geom":"A","seat":"G","his":"117G805","page":767,"wk":"3 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11702980108a1-an45"},
  {"pn":"S117.0397.01.08.A1","profile":"Keyway","tol":"P9","nw":"4","w":"3.98","r":"0.12","l":"13","dmin":"14","tmax":"2.2","geom":"A","seat":"F","his":"117F805","page":767,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11703970108a1-an45"},
  {"pn":"S117.0497.02.08.A1","profile":"Keyway","tol":"P9","nw":"5","w":"4.98","r":"0.2","l":"13","dmin":"14","tmax":"2.9","geom":"A","seat":"F","his":"117F805","page":767,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704970208a1-an45"},
  {"pn":"S117.0497.02.10.A1","profile":"Keyway","tol":"P9","nw":"5","w":"4.98","r":"0.2","l":"14.5","dmin":"17","tmax":"2.8","geom":"A","seat":"A","his":"117A005","page":767,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704970210a1-an45"},
  {"pn":"S117.0597.02.10.A1","profile":"Keyway","tol":"P9","nw":"6","w":"5.98","r":"0.2","l":"14.5","dmin":"17","tmax":"3.5","geom":"A","seat":"A","his":"117A005","page":767,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705970210a1-an45"},
  {"pn":"S117.0796.02.10.A1","profile":"Keyway","tol":"P9","nw":"8","w":"7.98","r":"0.2","l":"16","dmin":"22","tmax":"4.3","geom":"A","seat":"B","his":"117B005","page":767,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11707960210a1-an45"},
  {"pn":"S117.0996.03.14.A1","profile":"Keyway","tol":"P9","nw":"10","w":"9.98","r":"0.3","l":"20.7","dmin":"30","tmax":"4.4","geom":"A","seat":"C","his":"117C605","page":767,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11709960314a1-an45"},
  {"pn":"S117.1196.03.14.A1","profile":"Keyway","tol":"P9","nw":"12","w":"11.97","r":"0.3","l":"20.7","dmin":"38","tmax":"5.9","geom":"A","seat":"D","his":"117D605","page":767,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11711960314a1-an45"},
  {"pn":"S117.1396.03.16.A1","profile":"Keyway","tol":"P9","nw":"14","w":"13.97","r":"0.3","l":"20.7","dmin":"40","tmax":"6.8","geom":"A","seat":"E","his":"117E605","page":767,"wk":"14 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11713960316a1-an45"},
  {"pn":"S117.0298.01.08.B1","profile":"Keyway","tol":"P9","nw":"3","w":"2.99","r":"0.12","l":"13","dmin":"14","tmax":"2","geom":"B","seat":"G","his":"117G805","page":775,"wk":"3 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11702980108b1-an45"},
  {"pn":"S117.0397.01.08.B1","profile":"Keyway","tol":"P9","nw":"4","w":"3.98","r":"0.12","l":"13","dmin":"14","tmax":"2.2","geom":"B","seat":"F","his":"117F805","page":775,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11703970108b1-an45"},
  {"pn":"S117.0497.02.08.B1","profile":"Keyway","tol":"P9","nw":"5","w":"4.98","r":"0.2","l":"13","dmin":"14","tmax":"2.9","geom":"B","seat":"F","his":"117F805","page":775,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704970208b1-an45"},
  {"pn":"S117.0497.02.10.B1","profile":"Keyway","tol":"P9","nw":"5","w":"4.98","r":"0.2","l":"14.5","dmin":"17","tmax":"2.8","geom":"B","seat":"A","his":"117A005","page":775,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704970210b1-an45"},
  {"pn":"S117.0597.02.10.B1","profile":"Keyway","tol":"P9","nw":"6","w":"5.98","r":"0.2","l":"14.5","dmin":"17","tmax":"3.5","geom":"B","seat":"A","his":"117A005","page":775,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705970210b1-an45"},
  {"pn":"S117.0796.02.10.B1","profile":"Keyway","tol":"P9","nw":"8","w":"7.98","r":"0.2","l":"16","dmin":"22","tmax":"4.3","geom":"B","seat":"B","his":"117B005","page":775,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11707960210b1-an45"},
  {"pn":"S117.0996.03.14.B1","profile":"Keyway","tol":"P9","nw":"10","w":"9.98","r":"0.3","l":"20.7","dmin":"30","tmax":"4.4","geom":"B","seat":"C","his":"117C605","page":775,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11709960314b1-an45"},
  {"pn":"S117.1196.03.14.B1","profile":"Keyway","tol":"P9","nw":"12","w":"11.97","r":"0.3","l":"20.7","dmin":"38","tmax":"5.9","geom":"B","seat":"D","his":"117D605","page":775,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11711960314b1-an45"},
  {"pn":"S117.1396.03.16.B1","profile":"Keyway","tol":"P9","nw":"14","w":"13.97","r":"0.3","l":"20.7","dmin":"40","tmax":"6.8","geom":"B","seat":"E","his":"117E605","page":775,"wk":"14 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11713960316b1-an45"},
  {"pn":"S117.1597.03.18.B1","profile":"Keyway","tol":"P9","nw":"16","w":"15.97","r":"0.3","l":"28.6","dmin":"40","tmax":"6.8","geom":"B","seat":"H","his":"117H005","page":775,"wk":"16 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11715970318b1-an45"},
  {"pn":"S117.1797.03.20.B1","profile":"Keyway","tol":"P9","nw":"18","w":"17.97","r":"0.3","l":"28.6","dmin":"50","tmax":"7.8","geom":"B","seat":"I","his":"117I005","page":775,"wk":"18 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11717970320b1-an45"},
  {"pn":"S117.1997.05.20.B1","profile":"Keyway","tol":"P9","nw":"20","w":"19.97","r":"0.5","l":"28.6","dmin":"50","tmax":"8.5","geom":"B","seat":"I","his":"117I005","page":775,"wk":"20 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11719970520b1-an45"},
  {"pn":"S117.0300.01.08.A1","profile":"Keyway","tol":"JS9","nw":"3","w":"3.01","r":"0.12","l":"13","dmin":"14","tmax":"2","geom":"A","seat":"G","his":"117G805","page":768,"wk":"3 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11703000108a1-an45"},
  {"pn":"S117.0400.01.08.A1","profile":"Keyway","tol":"JS9","nw":"4","w":"4.01","r":"0.12","l":"13","dmin":"14","tmax":"2.2","geom":"A","seat":"F","his":"117F805","page":768,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704000108a1-an45"},
  {"pn":"S117.0500.02.08.A1","profile":"Keyway","tol":"JS9","nw":"5","w":"5.01","r":"0.2","l":"13","dmin":"14","tmax":"2.9","geom":"A","seat":"F","his":"117F805","page":768,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705000208a1-an45"},
  {"pn":"S117.0500.02.10.A1","profile":"Keyway","tol":"JS9","nw":"5","w":"5.01","r":"0.2","l":"14.5","dmin":"17","tmax":"2.8","geom":"A","seat":"A","his":"117A005","page":768,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705000210a1-an45"},
  {"pn":"S117.0600.02.10.A1","profile":"Keyway","tol":"JS9","nw":"6","w":"6.01","r":"0.2","l":"14.5","dmin":"17","tmax":"3.5","geom":"A","seat":"A","his":"117A005","page":768,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11706000210a1-an45"},
  {"pn":"S117.0800.02.10.A1","profile":"Keyway","tol":"JS9","nw":"8","w":"8.01","r":"0.2","l":"16","dmin":"22","tmax":"4.3","geom":"A","seat":"B","his":"117B005","page":768,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11708000210a1-an45"},
  {"pn":"S117.1000.03.14.A1","profile":"Keyway","tol":"JS9","nw":"10","w":"10.01","r":"0.3","l":"20.7","dmin":"30","tmax":"4.4","geom":"A","seat":"C","his":"117C605","page":768,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11710000314a1-an45"},
  {"pn":"S117.1200.03.14.A1","profile":"Keyway","tol":"JS9","nw":"12","w":"12.01","r":"0.3","l":"20.7","dmin":"38","tmax":"5.9","geom":"A","seat":"D","his":"117D605","page":768,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712000314a1-an45"},
  {"pn":"S117.1200.05.14.A1","profile":"Keyway","tol":"JS9","nw":"12","w":"12.0","r":"0.5","l":"20.7","dmin":"38","tmax":"8.5","geom":"A","seat":"D","his":"117D605","page":768,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712000514a1-an45"},
  {"pn":"S117.1400.03.16.A1","profile":"Keyway","tol":"JS9","nw":"14","w":"14.01","r":"0.3","l":"20.7","dmin":"40","tmax":"6.8","geom":"A","seat":"E","his":"117E605","page":768,"wk":"14 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11714000316a1-an45"},
  {"pn":"S117.0300.01.08.B1","profile":"Keyway","tol":"JS9","nw":"3","w":"3.01","r":"0.12","l":"13","dmin":"14","tmax":"2","geom":"B","seat":"G","his":"117G805","page":776,"wk":"3 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11703000108b1-an45"},
  {"pn":"S117.0400.01.08.B1","profile":"Keyway","tol":"JS9","nw":"4","w":"4.01","r":"0.12","l":"13","dmin":"14","tmax":"2.2","geom":"B","seat":"F","his":"117F805","page":776,"wk":"4 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11704000108b1-an45"},
  {"pn":"S117.0500.02.08.B1","profile":"Keyway","tol":"JS9","nw":"5","w":"5.01","r":"0.2","l":"13","dmin":"14","tmax":"2.9","geom":"B","seat":"F","his":"117F805","page":776,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705000208b1-an45"},
  {"pn":"S117.0500.02.10.B1","profile":"Keyway","tol":"JS9","nw":"5","w":"5.01","r":"0.2","l":"14.5","dmin":"17","tmax":"2.8","geom":"B","seat":"A","his":"117A005","page":776,"wk":"5 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11705000210b1-an45"},
  {"pn":"S117.0600.02.10.B1","profile":"Keyway","tol":"JS9","nw":"6","w":"6.01","r":"0.2","l":"14.5","dmin":"17","tmax":"3.5","geom":"B","seat":"A","his":"117A005","page":776,"wk":"6 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11706000210b1-an45"},
  {"pn":"S117.0800.02.10.B1","profile":"Keyway","tol":"JS9","nw":"8","w":"8.01","r":"0.2","l":"16","dmin":"22","tmax":"4.3","geom":"B","seat":"B","his":"117B005","page":776,"wk":"8 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11708000210b1-an45"},
  {"pn":"S117.1000.03.14.B1","profile":"Keyway","tol":"JS9","nw":"10","w":"10.01","r":"0.3","l":"20.7","dmin":"30","tmax":"4.4","geom":"B","seat":"C","his":"117C605","page":776,"wk":"10 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11710000314b1-an45"},
  {"pn":"S117.1200.03.14.B1","profile":"Keyway","tol":"JS9","nw":"12","w":"12.01","r":"0.3","l":"20.7","dmin":"38","tmax":"5.9","geom":"B","seat":"D","his":"117D605","page":776,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712000314b1-an45"},
  {"pn":"S117.1200.05.14.B1","profile":"Keyway","tol":"JS9","nw":"12","w":"12.0","r":"0.5","l":"20.7","dmin":"38","tmax":"8.5","geom":"B","seat":"D","his":"117D605","page":776,"wk":"12 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11712000514b1-an45"},
  {"pn":"S117.1400.03.16.B1","profile":"Keyway","tol":"JS9","nw":"14","w":"14.01","r":"0.3","l":"20.7","dmin":"40","tmax":"6.8","geom":"B","seat":"E","his":"117E605","page":776,"wk":"14 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11714000316b1-an45"},
  {"pn":"S117.1601.03.18.B1","profile":"Keyway","tol":"JS9","nw":"16","w":"16.01","r":"0.3","l":"28.6","dmin":"40","tmax":"6.8","geom":"B","seat":"H","his":"117H005","page":776,"wk":"16 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11716010318b1-an45"},
  {"pn":"S117.1801.03.20.B1","profile":"Keyway","tol":"JS9","nw":"18","w":"18.01","r":"0.3","l":"28.6","dmin":"50","tmax":"7.8","geom":"B","seat":"I","his":"117I005","page":776,"wk":"18 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11718010320b1-an45"},
  {"pn":"S117.2002.05.20.B1","profile":"Keyway","tol":"JS9","nw":"20","w":"20.02","r":"0.5","l":"28.6","dmin":"50","tmax":"8.5","geom":"B","seat":"I","his":"117I005","page":776,"wk":"20 mm keyway","url":"https://www.horn-eshop.de/de-DE/product-de/s11720020520b1-an45"},
  {"pn":"S117.1545.10.A1","profile":"Chamfer","tol":"-","nw":"1.5","w":"1.5","r":"","l":"16","dmin":"17","tmax":"","geom":"A","seat":"A","his":"117A005","page":769,"wk":"1.5 mm chamfer","url":"https://www.horn-eshop.de/de-DE/product-de/s117154510a1-an45"},
  {"pn":"S117.2445.08.A1","profile":"Chamfer","tol":"-","nw":"2.4","w":"2.4","r":"","l":"13","dmin":"14","tmax":"","geom":"A","seat":"F","his":"117F805","page":769,"wk":"2.4 mm chamfer","url":"https://www.horn-eshop.de/de-DE/product-de/s117244508a1-an45"},
  {"pn":"S117.3045.10.A1","profile":"Chamfer","tol":"-","nw":"3","w":"3","r":"","l":"16","dmin":"22","tmax":"","geom":"A","seat":"B","his":"117B005","page":769,"wk":"3 mm chamfer","url":"https://www.horn-eshop.de/de-DE/product-de/s117304510a1-an45"},
  {"pn":"S117.6045.14.A1","profile":"Chamfer","tol":"-","nw":"6","w":"6","r":"","l":"20.7","dmin":"30","tmax":"","geom":"A","seat":"C/D","his":"117C605 + 117D605","page":769,"wk":"6 mm chamfer","url":"https://www.horn-eshop.de/de-DE/product-de/s117604514a1-an45"},
  {"pn":"S117.1545.10.B2","profile":"Chamfer","tol":"-","nw":"1.5","w":"1.5","r":"","l":"16","dmin":"17","tmax":"","geom":"B","seat":"A","his":"117A005","page":777,"wk":"1.5 mm chamfer","url":"https://www.horn-eshop.de/de-DE/product-de/s117154510b2-an45"},
  {"pn":"S117.2445.08.B2","profile":"Chamfer","tol":"-","nw":"2.4","w":"2.4","r":"","l":"13","dmin":"14","tmax":"","geom":"B","seat":"F","his":"117F805","page":777,"wk":"2.4 mm chamfer","url":"https://www.horn-eshop.de/de-DE/product-de/s117244508b2-an45"},
  {"pn":"S117.3045.10.B2","profile":"Chamfer","tol":"-","nw":"3","w":"3","r":"","l":"16","dmin":"22","tmax":"","geom":"B","seat":"B","his":"117B005","page":777,"wk":"3 mm chamfer","url":"https://www.horn-eshop.de/de-DE/product-de/s117304510b2-an45"},
  {"pn":"S117.6045.14.B2","profile":"Chamfer","tol":"-","nw":"6","w":"6","r":"","l":"20.7","dmin":"30","tmax":"","geom":"B","seat":"C/D","his":"117C605 + 117D605","page":777,"wk":"6 mm chamfer","url":"https://www.horn-eshop.de/de-DE/product-de/s117604514b2-an45"},
  {"pn":"S117.SQ.1315.08.A1","profile":"Square SQ","tol":"-","nw":"13-15","w":"6.61-7.84","r":"0.2","l":"13","dmin":"13.5","tmax":"","geom":"A","seat":"O","his":"117O805","page":770,"wk":"13-15 mm square (SQ)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sq131508a1-an45"},
  {"pn":"S117.SQ.1517.10.A1","profile":"Square SQ","tol":"-","nw":"15-17","w":"7.84-9.08","r":"0.2","l":"14.8","dmin":"15.5","tmax":"","geom":"A","seat":"P","his":"117P005","page":770,"wk":"15-17 mm square (SQ)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sq151710a1-an45"},
  {"pn":"S117.SQ.1719.12.A1","profile":"Square SQ","tol":"-","nw":"17-19","w":"9.08-10.33","r":"0.2","l":"16.7","dmin":"17.5","tmax":"","geom":"A","seat":"Q","his":"117Q205","page":770,"wk":"17-19 mm square (SQ)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sq171912a1-an45"},
  {"pn":"S117.SQ.1922.16.A1","profile":"Square SQ","tol":"-","nw":"19-22","w":"10.33-12.22","r":"0.2","l":"19","dmin":"19.5","tmax":"","geom":"A","seat":"R","his":"117R605","page":770,"wk":"19-22 mm square (SQ)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sq192216a1-an45"},
  {"pn":"S117.SQ.1315.08.B2","profile":"Square SQ","tol":"-","nw":"13-15","w":"6.61-7.84","r":"0.2","l":"13","dmin":"13.5","tmax":"","geom":"B","seat":"O","his":"117O805","page":778,"wk":"13-15 mm square (SQ)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sq131508b2-an45"},
  {"pn":"S117.SQ.1517.10.B2","profile":"Square SQ","tol":"-","nw":"15-17","w":"7.84-9.08","r":"0.2","l":"14.8","dmin":"15.5","tmax":"","geom":"B","seat":"P","his":"117P005","page":778,"wk":"15-17 mm square (SQ)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sq151710b2-an45"},
  {"pn":"S117.SQ.1719.12.B2","profile":"Square SQ","tol":"-","nw":"17-19","w":"9.08-10.33","r":"0.2","l":"16.7","dmin":"17.5","tmax":"","geom":"B","seat":"Q","his":"117Q205","page":778,"wk":"17-19 mm square (SQ)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sq171912b2-an45"},
  {"pn":"S117.SQ.1922.16.B2","profile":"Square SQ","tol":"-","nw":"19-22","w":"10.33-12.22","r":"0.2","l":"19","dmin":"19.5","tmax":"","geom":"B","seat":"R","his":"117R605","page":778,"wk":"19-22 mm square (SQ)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sq192216b2-an45"},
  {"pn":"S117.SW14.08.A1","profile":"Hexagon SW","tol":"-","nw":"14-16","w":"4.94-5.80","r":"0.2","l":"13","dmin":"SW+r","tmax":"1.9","geom":"A","seat":"K","his":"117K805","page":771,"wk":"14-16 mm hexagon (SW)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sw1408a1-an45"},
  {"pn":"S117.SW16.10.A1","profile":"Hexagon SW","tol":"-","nw":"16-22","w":"5.80-8.43","r":"0.2","l":"14","dmin":"SW+r","tmax":"2.5","geom":"A","seat":"L","his":"117L005","page":771,"wk":"16-22 mm hexagon (SW)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sw1610a1-an45"},
  {"pn":"S117.SW24.12.A1","profile":"Hexagon SW","tol":"-","nw":"24-27","w":"8.70-10.00","r":"0.3","l":"17","dmin":"SW+r","tmax":"3","geom":"A","seat":"M","his":"117M205","page":771,"wk":"24-27 mm hexagon (SW)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sw2412a1-an45"},
  {"pn":"S117.SW30.16.A1","profile":"Hexagon SW","tol":"-","nw":"30-36","w":"11.32-13.97","r":"0.3","l":"20.7","dmin":"SW+r","tmax":"4.2","geom":"A","seat":"N","his":"117N605","page":771,"wk":"30-36 mm hexagon (SW)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sw3016a1-an45"},
  {"pn":"S117.SW14.08.B2","profile":"Hexagon SW","tol":"-","nw":"14-16","w":"4.94-5.80","r":"0.2","l":"13","dmin":"SW+r","tmax":"1.9","geom":"B","seat":"K","his":"117K805","page":779,"wk":"14-16 mm hexagon (SW)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sw1408b2-an45"},
  {"pn":"S117.SW16.10.B2","profile":"Hexagon SW","tol":"-","nw":"16-22","w":"5.80-8.43","r":"0.2","l":"14","dmin":"SW+r","tmax":"2.5","geom":"B","seat":"L","his":"117L005","page":779,"wk":"16-22 mm hexagon (SW)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sw1610b2-an45"},
  {"pn":"S117.SW24.12.B2","profile":"Hexagon SW","tol":"-","nw":"24-27","w":"8.70-10.00","r":"0.3","l":"17","dmin":"SW+r","tmax":"3","geom":"B","seat":"M","his":"117M205","page":779,"wk":"24-27 mm hexagon (SW)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sw2412b2-an45"},
  {"pn":"S117.SW30.16.B2","profile":"Hexagon SW","tol":"-","nw":"30-36","w":"11.32-13.97","r":"0.3","l":"20.7","dmin":"SW+r","tmax":"4.2","geom":"B","seat":"N","his":"117N605","page":779,"wk":"30-36 mm hexagon (SW)","url":"https://www.horn-eshop.de/de-DE/product-de/s117sw3016b2-an45"},
];

export const HOLDERS: readonly Holder[] = [
  {"pn":"SHM117.1416.3.08","mach":"Standard CNC shank","d":"16","l2":"55","dmin":"14","seat":"F","hws":"117F805","cool":"-","page":752,"note":"Heavy-metal shank (vibration-damped)","url":"https://www.horn-eshop.de/de-DE/product-de/shm1171416308"},
  {"pn":"SH117.1425.1.3.08.IK","mach":"Standard CNC shank","d":"25","l2":"20","dmin":"14","seat":"G","hws":"117G805","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh11714251308ik"},
  {"pn":"SH117.1425.2.3.08.IK","mach":"Standard CNC shank","d":"25","l2":"30","dmin":"14","seat":"G","hws":"117G805","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh11714252308ik"},
  {"pn":"SH117.1425.3.3.08.IK","mach":"Standard CNC shank","d":"25","l2":"40","dmin":"14","seat":"G","hws":"117G805","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh11714253308ik"},
  {"pn":"SH117.1425.1.08.IK","mach":"Standard CNC shank","d":"25","l2":"30","dmin":"14","seat":"F","hws":"117F805","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171425108ik"},
  {"pn":"SH117.1425.2.08.IK","mach":"Standard CNC shank","d":"25","l2":"40","dmin":"14","seat":"F","hws":"117F805","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171425208ik"},
  {"pn":"SH117.1425.3.08.IK","mach":"Standard CNC shank","d":"25","l2":"70","dmin":"14","seat":"F","hws":"117F805","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171425308ik"},
  {"pn":"SH117.1425.4.08.IK","mach":"Standard CNC shank","d":"25","l2":"85","dmin":"14","seat":"F","hws":"117F805","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171425408ik"},
  {"pn":"SH117.1725.1.10.IK","mach":"Standard CNC shank","d":"25","l2":"40","dmin":"17","seat":"A","hws":"117A005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171725110ik"},
  {"pn":"SH117.1725.2.10.IK","mach":"Standard CNC shank","d":"25","l2":"55","dmin":"17","seat":"A","hws":"117A005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171725210ik"},
  {"pn":"SH117.1725.3.10.IK","mach":"Standard CNC shank","d":"25","l2":"70","dmin":"17","seat":"A","hws":"117A005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171725310ik"},
  {"pn":"SH117.1725.4.10.IK","mach":"Standard CNC shank","d":"25","l2":"85","dmin":"17","seat":"A","hws":"117A005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171725410ik"},
  {"pn":"SH117.1725.5.10.IK","mach":"Standard CNC shank","d":"25","l2":"100","dmin":"17","seat":"A","hws":"117A005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171725510ik"},
  {"pn":"SH117.0025.1.10.IK","mach":"Standard CNC shank","d":"25","l2":"50","dmin":"22","seat":"B","hws":"117B005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170025110ik"},
  {"pn":"SH117.0025.2.10.IK","mach":"Standard CNC shank","d":"25","l2":"70","dmin":"22","seat":"B","hws":"117B005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170025210ik"},
  {"pn":"SH117.0025.3.10.IK","mach":"Standard CNC shank","d":"25","l2":"90","dmin":"22","seat":"B","hws":"117B005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170025310ik"},
  {"pn":"SH117.0025.4.10.IK","mach":"Standard CNC shank","d":"25","l2":"110","dmin":"22","seat":"B","hws":"117B005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170025410ik"},
  {"pn":"SH117.0025.5.10.IK","mach":"Standard CNC shank","d":"25","l2":"130","dmin":"22","seat":"B","hws":"117B005","cool":"IK","page":752,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170025510ik"},
  {"pn":"SH117.0032.1.16.IK","mach":"Standard CNC shank","d":"32","l2":"50","dmin":"38","seat":"D","hws":"117D605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170032116ik"},
  {"pn":"SH117.0032.2.16.IK","mach":"Standard CNC shank","d":"32","l2":"75","dmin":"38","seat":"D","hws":"117D605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170032216ik"},
  {"pn":"SH117.0032.3.16.IK","mach":"Standard CNC shank","d":"32","l2":"100","dmin":"38","seat":"D","hws":"117D605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170032316ik"},
  {"pn":"SH117.0032.4.16.IK","mach":"Standard CNC shank","d":"32","l2":"125","dmin":"38","seat":"D","hws":"117D605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170032416ik"},
  {"pn":"SH117.0032.5.16.IK","mach":"Standard CNC shank","d":"32","l2":"150","dmin":"38","seat":"D","hws":"117D605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170032516ik"},
  {"pn":"SH117.0032.6.16.IK","mach":"Standard CNC shank","d":"32","l2":"175","dmin":"38","seat":"D","hws":"117D605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170032616ik"},
  {"pn":"SH117.0032.7.16.IK","mach":"Standard CNC shank","d":"32","l2":"200","dmin":"38","seat":"D","hws":"117D605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170032716ik"},
  {"pn":"SH117.3032.1.16.IK","mach":"Standard CNC shank","d":"32","l2":"50","dmin":"30","seat":"C","hws":"117C605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1173032116ik"},
  {"pn":"SH117.3032.2.16.IK","mach":"Standard CNC shank","d":"32","l2":"75","dmin":"30","seat":"C","hws":"117C605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1173032216ik"},
  {"pn":"SH117.3032.3.16.IK","mach":"Standard CNC shank","d":"32","l2":"100","dmin":"30","seat":"C","hws":"117C605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1173032316ik"},
  {"pn":"SH117.3032.4.16.IK","mach":"Standard CNC shank","d":"32","l2":"125","dmin":"30","seat":"C","hws":"117C605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1173032416ik"},
  {"pn":"SH117.3032.5.16.IK","mach":"Standard CNC shank","d":"32","l2":"150","dmin":"30","seat":"C","hws":"117C605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1173032516ik"},
  {"pn":"SH117.3032.6.16.IK","mach":"Standard CNC shank","d":"32","l2":"175","dmin":"30","seat":"C","hws":"117C605","cool":"IK","page":753,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1173032616ik"},
  {"pn":"SH117.4032.1.16.IK","mach":"Standard CNC shank","d":"32","l2":"50","dmin":"40","seat":"E","hws":"117E605","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032116ik"},
  {"pn":"SH117.4032.2.16.IK","mach":"Standard CNC shank","d":"32","l2":"75","dmin":"40","seat":"E","hws":"117E605","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032216ik"},
  {"pn":"SH117.4032.3.16.IK","mach":"Standard CNC shank","d":"32","l2":"100","dmin":"40","seat":"E","hws":"117E605","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032316ik"},
  {"pn":"SH117.4032.4.16.IK","mach":"Standard CNC shank","d":"32","l2":"125","dmin":"40","seat":"E","hws":"117E605","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032416ik"},
  {"pn":"SH117.4032.5.16.IK","mach":"Standard CNC shank","d":"32","l2":"150","dmin":"40","seat":"E","hws":"117E605","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032516ik"},
  {"pn":"SH117.4032.6.16.IK","mach":"Standard CNC shank","d":"32","l2":"175","dmin":"40","seat":"E","hws":"117E605","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032616ik"},
  {"pn":"SH117.4032.7.16.IK","mach":"Standard CNC shank","d":"32","l2":"200","dmin":"40","seat":"E","hws":"117E605","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032716ik"},
  {"pn":"SH117.4032.1.20.IK","mach":"Standard CNC shank","d":"32","l2":"50","dmin":"40","seat":"H","hws":"117H005","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032120ik"},
  {"pn":"SH117.4032.2.20.IK","mach":"Standard CNC shank","d":"32","l2":"100","dmin":"40","seat":"H","hws":"117H005","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032220ik"},
  {"pn":"SH117.4032.3.20.IK","mach":"Standard CNC shank","d":"32","l2":"150","dmin":"40","seat":"H","hws":"117H005","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1174032320ik"},
  {"pn":"SH117.5040.1.20.IK","mach":"Standard CNC shank","d":"40","l2":"50","dmin":"50","seat":"I","hws":"117I005","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1175040120ik"},
  {"pn":"SH117.5040.2.20.IK","mach":"Standard CNC shank","d":"40","l2":"100","dmin":"50","seat":"I","hws":"117I005","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1175040220ik"},
  {"pn":"SH117.5040.3.20.IK","mach":"Standard CNC shank","d":"40","l2":"150","dmin":"50","seat":"I","hws":"117I005","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1175040320ik"},
  {"pn":"SH117.5040.4.20.IK","mach":"Standard CNC shank","d":"40","l2":"200","dmin":"50","seat":"I","hws":"117I005","cool":"IK","page":754,"note":"","url":"https://www.horn-eshop.de/de-DE/product-de/sh1175040420ik"},
  {"pn":"SH117.1416.E1.08","mach":"Benz EWS-Slot / BENZ LinA","d":"16","l2":"35","dmin":"14","seat":"F","hws":"117F805","cool":"-","page":755,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171416e108"},
  {"pn":"SH117.1716.E0.10","mach":"Benz EWS-Slot / BENZ LinA","d":"16","l2":"20","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":755,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171716e010"},
  {"pn":"SH117.1716.E1.10","mach":"Benz EWS-Slot / BENZ LinA","d":"16","l2":"35","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":755,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171716e110"},
  {"pn":"SH117.1716.E2.10","mach":"Benz EWS-Slot / BENZ LinA","d":"16","l2":"40","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":755,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171716e210"},
  {"pn":"SH117.1716.E3.10","mach":"Benz EWS-Slot / BENZ LinA","d":"16","l2":"53","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":755,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171716e310"},
  {"pn":"SH117.0016.E1.10","mach":"Benz EWS-Slot / BENZ LinA","d":"16","l2":"35","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":755,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170016e110"},
  {"pn":"SH117.0016.E2.10","mach":"Benz EWS-Slot / BENZ LinA","d":"16","l2":"40","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":755,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170016e210"},
  {"pn":"SH117.0016.E3.10","mach":"Benz EWS-Slot / BENZ LinA","d":"16","l2":"53","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":755,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170016e310"},
  {"pn":"SH117.1412.S1.08","mach":"Schwarzer device","d":"12","l2":"25","dmin":"14","seat":"F","hws":"117F805","cool":"-","page":756,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171412s108"},
  {"pn":"SH117.1412.S2.08","mach":"Schwarzer device","d":"12","l2":"35","dmin":"14","seat":"F","hws":"117F805","cool":"-","page":756,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171412s208"},
  {"pn":"H117.1712.1439","mach":"Schwarzer device","d":"12","l2":"25","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":756,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/h11717121439"},
  {"pn":"H117.1712.1407","mach":"Schwarzer device","d":"12","l2":"35","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":756,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/h11717121407"},
  {"pn":"H117.2212.1441","mach":"Schwarzer device","d":"12","l2":"25","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":756,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/h11722121441"},
  {"pn":"H117.2212.1442","mach":"Schwarzer device","d":"12","l2":"35","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":756,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/h11722121442"},
  {"pn":"H117.3012.1440","mach":"Schwarzer device","d":"12","l2":"25","dmin":"30","seat":"C","hws":"117C605","cool":"-","page":756,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/h11730121440"},
  {"pn":"H117.3012.1419","mach":"Schwarzer device","d":"12","l2":"35","dmin":"30","seat":"C","hws":"117C605","cool":"-","page":756,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/h11730121419"},
  {"pn":"SH117.0932.S.08","mach":"Schwarzer 2in1","d":"15","l2":"32","dmin":"14","seat":"F","hws":"117F805","cool":"-","page":757,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1170932s08"},
  {"pn":"SH117.1532.S.10","mach":"Schwarzer 2in1","d":"15","l2":"32","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":757,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171532s10"},
  {"pn":"SH117.1538.S.16","mach":"Schwarzer 2in1","d":"15","l2":"38","dmin":"30","seat":"C","hws":"117C605","cool":"-","page":757,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171538s16"},
  {"pn":"SH117.1544.S.16","mach":"Schwarzer 2in1","d":"15","l2":"44","dmin":"30","seat":"C","hws":"117C605","cool":"-","page":757,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171544s16"},
  {"pn":"SH117.2218.A1.10","mach":"AP2R / AP3R device","d":"18","l2":"24","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":758,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172218a110"},
  {"pn":"SH117.2218.A2.10","mach":"AP2R / AP3R device","d":"18","l2":"33","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":758,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172218a210"},
  {"pn":"SH117.2218.A3.10","mach":"AP2R / AP3R device","d":"18","l2":"44","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":758,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172218a310"},
  {"pn":"SH117.1416.W1.08","mach":"WTO-32 unit","d":"16","l2":"35","dmin":"14","seat":"F","hws":"117F805","cool":"-","page":759,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171416w108"},
  {"pn":"SH117.1716.W1.10","mach":"WTO-32 unit","d":"16","l2":"35","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":759,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171716w110"},
  {"pn":"SH117.2216.W1.10","mach":"WTO-32 unit","d":"16","l2":"35","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":759,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172216w110"},
  {"pn":"SH117.2616.W1.16","mach":"WTO-32 unit","d":"16","l2":"35","dmin":"26","seat":"C","hws":"117C605","cool":"-","page":759,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172616w116"},
  {"pn":"SH117.1416.W2.08","mach":"WTO-52 unit","d":"16","l2":"55","dmin":"14","seat":"F","hws":"117F805","cool":"-","page":759,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171416w208"},
  {"pn":"SH117.1716.W2.10","mach":"WTO-52 unit","d":"16","l2":"55","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":759,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171716w210"},
  {"pn":"SH117.2216.W2.10","mach":"WTO-52 unit","d":"16","l2":"55","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":759,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172216w210"},
  {"pn":"SH117.2616.W2.16","mach":"WTO-52 unit","d":"16","l2":"55","dmin":"26","seat":"C","hws":"117C605","cool":"-","page":759,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172616w216"},
  {"pn":"SH117.1714.W3.10","mach":"WTO-26 unit","d":"14","l2":"28","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":759,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171714w310"},
  {"pn":"SH117.1716.MT2.10","mach":"MT Marchetti device","d":"16","l2":"50","dmin":"17","seat":"A","hws":"117A005","cool":"-","page":760,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171716mt210"},
  {"pn":"SH117.2216.MT2.10","mach":"MT Marchetti device","d":"16","l2":"50","dmin":"22","seat":"B","hws":"117B005","cool":"-","page":760,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172216mt210"},
  {"pn":"SH117.3016.MT2.16","mach":"MT Marchetti device","d":"16","l2":"50","dmin":"30","seat":"C","hws":"117C605","cool":"-","page":760,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1173016mt216"},
  {"pn":"SH117.1420.E5.08.IK","mach":"Benz EWSP20 / LinA 4.0","d":"20","l2":"32","dmin":"14","seat":"F","hws":"117F805","cool":"IK","page":761,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171420e508ik"},
  {"pn":"SH117.1420.E6.08.IK","mach":"Benz EWSP20 / LinA 4.0","d":"20","l2":"51","dmin":"14","seat":"F","hws":"117F805","cool":"IK","page":761,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171420e608ik"},
  {"pn":"SH117.1720.E5.10.IK","mach":"Benz EWSP20 / LinA 4.0","d":"20","l2":"32","dmin":"17","seat":"A","hws":"117A005","cool":"IK","page":761,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171720e510ik"},
  {"pn":"SH117.1720.E6.10.IK","mach":"Benz EWSP20 / LinA 4.0","d":"20","l2":"51","dmin":"17","seat":"A","hws":"117A005","cool":"IK","page":761,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171720e610ik"},
  {"pn":"SH117.2220.E5.10.IK","mach":"Benz EWSP20 / LinA 4.0","d":"20","l2":"32","dmin":"22","seat":"B","hws":"117B005","cool":"IK","page":761,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172220e510ik"},
  {"pn":"SH117.2220.E6.10.IK","mach":"Benz EWSP20 / LinA 4.0","d":"20","l2":"51","dmin":"22","seat":"B","hws":"117B005","cool":"IK","page":761,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1172220e610ik"},
  {"pn":"SH117.3020.E5.16.IK","mach":"Benz EWSP20 / LinA 4.0","d":"20","l2":"32","dmin":"30","seat":"C","hws":"117C605","cool":"IK","page":761,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1173020e516ik"},
  {"pn":"SH117.3020.E6.16.IK","mach":"Benz EWSP20 / LinA 4.0","d":"20","l2":"51","dmin":"30","seat":"C","hws":"117C605","cool":"IK","page":761,"note":"Machine-specific","url":"https://www.horn-eshop.de/de-DE/product-de/sh1173020e616ik"},
  {"pn":"SH117.1325.SQ.1.08.IK","mach":"Standard CNC shank","d":"25","l2":"25","dmin":"13.5","seat":"O","hws":"117O805","cool":"IK","page":762,"note":"Square broaching","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171325sq108ik"},
  {"pn":"SH117.1525.SQ.1.10.IK","mach":"Standard CNC shank","d":"25","l2":"25","dmin":"15.5","seat":"P","hws":"117P005","cool":"IK","page":762,"note":"Square broaching","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171525sq110ik"},
  {"pn":"SH117.1732.SQ.1.12.IK","mach":"Standard CNC shank","d":"32","l2":"30","dmin":"17.5","seat":"Q","hws":"117Q205","cool":"IK","page":762,"note":"Square broaching","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171732sq112ik"},
  {"pn":"SH117.1932.SQ.1.16.IK","mach":"Standard CNC shank","d":"32","l2":"35","dmin":"19.5","seat":"R","hws":"117R605","cool":"IK","page":762,"note":"Square broaching","url":"https://www.horn-eshop.de/de-DE/product-de/sh1171932sq116ik"},
  {"pn":"SH117.1425.30.1.08.IK","mach":"Standard CNC shank","d":"25","l2":"20","dmin":"14.2","seat":"K","hws":"117K805","cool":"IK","page":763,"note":"Hexagon broaching 30 deg","url":"https://www.horn-eshop.de/de-DE/product-de/sh117142530108ik"},
  {"pn":"SH117.1625.30.1.10.IK","mach":"Standard CNC shank","d":"25","l2":"25","dmin":"16.2","seat":"L","hws":"117L005","cool":"IK","page":763,"note":"Hexagon broaching 30 deg","url":"https://www.horn-eshop.de/de-DE/product-de/sh117162530110ik"},
  {"pn":"SH117.2432.30.1.12.IK","mach":"Standard CNC shank","d":"32","l2":"30","dmin":"24.3","seat":"M","hws":"117M205","cool":"IK","page":763,"note":"Hexagon broaching 30 deg","url":"https://www.horn-eshop.de/de-DE/product-de/sh117243230112ik"},
  {"pn":"SH117.3032.30.1.16.IK","mach":"Standard CNC shank","d":"32","l2":"40","dmin":"30.5","seat":"N","hws":"117N605","cool":"IK","page":763,"note":"Hexagon broaching 30 deg","url":"https://www.horn-eshop.de/de-DE/product-de/sh117303230116ik"},
  {"pn":"356.3018.A.05","mach":"AP2R / AP3R device","d":"18","l2":"34","dmin":"27.5","seat":"-","hws":"31505R","cool":"-","page":780,"note":"System 356 - coupling 31505R, NOT an S117 insert seat","url":"https://www.horn-eshop.de/de-DE/product-de/3563018a05"},
];

export const WIDTHS: readonly string[] = [
  "3 mm keyway",
  "4 mm keyway",
  "5 mm keyway",
  "6 mm keyway",
  "7 mm keyway",
  "8 mm keyway",
  "10 mm keyway",
  "12 mm keyway",
  "14 mm keyway",
  "16 mm keyway",
  "18 mm keyway",
  "20 mm keyway",
  "24 mm keyway",
  "1.5 mm chamfer",
  "2.4 mm chamfer",
  "3 mm chamfer",
  "6 mm chamfer",
  "13-15 mm square (SQ)",
  "15-17 mm square (SQ)",
  "17-19 mm square (SQ)",
  "19-22 mm square (SQ)",
  "14-16 mm hexagon (SW)",
  "16-22 mm hexagon (SW)",
  "24-27 mm hexagon (SW)",
  "30-36 mm hexagon (SW)",
];

/** What the machine-geometry codes mean, in the words the app shows. */
export const SETUP_NAME: Record<Geom, string> = {
  A: "slotting head (A)",
  B: "traditional broaching (B)",
};

export const GEOM_LABEL: Record<Geom, string> = {
  A: "Slotting head",
  B: "Traditional",
};

/** The seat picker, in three printed bands. Each entry is a coupling code; the
 *  seat letter is its fourth character. Kept as one ordered list so the picker
 *  reads smallest-to-largest within each band. */
export const SEAT_GROUPS: readonly (readonly [string, readonly string[]])[] = [
  ["Keyway seats, smallest to largest", ["117G805", "117F805", "117A005", "117B005", "117C605", "117D605", "117E605", "117H005", "117I005"]],
  ["Hexagon (SW)", ["117K805", "117L005", "117M205", "117N605"]],
  ["Square (SQ)", ["117O805", "117P005", "117Q205", "117R605"]],
];
