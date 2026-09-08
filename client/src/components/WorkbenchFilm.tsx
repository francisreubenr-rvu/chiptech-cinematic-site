import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

/** Original vector stop-motion: 144 discrete poses, rendered locally at 12 fps. */
export default function WorkbenchFilm() {
  const [frame, setFrame] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const stage = useRef<HTMLElement>(null);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update(); query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    if (stage.current) observer.observe(stage.current);
    const timer = window.setInterval(() => {
      if (visible && !document.hidden) setFrame(f => (f + 1) % 144);
    }, 1000 / 12);
    return () => { clearInterval(timer); observer.disconnect(); };
  }, [paused, reduced]);
  const f = reduced ? 110 : frame;
  const settle = (start: number, duration: number) => Math.min(1, Math.max(0, (f - start) / duration));
  const board = settle(4, 20), resistor = settle(28, 16), wire = settle(52, 20), led = settle(78, 16);
  const lit = f >= 98;
  const caption = f < 28 ? '01 / START WITH 9 V' : f < 52 ? '02 / ADD RESISTANCE' : f < 78 ? '03 / COMPLETE THE RETURN' : f < 98 ? '04 / CHECK LED POLARITY' : '05 / A LITTLE LIGHT. A FIRST BUILD.';
  return <figure className="workbench-film" ref={stage} aria-label="Animated schematic of a complete resistor-limited red LED circuit">
    <div className="film-topline"><span>THE FIRST CIRCUIT</span><span>12 FPS / SERIES CIRCUIT</span></div>
    <svg viewBox="0 0 640 500" role="img" aria-label="Series circuit: 9 volt battery positive through a 1 kiloohm resistor to the red LED anode; cathode returns to battery negative.">
      <rect width="640" height="500" fill="#152f2a"/>
      <g fill="#c8d9cc" fontFamily="monospace" fontSize="12"><text x="32" y="38">CHIPTECH / CIRCUIT 01</text><text x="32" y="465">9 V → 1 kΩ → RED LED → RETURN</text></g>
      <g stroke="#8fafa0" strokeWidth="3" fill="none" opacity={board}>
        <path d="M130 228V150H250 M330 150H460V230 M460 290V365H130V272"/>
        <path d="M105 228H155 M115 240H145 M105 260H155 M115 272H145"/>
      </g>
      <g fill="#e2eddf" fontFamily="monospace" fontSize="16" opacity={board}><text x="65" y="255">9 V</text><text x="160" y="222">+</text><text x="160" y="284">−</text></g>
      <g opacity={resistor}><rect x="250" y="138" width="80" height="24" fill="#e2c489" stroke="#e8edcf" strokeWidth="2"/><g fill="#e2eddf" fontFamily="monospace" fontSize="14"><text x="244" y="113">1 kΩ / ¼ W</text></g></g>
      <g opacity={led} stroke="#e7e9c8" strokeWidth="3"><path d="M441 230H479L460 272Z" fill={lit?'#ff8581':'#914f4c'}/><path d="M439 272H481 M460 272V290"/><path d="M490 237L511 216 M506 237L527 216 M503 216H511V224 M519 216H527V224" fill="none"/></g>
      <g fill="#d6e4d8" fontFamily="monospace" fontSize="12" opacity={led}><text x="480" y="203">A / ANODE +</text><text x="480" y="300">K / CATHODE −</text><text x="418" y="327">RED LED · Vf ≈ 2 V</text></g>
      {lit && <g fill="#ffaea0"><circle cx="460" cy="250" r="40" opacity=".12"/><circle cx="460" cy="250" r="27" opacity=".15"/></g>}
      <g opacity={wire} fill="#a9e7c1" fontFamily="monospace" fontSize="14"><text x="207" y="400">I ≈ (9 − 2) / 1000 = 7 mA</text><text x="207" y="423">Resistor power ≈ 0.049 W</text></g>
    </svg>
    <figcaption><span>{caption}</span><button type="button" onClick={() => setPaused(p => !p)} disabled={reduced} aria-label={paused ? 'Play circuit animation' : 'Pause circuit animation'}>{paused || reduced ? <Play size={15}/> : <Pause size={15}/>}</button></figcaption>
    <div className="film-timeline" aria-hidden="true"><i style={{width:`${f/143*100}%`}}/></div>
  </figure>;
}
