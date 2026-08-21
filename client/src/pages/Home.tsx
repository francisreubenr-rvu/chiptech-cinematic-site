/** Tactile Ledger homepage: content-led RVU club site following an optional, accessible stop-motion entry sequence. */
import { useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronDown, CircuitBoard, ExternalLink, Instagram, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import LandingExperience from "@/components/landing/LandingExperience";
import TactileCircuit from "@/components/landing/TactileCircuit";
import SiteHeader from "@/components/SiteHeader";
import { events, projects, teamGroups } from "@/lib/clubData";
import { track } from "@/lib/analytics";

const mark = "/manus-storage/chiptech-official-mark_91a6def1.jpg";
const heroLoop = "/manus-storage/chiptech-hero-loop_ce1b0b56.mp4";
const prototypeLoop = "/manus-storage/chiptech-prototype-loop_80caca86.mp4";
const evidenceImage = "/manus-storage/chiptech-circuitrix-rvu-record_cb74090e.webp";

function SectionHeading({ index, kicker, children }: { index: string; kicker: string; children: React.ReactNode }) {
  return <div className="section-heading"><span className="section-index">{index}</span><div><p className="kicker">{kicker}</p><h2>{children}</h2></div></div>;
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(() => window.localStorage.getItem("chiptech-intro-seen") !== "true" && new URLSearchParams(window.location.search).get("view") !== "home");

  const enterHomepage = () => {
    window.localStorage.setItem("chiptech-intro-seen", "true");
    setShowIntro(false);
    window.requestAnimationFrame(() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const replayIntro = () => {
    window.localStorage.removeItem("chiptech-intro-seen");
    setShowIntro(true);
    window.requestAnimationFrame(() => document.querySelector("#intro")?.scrollIntoView({ behavior: "instant" }));
  };

  return (
    <div className="tactile-site">
      <div className="paper-grain" aria-hidden="true" />
      {showIntro && <LandingExperience onEnter={enterHomepage} onSkip={enterHomepage} />}
      {!showIntro && <>
        <SiteHeader />
        <main id="home">
          <section className="home-hero" aria-labelledby="home-hero-title">
            <div className="hero-notebook"><span>RVU / TECHNICAL CLUB</span><span>FIELD NOTE 01</span></div>
            <div className="home-hero-grid">
              <div className="home-hero-copy"><p className="kicker">CHIPTECH AT RV UNIVERSITY</p><h1 id="home-hero-title">BUILD THE THING<br />YOU WANT TO <em>UNDERSTAND.</em></h1><p>ChipTech turns curiosity about chips, circuits, and embedded systems into practical projects, technical learning, and a collaborative student community at RVU.</p><div className="hero-actions"><Button className="paper-cta" onClick={() => { track("join_cta_clicked", { placement: "hero" }); document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" }); }}>Join ChipTech <ArrowRight size={17} /></Button><button className="text-action" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>Explore projects <ArrowUpRight size={16} /></button></div></div>
              <div className="home-hero-visual"><div className="tape-label">LIVE BENCH / RVU</div><video autoPlay muted loop playsInline poster={mark} aria-label="Electronics bench at ChipTech"><source src={heroLoop} type="video/mp4" /></video><div className="hero-paper-stamp">CIRCUIT<br />STUDIES</div><TactileCircuit scene={7} /></div>
            </div>
          </section>

          <section className="mission-section page-section" id="about" aria-labelledby="mission-title"><SectionHeading index="01" kicker="THE POINT OF THE CLUB">BUILD, BREAK, MEASURE, <em>REPEAT.</em></SectionHeading><div className="mission-grid"><div className="mission-pull"><CircuitBoard size={27} /><p>Technical learning has more teeth when it reaches the bench.</p></div><div><p className="body-lead" id="mission-title">ChipTech is a space for RVU students to explore electronics, semiconductor concepts, embedded systems, microcontrollers, circuits, hardware prototyping, coding, and the discipline of making a system work in the real world.</p><p className="body-copy">The community is built around shared practice: learning the language of components, documenting experiments, testing assumptions, and presenting what changed. The point is not a prettier slide deck. It is a clearer signal.</p></div></div></section>

          <section className="projects-section page-section" id="projects" aria-labelledby="projects-title"><SectionHeading index="02" kicker="PROJECTS">THE WORKBENCH IS <em>OPEN.</em></SectionHeading><div className="projects-layout"><div className="project-intro"><p>Project records are designed to be clear about source, status, and responsibility. This initial catalogue has no invented achievements, because credibility does not need improv theatre.</p><a href="https://www.linkedin.com/company/chiptechrvu" target="_blank" rel="noreferrer" className="record-link">Follow published updates <ExternalLink size={16} /></a></div><div className="project-stack">{projects.map((project) => <article className="project-card" key={project.id}><div className="project-status"><span aria-hidden="true" /> <strong>Content pending</strong></div><h3>{project.title}</h3><p>{project.summary}</p><dl><div><dt>Category</dt><dd>{project.category}</dd></div><div><dt>Last updated</dt><dd>{project.updatedAt}</dd></div></dl><ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></article>)}</div></div></section>

          <section className="events-section page-section" id="events" aria-labelledby="events-title"><SectionHeading index="03" kicker="PROGRAMME LOG">EVENTS WITH A <em>TRAIL.</em></SectionHeading><div className="event-grid">{events.map((event) => <article className={`event-card ${event.kind === "upcoming_placeholder" ? "event-pending" : ""}`} key={event.id}><div className="event-meta"><span>{event.dateLabel}</span><span>{event.location}</span></div><h3>{event.title}</h3><p>{event.summary}</p>{event.href ? <a href={event.href} target="_blank" rel="noreferrer" onClick={() => track("event_registration_clicked", { event: event.id, type: "record" })}>Read the record <ArrowUpRight size={16} /></a> : <button disabled aria-label="Registration schedule has not been published">Schedule coming soon <CalendarDays size={16} /></button>}</article>)}</div><figure className="event-evidence"><img src={evidenceImage} alt="RV University post documenting Circuitrix 2.0" /><figcaption><span>DOCUMENTED OUTCOME</span><strong>RVU record: Circuitrix 2.0</strong></figcaption></figure></section>

          <section className="team-section page-section" id="team" aria-labelledby="team-title"><SectionHeading index="04" kicker="PEOPLE AND PRACTICE">A COMMUNITY NEEDS A <em>CIRCUIT.</em></SectionHeading><div className="team-layout"><div><p className="body-lead" id="team-title">A durable club structure makes it easier to own work, ask better questions, and hand the bench over in better condition than you found it.</p><p className="body-copy">The official roster and committee assignments should be confirmed by ChipTech before publication. The structure below is deliberately labelled so it cannot accidentally cosplay as a verified directory.</p></div><div className="team-groups">{teamGroups.map((group) => <details key={group.title} open={group.title === "Working groups"}><summary><span>{group.title}</span><ChevronDown size={18} /></summary><p>{group.note}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></details>)}</div></div></section>

          <section className="join-section" id="join" aria-labelledby="join-title"><div className="join-note">NEXT BUILD CYCLE<br />SIGNAL OPEN</div><div className="join-content"><p className="kicker">JOIN CHIPTECH</p><h2 id="join-title">BRING YOUR<br /><em>QUESTION.</em></h2><p>Interested in electronics, embedded systems, prototyping, code, documentation, or building with people who actually want to test the idea? Start a conversation with the club.</p><div className="join-actions"><a className="join-mail" href="mailto:club_chiptech@rvu.edu.in" onClick={() => track("join_cta_clicked", { placement: "join" })}>Register interest by email <ArrowUpRight size={19} /></a><span>Recruitment details will be published by the club.</span></div></div><div className="join-visual"><video autoPlay muted loop playsInline poster={mark} aria-label="Microcontroller prototype at work"><source src={prototypeLoop} type="video/mp4" /></video><div className="join-solder" /></div></section>
        </main>
        <footer className="club-footer"><div className="footer-mark"><img src={mark} alt="ChipTech mark" /><strong>CHIPTECH</strong></div><p>ChipTech is a student technology club at RV University, Bengaluru.</p><div className="footer-links"><a href="https://rvu.edu.in/" target="_blank" rel="noreferrer">RV University</a><a href="https://www.linkedin.com/company/chiptechrvu" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="https://www.instagram.com/chiptech_rvu/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a><span className="pending-social">GitHub handle pending</span></div><div className="footer-last"><span>Last evidence review: 21 Aug 2026</span><button onClick={replayIntro}><Sparkles size={15} /> Replay intro</button><a href="mailto:club_chiptech@rvu.edu.in"><Mail size={15} /> Contact</a></div></footer>
      </>}
    </div>
  );
}
