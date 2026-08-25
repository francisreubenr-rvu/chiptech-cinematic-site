/** Ledger and Workshop shared heading: keeps proof-led route sections materially consistent. */
export default function SectionHeading({ serial, eyebrow, title, detail }: { serial: string; eyebrow: string; title: React.ReactNode; detail?: string }) {
  return <header className="record-heading"><span className="record-serial">{serial}</span><div><p className="kicker">{eyebrow}</p><h1>{title}</h1>{detail && <p className="record-detail">{detail}</p>}</div></header>;
}
