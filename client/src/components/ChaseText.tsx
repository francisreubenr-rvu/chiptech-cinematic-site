import { useState, type CSSProperties } from 'react';
/** Whole accessible phrase, with a slow left-to-right red/amber/green colour chase. */
export default function ChaseText({text, className = ''}: {text:string; className?:string}) {
 const [paused,setPaused]=useState(false);
 let index=0;
 return <span className={`chase-text ${className} ${paused?'chase-paused':''}`}><span className="sr-only">{text}</span><span aria-hidden="true">{text.split(' ').map((word,w)=><span className="chase-word" key={w}>{Array.from(word).map(char=><span key={index} style={{'--letter-delay':`${index++ * 0.075}s`} as CSSProperties}>{char}</span>)}{' '}</span>)}</span><button className="chase-toggle" type="button" onClick={()=>setPaused(p=>!p)} aria-label={`${paused?'Resume':'Pause'} colour animation: ${text}`} aria-pressed={paused}>{paused?'▶':'Ⅱ'}</button></span>;
}
