/** Interactive next-workshop record: hover and keyboard focus reveal only the facts currently known. */
import { useState } from "react";
import { CalendarClock, ChevronDown, Mail, Radio } from "lucide-react";
import { nextWorkshop } from "@/lib/clubData";

export default function NextWorkshopDocket() {
  const [expanded, setExpanded] = useState(false);
  return <section className={`next-workshop ${expanded ? "is-expanded" : ""}`} aria-labelledby="next-workshop-title" onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}><button className="next-workshop-trigger" type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)} onFocus={() => setExpanded(true)} onBlur={() => setExpanded(false)}><span className="next-workshop-index"><Radio size={15} /> NEXT WORKSHOP</span><strong id="next-workshop-title">{nextWorkshop.title}</strong><span className="next-workshop-state">{nextWorkshop.state}</span><ChevronDown size={17} /></button><div className="next-workshop-detail"><div><CalendarClock size={18} /><p><b>Schedule record</b>{nextWorkshop.scheduleNote}</p></div><div><Mail size={18} /><p><b>Current route</b>{nextWorkshop.contactNote}</p></div><a href={`mailto:${nextWorkshop.contactEmail}`}>Ask about the next workshop <Mail size={15} /></a></div></section>;
}
