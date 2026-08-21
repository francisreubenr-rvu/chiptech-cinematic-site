/** Tactile Ledger entry experience: native scroll, discrete scene changes, keyboard progression, and reduced-motion static fallback. */
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { useIsMobile } from "@/hooks/useMobile";
import TactileCircuit from "./TactileCircuit";

type LandingExperienceProps = { onEnter: () => void; onSkip: () => void };

const scenes = [
  { title: "Seed", eyebrow: "01 / A QUESTION", copy: "A question starts small.", detail: "One chip. One surface. One place to begin." },
  { title: "Placement", eyebrow: "02 / THE BENCH", copy: "Put it on the bench.", detail: "Every system needs a real place to be tested." },
  { title: "Labels", eyebrow: "03 / THE MAP", copy: "Name the connections.", detail: "Pins, paths, and the discipline of knowing what they do." },
  { title: "Solder", eyebrow: "04 / FIRST BOND", copy: "Make the first bond.", detail: "A circuit becomes tangible when its parts are joined." },
  { title: "Wiring", eyebrow: "05 / ROUTE", copy: "Route a signal.", detail: "The line from one idea to another has to be deliberate." },
  { title: "Power", eyebrow: "06 / POWER", copy: "Give it power.", detail: "Now measure what wakes up." },
  { title: "System", eyebrow: "07 / TEST", copy: "Test what changed.", detail: "A prototype makes the learning visible." },
  { title: "Community", eyebrow: "08 / CHIPTECH", copy: "Build it together.", detail: "ChipTech brings curious builders together at RV University." },
];

export default function LandingExperience({ onEnter, onSkip }: LandingExperienceProps) {
  const shellRef = useRef<HTMLElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const activeRef = useRef(0);
  const isMobile = useIsMobile();
  const activeScenes = isMobile ? [scenes[0], scenes[2], scenes[5], scenes[7]] : scenes;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(query.matches);
    syncPreference();
    query.addEventListener("change", syncPreference);
    return () => query.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    track("landing_started");
    if (reducedMotion) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const shell = shellRef.current;
      if (!shell) return;
      const available = Math.max(1, shell.offsetHeight - window.innerHeight);
      const progress = Math.min(0.999, Math.max(0, -shell.getBoundingClientRect().top / available));
      const nextScene = Math.min(activeScenes.length - 1, Math.floor(progress * activeScenes.length));
      shell.style.setProperty("--scene-progress", `${Math.round(progress * 12) / 12}`);
      if (activeRef.current !== nextScene) {
        activeRef.current = nextScene;
        setActiveScene(nextScene);
        track("landing_scene_viewed", { scene: nextScene + 1 });
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [activeScenes.length, reducedMotion]);

  const moveToScene = (scene: number) => {
    const shell = shellRef.current;
    if (!shell) return;
    const target = shell.getBoundingClientRect().top + window.scrollY + ((shell.offsetHeight - window.innerHeight) * scene) / Math.max(1, activeScenes.length - 1);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const beginTransition = () => {
    if (transitioning) return;
    setTransitioning(true);
    track("homepage_transition_started");
    window.setTimeout(() => {
      track("landing_completed");
      track("homepage_transition_completed");
      onEnter();
    }, reducedMotion ? 180 : 1200);
  };

  const skip = () => {
    track("landing_skipped");
    onSkip();
  };

  if (reducedMotion) {
    return (
      <section className="intro-static-shell" aria-labelledby="intro-static-title">
        <div className="intro-static-grid">
          <div><p className="kicker">RV UNIVERSITY / BENGALURU</p><h1 id="intro-static-title">FROM A CHIP TO A <em>COMMUNITY.</em></h1><p className="intro-static-copy">ChipTech is a student technical club for practical learning across circuits, embedded systems, and hardware prototyping.</p></div>
          <TactileCircuit scene={7} staticMode />
        </div>
        <Button className="paper-cta" onClick={beginTransition}>Enter ChipTech <ArrowRight size={17} /></Button>
      </section>
    );
  }

  const current = activeScenes[activeScene];
  return (
    <section className={`landing-experience ${transitioning ? "landing-transitioning" : ""}`} ref={shellRef} id="intro" aria-label="ChipTech introduction">
      <div className="intro-sticky">
        <div className="intro-toolbar">
          <div className="intro-brand" aria-label="ChipTech, RV University Bengaluru"><span>CT</span><strong>CHIP<span>TECH</span><small>RVU / BLR</small></strong></div>
          <button className="intro-skip" onClick={skip}><SkipForward size={15} /> Skip intro</button>
          <p aria-live="polite">Scene {activeScene + 1} of {activeScenes.length}: {current.title}</p>
        </div>
        <div className="intro-progress" aria-hidden="true">{activeScenes.map((scene, index) => <span className={index <= activeScene ? "is-seen" : ""} key={scene.title} />)}</div>
        <div className="intro-stage" data-scene={activeScenes[activeScene].title === "Seed" ? 0 : scenes.indexOf(activeScenes[activeScene])}>
          <TactileCircuit scene={scenes.indexOf(activeScenes[activeScene])} />
          <div className="intro-copy-block" aria-live="polite">
            <p className="kicker">{current.eyebrow}</p>
            <h1>{current.copy}</h1>
            <p>{current.detail}</p>
            {activeScene === activeScenes.length - 1 && <Button className="intro-enter" onClick={beginTransition}>Enter ChipTech <ArrowRight size={17} /></Button>}
          </div>
        </div>
        <div className="intro-controls">
          <button onClick={() => moveToScene(Math.max(0, activeScene - 1))} disabled={activeScene === 0} aria-label="Previous intro scene"><ChevronLeft size={19} /></button>
          {activeScene === activeScenes.length - 1 ? <button className="intro-next-label" onClick={beginTransition}>Enter site <Check size={16} /></button> : <button className="intro-next-label" onClick={() => moveToScene(activeScene + 1)}>Next scene <ChevronRight size={16} /></button>}
        </div>
        <span className="intro-scroll-cue"><ArrowDown size={14} /> Scroll to assemble</span>
      </div>
      <div className="sr-only">{scenes.map((scene, index) => <article key={scene.title}><h2>Scene {index + 1}: {scene.title}</h2><p>{scene.copy} {scene.detail}</p></article>)}</div>
    </section>
  );
}
