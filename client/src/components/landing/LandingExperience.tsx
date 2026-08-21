/** Workshop Film entry: one intentional scroll-triggered 45-second stop-motion event with no text inside the video aperture. */
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Pause, Play, SkipForward, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { useIsMobile } from "@/hooks/useMobile";
import TactileCircuit from "./TactileCircuit";

type LandingExperienceProps = { onEnter: () => void; onSkip: () => void };

const workshopFilm = "/manus-storage/chiptech-clay-workshop-film-45s_a00fc2b8.mp4";
const workshopPoster = "/manus-storage/chiptech-clay-workshop-film-poster_8c6785a4.jpg";

export default function LandingExperience({ onEnter, onSkip }: LandingExperienceProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [started, setStarted] = useState(false);
  const [soundBlocked, setSoundBlocked] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const isMobile = useIsMobile();

  const unlockScroll = () => { document.body.style.overflow = ""; };

  const finish = () => {
    if (finishing) return;
    setFinishing(true);
    unlockScroll();
    track("landing_completed");
    track("homepage_transition_completed");
    window.setTimeout(onEnter, reducedMotion ? 150 : 650);
  };

  const startFilm = async () => {
    if (started || reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    document.body.style.overflow = "hidden";
    track("landing_started");
    track("homepage_transition_started");
    video.currentTime = 0;
    video.volume = 0.38;
    video.muted = false;
    try {
      await video.play();
    } catch {
      setSoundBlocked(true);
      video.muted = true;
      await video.play().catch(() => undefined);
    }
  };

  const enableSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 0.38;
    try {
      await video.play();
      setSoundBlocked(false);
    } catch {
      video.muted = true;
    }
  };

  const skip = () => {
    const video = videoRef.current;
    if (video) { video.pause(); video.currentTime = 0; }
    unlockScroll();
    track("landing_skipped");
    onSkip();
  };

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(query.matches);
    syncPreference();
    query.addEventListener("change", syncPreference);
    return () => query.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || isMobile || started) return;
    const onWheel = (event: WheelEvent) => { if (event.deltaY > 4) void startFilm(); };
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " ", "Enter"].includes(event.key)) void startFilm();
    };
    window.addEventListener("wheel", onWheel, { passive: true, once: true });
    window.addEventListener("keydown", onKeyDown, { once: true });
    return () => { window.removeEventListener("wheel", onWheel); window.removeEventListener("keydown", onKeyDown); };
  }, [isMobile, reducedMotion, started]);

  useEffect(() => () => unlockScroll(), []);

  if (reducedMotion) {
    return <section className="intro-static-shell" aria-labelledby="intro-static-title"><div className="intro-static-grid"><div><p className="kicker">RV UNIVERSITY / BENGALURU</p><h1 id="intro-static-title">FROM A CHIP TO A <em>COMMUNITY.</em></h1><p className="intro-static-copy">ChipTech is a student technical club for practical learning across circuits, embedded systems, and hardware prototyping.</p></div><TactileCircuit scene={7} staticMode /></div><Button className="paper-cta" onClick={finish}>Enter ChipTech <ArrowRight size={17} /></Button></section>;
  }

  return (
    <section className={`workshop-film-entry ${started ? "film-is-running" : "film-is-ready"} ${finishing ? "film-is-finishing" : ""}`} aria-labelledby="workshop-film-title">
      <div className="workshop-film-frame" aria-label="Original ChipTech workshop stop-motion film">
        <video ref={videoRef} poster={workshopPoster} playsInline preload="metadata" onEnded={finish} onContextMenu={(event) => event.preventDefault()}>
          <source src={workshopFilm} type="video/mp4" />
        </video>
        <div className="film-corner film-corner-tl" aria-hidden="true" /><div className="film-corner film-corner-br" aria-hidden="true" />
      </div>
      <div className="workshop-film-ui">
        <div className="film-brand" aria-label="ChipTech, RV University Bengaluru"><span>CT</span><strong>CHIP<span>TECH</span><small>RVU / BLR</small></strong><i /></div>
        <div className="film-copy"><p className="kicker">WORKSHOP FILM / 45 SECONDS</p><h1 id="workshop-film-title">A SMALL THING<br />STARTS TO <em>MOVE.</em></h1><p>An original miniature workshop story about the first useful connection.</p></div>
        <aside className="film-ledger-docket" aria-label="ChipTech workshop film evidence"><span>FIELD LEDGER / 01</span><strong>RVU BUILD BENCH</strong><p>Film record: original workshop study.</p><div><i /> <small>TRACE STATUS: ACTIVE</small></div></aside>
        {!started && <div className="film-prompt"><span className="prompt-line" /><p>{isMobile ? "Tap to play the workshop film" : "Scroll once to start the workshop film"}</p><Button className="paper-cta" onClick={() => void startFilm()}><Play size={16} /> Play film</Button></div>}
        {started && <div className="film-running-controls"><span><Pause size={14} /> WORKSHOP IN PROGRESS</span>{soundBlocked && <button onClick={() => void enableSound()}><Volume2 size={15} /> Enable workshop sound</button>}<button onClick={skip}><SkipForward size={15} /> Skip film</button></div>}
        <div className="film-rail" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
      </div>
      <div className="sr-only"><p>The film shows Nim and Pip, two original workshop creatures, building a small electronics prototype together. It contains no essential text or controls inside the video frame.</p></div>
    </section>
  );
}
