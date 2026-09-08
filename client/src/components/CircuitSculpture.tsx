import { useId } from 'react';

export default function CircuitSculpture({ powered }: { powered: boolean }) {
  const id = useId().replaceAll(':', '');
  return <svg viewBox="0 0 800 650" className={`circuit-sculpture ${powered ? 'is-powered' : ''}`} role="img" aria-label={powered ? 'An illuminated sculptural circuit board' : 'A sculptural circuit board with the power off'}>
    <defs>
      <linearGradient id={`${id}-board`} x2=".8" y2="1"><stop stopColor="#263c40"/><stop offset="1" stopColor="#0b171c"/></linearGradient>
      <linearGradient id={`${id}-chip`} x2="1" y2="1"><stop stopColor="#3b484c"/><stop offset=".5" stopColor="#111c20"/><stop offset="1" stopColor="#263539"/></linearGradient>
      <linearGradient id={`${id}-metal`}><stop stopColor="#5d7376"/><stop offset=".5" stopColor="#cbdad7"/><stop offset="1" stopColor="#56656b"/></linearGradient>
      <radialGradient id={`${id}-glow`}><stop stopColor="#5ae5e9" stopOpacity=".3"/><stop offset="1" stopColor="#5ae5e9" stopOpacity="0"/></radialGradient>
      <pattern id={`${id}-holes`} width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="14" cy="14" r="1.4" fill="#80999b" opacity=".2"/></pattern>
    </defs>
    <ellipse cx="414" cy="541" rx="268" ry="44" fill="#000" opacity=".25"/>
    <g className="sculpture-board">
      <path d="M130 165L568 80 731 390 298 520 130 199Z" fill="#071115" stroke="#657a7a"/>
      <path d="M130 165L563 61 731 365 298 495Z" fill={`url(#${id}-board)`} stroke="#6b8487" strokeWidth="2"/>
      <path d="M148 173L554 77 711 358 306 480Z" fill={`url(#${id}-holes)`}/>
      <g fill="none" stroke="#49686e" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M208 185L300 164 347 237 M234 229L307 211 352 275 M292 379L357 360 397 307 M348 428L392 413 433 316 M498 400L468 344 M621 340L555 361 502 296 M634 289L577 306 522 257 M541 155L494 169 470 211 M431 111L449 158 422 207"/>
        <path d="M185 202L220 281 302 260 352 306 M235 365L286 353 327 408 385 391 M415 440L389 381 430 368 456 314 M582 393L553 333 581 324 540 245 M647 328L609 254 565 266 536 214 M488 111L513 160 485 169"/>
      </g>
      <g className="signal-traces" fill="none" stroke="#60e4e6" strokeWidth="3" strokeLinejoin="round">
        <path pathLength="1" d="M208 185L300 164 347 237 M292 379L357 360 397 307 M498 400L468 344 M621 340L555 361 502 296 M541 155L494 169 470 211 M431 111L449 158 422 207"/>
      </g>
      <g fill={`url(#${id}-metal)`}>{Array.from({length:9},(_,n)=><g key={n}><path d={`M${337+n*17} ${220-n*4}l-12 -24 9 -2 12 24Z`}/><path d={`M${389+n*17} ${328-n*5}l13 25 9 -3 -13 -25Z`}/><path d={`M${333+n*6} ${230+n*10}l-24 6 5 8 24 -6Z`}/><path d={`M${491+n*6} ${190+n*10}l24 -6 5 8 -24 6Z`}/></g>)}</g>
      <path d="M327 223L483 183 547 304 389 350Z" fill="#061014"/>
      <path d="M327 210L483 170 547 291 389 337Z" fill={`url(#${id}-chip)`} stroke="#879a99" strokeWidth="1.5"/>
      <path d="M344 219L477 185 529 284 396 322Z" fill="none" stroke="#536468"/>
      <g style={{transform:'matrix(.94,-.25,.47,.88,357,251)'}} fill="#e8efeb"><text fontFamily="Barlow Condensed, sans-serif" fontWeight="700" fontSize="29" letterSpacing=".4">CHIPTECH</text><text y="20" fontFamily="monospace" fontSize="7" letterSpacing="1.4" fill="#c3d7d4">RVU · BENGALURU</text></g>
      <g fill="#8caca9" stroke="#16262a" strokeWidth="4">{[[171,176],[546,95],[691,353],[315,451]].map(([x,y])=><circle key={x} cx={x} cy={y} r="9"/>)}</g>
      <g className="board-leds">{[[208,185],[292,379],[498,400],[621,340],[541,155],[431,111]].map(([x,y],i)=><g key={x}><ellipse cx={x} cy={y+4} rx="9" ry="6" fill="#071317"/><ellipse cx={x} cy={y} rx="7" ry="5" fill={powered?'#8cffff':'#566f73'} style={{transitionDelay:`${i*80}ms`}}/></g>)}</g>
      <g stroke={`url(#${id}-metal)`} strokeWidth="3" fill="#c7bd9d"><path d="M236 303l26 -7"/><path d="M255 307l26 -7"/><rect x="239" y="294" width="29" height="10" rx="3" transform="rotate(-15 250 300)"/></g>
      <text x="326" y="469" fill="#91a8a8" fontSize="9" fontFamily="monospace" transform="rotate(-16 326 469)">A PLACE FOR YOUR NEXT IDEA.</text>
    </g>
    <ellipse className="sculpture-glow" cx="420" cy="285" rx="320" ry="260" fill={`url(#${id}-glow)`} pointerEvents="none"/>
  </svg>;
}
