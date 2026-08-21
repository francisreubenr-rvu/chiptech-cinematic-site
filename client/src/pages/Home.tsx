/**
 * Signal Nocturne: evidence-led cinematic landing page with industrial framing and signal traces.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  CircuitBoard,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MoveRight,
  Radio,
  Sparkles,
  X,
} from "lucide-react";

const officialMark = "/manus-storage/chiptech-official-mark_91a6def1.jpg";
const officialCover = "/manus-storage/chiptech-official-cover_86401156.jpg";
const circuitrixEvidence = "/manus-storage/chiptech-circuitrix-rvu-record_cb74090e.webp";
const heroLoop = "/manus-storage/chiptech-hero-loop_ce1b0b56.mp4";
const prototypeLoop = "/manus-storage/chiptech-prototype-loop_80caca86.mp4";

const navItems = [
  { label: "Manifest", href: "#manifest" },
  { label: "Programmes", href: "#programmes" },
  { label: "Records", href: "#records" },
  { label: "Contact", href: "#contact" },
];

const programmes = [
  {
    code: "01",
    title: "LogicBegin",
    year: "25 OCT 2023",
    detail: "Practical foundations for Digital Systems and Computer Architecture laboratories.",
    source: "CENTRE FOR IOT & EDGE COMPUTING",
    accent: "cyan",
  },
  {
    code: "02",
    title: "Circuitrix",
    year: "20 DEC 2023",
    detail: "An electronic circuits and systems exhibition where lighting became the test medium.",
    source: "CLOSE TO 100 STUDENT PROJECTS",
    accent: "copper",
  },
  {
    code: "03",
    title: "Ideathon",
    year: "IDEATE. PITCH. BUILD.",
    detail: "Team-based problem solving across IoT, cybersecurity, data science, and machine learning.",
    source: "RVU STUDENT ECOSYSTEM",
    accent: "lime",
  },
];

const recordItems = [
  {
    date: "20 DEC 2023",
    title: "Circuitrix: Light Up RVU",
    summary: "Creative lighting elements met electronic circuits and systems in a live project exhibition.",
    href: "https://rvu.edu.in/events/circuitrix-light-up-rvu/",
    label: "OFFICIAL EVENT RECORD",
  },
  {
    date: "10 JAN 2025",
    title: "Circuitrix 2.0",
    summary: "RVU documented a second edition with advanced circuits, practical applications, and visual light design.",
    href: "https://www.facebook.com/RV.University1/posts/exciting-moments-at-circuitrix-20-presented-by-the-centre-of-iot-edge-computing-/953943550172694/",
    label: "RVU INSTITUTIONAL POST",
  },
  {
    date: "20 FEB 2026",
    title: "TECHX",
    summary: "A future-tech convergence workshop on blockchain, Web3, industry use cases, safety, and careers.",
    href: "https://www.linkedin.com/company/chiptechrvu",
    label: "CHIPTECH LINKEDIN",
  },
];

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="ChipTech home" onClick={(event) => { event.preventDefault(); goTo("#top"); }}>
          <span className="brand-mark-wrap"><img src={officialMark} alt="ChipTech circuit mark" /></span>
          <span className="brand-type">
            <span className="engineered-wordmark">CHIP<span className="clipped-t">T</span>ECH</span>
            <small>RVU / BLR <i /></small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => goTo(item.href)}>{item.label}</button>
          ))}
        </nav>

        <a className="header-cta" href="mailto:club_chiptech@rvu.edu.in">
          <span>Join the signal</span><ArrowUpRight size={15} />
        </a>

        <button className="mobile-menu-trigger" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
        {navItems.map((item, index) => (
          <button key={item.href} style={{ transitionDelay: `${index * 45}ms` }} onClick={() => goTo(item.href)}>
            <span className="mono">0{index + 1}</span>{item.label}<ArrowDownRight size={19} />
          </button>
        ))}
        <a href="mailto:club_chiptech@rvu.edu.in"><Mail size={17} /> club_chiptech@rvu.edu.in</a>
      </div>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-trace" aria-hidden="true"><span /><i /><b /></div>
          <div className="hero-content">
            <p className="eyebrow reveal-item"><Radio size={13} /> TRACE ACTIVE / RVU.INDIA</p>
            <h1 id="hero-title" className="hero-title">
              <span className="reveal-item">BUILD THE</span>
              <span className="hero-title-accent reveal-item">IDEA.</span>
              <span className="reveal-item">LIGHT UP THE</span>
              <span className="reveal-item">CIRCUIT.</span>
            </h1>
            <div className="hero-bottom reveal-item">
              <p>ChipTech is RV University&apos;s hardware-first student community for electronics, embedded systems, IoT, and practical innovation.</p>
              <button className="trace-button" onClick={() => goTo("#manifest")}>
                <span>Trace the work</span><MoveRight size={20} />
              </button>
            </div>
          </div>

            <div className="hero-visual reveal-item">
              <div className="hero-visual-topline"><span>PUBLIC SIGNAL / 01</span><span>EST. IN RECORDS / 2023</span></div>
            <div className="cover-frame video-frame">
              <video className="hero-loop-video" autoPlay muted loop playsInline poster={officialCover} aria-label="Cinematic view of a ChipTech electronics workbench">
                <source src={heroLoop} type="video/mp4" />
              </video>
              <img className="video-static-fallback" src={officialCover} alt="Official ChipTech public cover art" />
              <div className="cover-overlay"><span>CHIPTECH<br />SIGNAL BOARD</span><i /></div>
            </div>
            <div className="hero-note"><span className="mono">READY STATE</span><span>We turn curious hands into tangible work.</span></div>
          </div>

          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><ChevronDown size={16} /></div>
        </section>

        <section className="manifest section-pad" id="manifest" aria-labelledby="manifest-title">
          <div className="section-rail"><span>01</span><i /><small>MANIFEST</small></div>
          <div className="manifest-layout">
            <div className="manifest-label-block">
              <p className="eyebrow dark-eyebrow"><CircuitBoard size={13} /> HARDWARE, HUMAN</p>
              <h2 id="manifest-title">THE CLUB FOR<br /><em>WORK THAT WORKS.</em></h2>
            </div>
            <div className="manifest-copy">
              <p className="manifest-lead">ChipTech takes technical curiosity out of the tab and onto the bench. We bring people together to learn systems, make prototypes, test assumptions, and show the result.</p>
              <div className="manifest-proof">
                <div><strong>RVU</strong><span>Student technology community</span></div>
                <div><strong>2023</strong><span>Earliest validated activity record</span></div>
                <div><strong>100<span className="small-plus">+</span></strong><span>Projects documented for Circuitrix</span></div>
              </div>
              <a className="evidence-link" href="https://rvu.edu.in/research/center-for-iot-and-edge-computing/" target="_blank" rel="noreferrer">
                <span>Read the institutional record</span><ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="programmes section-pad" id="programmes" aria-labelledby="programmes-title">
          <div className="programme-top">
            <div className="section-rail light-rail"><span>02</span><i /><small>PROGRAMMES</small></div>
            <p className="eyebrow"><Sparkles size={13} /> WHERE THE SIGNAL GOES</p>
            <h2 id="programmes-title">NOT JUST A CLUB.<br />A <em>BUILD LOOP.</em></h2>
          </div>
          <div className="programme-list">
            {programmes.map((programme) => (
              <article className={`programme-row programme-${programme.accent}`} key={programme.code}>
                <div className="programme-code">{programme.code}</div>
                <div className="programme-main"><h3>{programme.title}</h3><p>{programme.detail}</p></div>
                <div className="programme-meta"><span>{programme.year}</span><small>{programme.source}</small></div>
                <ArrowDownRight className="programme-arrow" size={25} />
              </article>
            ))}
          </div>
          <div className="programme-caption"><span>LEARN</span><i /><span>MAKE</span><i /><span>TEST</span><i /><span>SHOW</span></div>
        </section>

        <section className="lab-section section-pad" aria-labelledby="lab-title">
          <div className="section-rail"><span>03</span><i /><small>THE LAB MINDSET</small></div>
          <div className="lab-grid">
            <div className="lab-copy">
              <p className="eyebrow dark-eyebrow"><Radio size={13} /> CONTACT / RESEARCH / BUILD</p>
              <h2 id="lab-title">THE PROTOTYPE<br />IS THE <em>PROOF.</em></h2>
              <p>From logic circuits to light installations, ChipTech turns technical learning into shared, visible outcomes. It is where a breadboard stops being homework and starts being an argument for what is possible.</p>
              <a className="trace-button copper-button" href="https://www.linkedin.com/company/chiptechrvu" target="_blank" rel="noreferrer"><span>Follow the updates</span><ArrowUpRight size={20} /></a>
            </div>
            <div className="lab-visual" aria-label="Cinematic view of a handmade embedded-systems prototype">
              <video className="prototype-loop-video" autoPlay muted loop playsInline poster={circuitrixEvidence} aria-label="Handmade microcontroller prototype with cyan signal lighting">
                <source src={prototypeLoop} type="video/mp4" />
              </video>
              <div className="lab-glow" />
              <div className="board board-a"><span /><span /><span /><span /><span /></div>
              <div className="board board-b"><i /><i /><i /></div>
              <div className="signal-orbit orbit-a" /><div className="signal-orbit orbit-b" />
              <div className="lab-readout"><span>01.0</span><span>SIGNAL PATH</span><b>LIVE</b></div>
              <div className="lab-tag">PRACTICAL<br />IMAGINATION</div>
              <figure className="field-proof">
                <img src={circuitrixEvidence} alt="RV University post documenting Circuitrix 2.0 student project exhibition" />
                <figcaption><span>RVU RECORD</span><strong>CIRCUITRIX 2.0 / 10 JAN 2025</strong><i /></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="records section-pad" id="records" aria-labelledby="records-title">
          <div className="records-head">
            <div className="section-rail light-rail"><span>04</span><i /><small>RECORDS</small></div>
            <div><p className="eyebrow"><CalendarDays size={13} /> ARCHIVE / NOT VAPOUR</p><h2 id="records-title">THE WORK LEAVES<br /><em>A TRACE.</em></h2></div>
            <p>Every marker below links back to a public record. Credibility is much more interesting when it can be checked.</p>
          </div>
          <div className="record-list">
            {recordItems.map((item) => (
              <a className="record-card" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                <div className="record-date">{item.date}</div>
                <div className="record-title"><h3>{item.title}</h3><p>{item.summary}</p></div>
                <div className="record-label"><span>{item.label}</span><ArrowUpRight size={19} /></div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-aura" aria-hidden="true" />
          <div className="section-rail contact-rail"><span>05</span><i /><small>CONTACT</small></div>
          <div className="contact-content">
            <p className="eyebrow"><Radio size={13} /> OPEN A SIGNAL PATH</p>
            <h2 id="contact-title">ROUTE A LINE.<br /><em>BUILD WITH US.</em></h2>
            <p>For an event, collaboration, or a new build: put the signal on the board.</p>
            <a className="contact-email" href="mailto:club_chiptech@rvu.edu.in">club_chiptech@rvu.edu.in <ArrowUpRight size={23} /></a>
          </div>
          <div className="contact-badge"><img src={officialMark} alt="" /><span>CHIPTECH<br />RVU / BLR</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src={officialMark} alt="ChipTech" /><span className="engineered-wordmark">CHIP<span className="clipped-t">T</span>ECH</span></div>
        <p>RV University, Bengaluru. Built around real records, live curiosity, and one very active signal.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/company/chiptechrvu" target="_blank" rel="noreferrer" aria-label="ChipTech LinkedIn"><Linkedin size={18} /></a>
          <a href="https://www.instagram.com/chiptech_rvu/" target="_blank" rel="noreferrer" aria-label="ChipTech Instagram"><Instagram size={18} /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        </div>
      </footer>
    </div>
  );
}
