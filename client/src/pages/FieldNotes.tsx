/** Field Notes: a stepped editorial visual-study template that avoids presenting unverified visual material as an official project record. */
import { ArrowRight, ExternalLink, FileWarning, Image as ImageIcon, Layers3 } from "lucide-react";
import { Link } from "wouter";
import ClubLayout from "@/components/ClubLayout";
import SectionHeading from "@/components/SectionHeading";

const heroLoop = "/manus-storage/chiptech-hero-loop_ce1b0b56.mp4";
const evidenceImage = "/manus-storage/chiptech-circuitrix-rvu-record_cb74090e.webp";
const workshopPoster = "/manus-storage/chiptech-technical-film-poster_7b2ee164.jpg";

const plates = [
  { serial: "PLATE 01", type: "VISUAL STUDY", title: "The surface before the build", copy: "A visual study of the workshop bench, where components, tools, and unfinished questions share the same physical frame.", asset: "video" },
  { serial: "PLATE 02", type: "PUBLIC RECORD", title: "The moment after the workshop", copy: "An RV University record anchors the page in a documented event rather than an invented highlight reel.", asset: "image" },
  { serial: "PLATE 03", type: "PROCESS MODEL", title: "Place. Connect. Test.", copy: "A miniature visual model of an LED test captures the discipline of a first working signal. It is a visual study, not a published ChipTech project record.", asset: "poster" },
] as const;

export default function FieldNotes() {
  return <ClubLayout><section className="route-hero field-notes-hero"><div className="route-mark">FIELD<br />05</div><SectionHeading serial="05 / FIELD NOTES" eyebrow="A VISUAL STUDY OF BUILD CULTURE" title={<>THE WORK BEGINS<br />BEFORE THE <em>ARTIFACT.</em></>} detail="These plates establish the editorial format for future approved project photo essays. They are deliberately labelled as a visual study until the club provides an official project record." /><aside className="route-evidence-docket field-notes-docket"><span>RECORD CLASS</span><strong>VISUAL STUDY</strong><p>Not a published project claim. Approved build artifacts will replace these plates when available.</p><i>ARCHIVE TEMPLATE / READY</i></aside></section><section className="photo-essay route-section" aria-label="Project photo essay plates">{plates.map((plate, index) => <article className={`essay-plate essay-plate-${index + 1}`} key={plate.serial}><div className="essay-caption"><span>{plate.serial} / {plate.type}</span><h2>{plate.title}</h2><p>{plate.copy}</p>{index === 1 && <a href="https://rvu.edu.in/events/circuitrix-light-up-rvu/" target="_blank" rel="noreferrer">Open supporting RVU record <ExternalLink size={15} /></a>}</div><figure>{plate.asset === "video" && <video autoPlay muted loop playsInline poster={evidenceImage} aria-label="Electronics bench visual study"><source src={heroLoop} type="video/mp4" /></video>}{plate.asset === "image" && <img src={evidenceImage} alt="RV University Circuitrix event record" />}{plate.asset === "poster" && <img src={workshopPoster} alt="Original miniature LED-test visual study" />}<figcaption><ImageIcon size={14} /> {plate.type}</figcaption></figure></article>)}</section><section className="field-notes-request"><Layers3 size={28} /><div><p className="kicker">ARCHIVE REQUEST</p><h2>TURN THE TEMPLATE INTO A <em>REAL BUILD STORY.</em></h2><p>Approved process photography, a named project, a contributor list, and one technical learning are enough to create the first official essay.</p></div><Link href="/join">Submit a future record <ArrowRight size={17} /></Link><span><FileWarning size={14} /> Official artifacts pending</span></section></ClubLayout>;
}
