import ChaseText from '@/components/ChaseText';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Power, Plus } from 'lucide-react';
import { Link } from 'wouter';
import {EventFeature, ClubChannels} from './LiveClub';
import ClubLayout from '@/components/ClubLayout';
import CircuitSculpture from '@/components/CircuitSculpture';
import WorkbenchFilm from '@/components/WorkbenchFilm';
import { events } from '@/lib/clubData';

export default function Home() {
  const [powered, setPowered] = useState(true);
  const hero = useRef<HTMLElement>(null);
  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    let request = 0;
    const update = () => { cancelAnimationFrame(request); request = requestAnimationFrame(() => {
      if (hero.current) hero.current.style.setProperty('--hero-drift', mq.matches ? '0deg' : `${Math.min(scrollY / 140, 6)}deg`);
    }); };
    addEventListener('scroll', update, {passive:true}); mq.addEventListener('change', update);
    return () => { cancelAnimationFrame(request); removeEventListener('scroll', update); mq.removeEventListener('change', update); };
  }, []);
  return <ClubLayout>
    <section className="signal-hero" ref={hero} aria-labelledby="index-hero-title">
      <div className="signal-hero-meta"><span><i/> CHIPTECH · RV UNIVERSITY</span><span>BENGALURU, INDIA</span></div>
      <div className="signal-hero-grid">
        <div className="signal-hero-copy"><p className="signal-label">FOR THE CURIOUS. FOR THE HANDS-ON.</p><h1 id="index-hero-title">SMALL COMPONENTS.<br/><span>BIG POSSIBILITIES.</span></h1><p className="signal-lead">A circuit. A prototype. Your next big question.<br/>We’re ChipTech, RV University’s community for electronics, embedded systems, and learning by making.</p><div className="signal-actions"><Link className="signal-button" href="/join">Join ChipTech <ArrowUpRight size={20}/></Link><a className="signal-text-link" href="#inside">See what we’re about <ArrowDown size={16}/></a></div></div>
        <div className="signal-object"><div className="object-orbit" aria-hidden="true"/><CircuitSculpture powered={powered}/><div className="object-caption"><span>IDEAS NEED CONNECTIONS.</span><button className="power-switch" aria-pressed={powered} onClick={()=>setPowered(p=>!p)}><Power size={17}/>{powered?'Power off':'Power on'}</button></div></div>
      </div>
      <div className="signal-hero-foot"><ChaseText className="hero-chase" text="LESS WATCHING. MORE FIGURING IT OUT."/><a href="#inside" aria-label="Explore ChipTech"><ArrowDown size={22}/></a><span>SCROLL TO EXPLORE<br/>01 — 05</span></div>
    </section>
    <section className="signal-section home-live"><EventFeature/><ClubChannels/></section>
    <div className="signal-ribbon" aria-label="Club interests"><span>CIRCUITS</span><Plus/><span>EMBEDDED SYSTEMS</span><Plus/><span>HARDWARE</span><Plus/><span>HUMAN CURIOSITY</span></div>
    <section id="inside" className="signal-section signal-intro" data-reveal>
      <div className="signal-section-label"><span>01 / THE CLUB</span><span>IDEAS ARE BETTER WITH COMPANY.</span></div>
      <div className="signal-intro-grid"><h2>THE BEST WAY<br/>TO LEARN IT?<br/><em>BUILD IT.</em></h2><div><p className="signal-large-copy">For the moment a diagram becomes a circuit. And a room full of strangers becomes your team.</p><p>ChipTech brings together students interested in circuits, embedded systems, and hardware prototyping. Bring the question you haven’t solved yet. Start small. Learn through the attempt.</p><Link className="signal-text-link" href="/people">Meet the people <ArrowUpRight size={18}/></Link></div></div>
      <div className="signal-photo-strip"><figure><img src="/images/ideathon-room.webp" alt="Students gathered during Ideathon 3.0" loading="lazy"/><figcaption>IDEATHON 3.0 / ROUND 1</figcaption></figure><figure><img src="/images/ideathon-team.webp" alt="Participants at Ideathon 3.0" loading="lazy"/><figcaption>IDEATHON 3.0 / ROUND 2</figcaption></figure><div className="photo-strip-note"><span>OFF THE SCREEN.<br/>IN THE ROOM.</span><a href="/photography">Explore the photo story <ArrowUpRight size={20}/></a></div></div>
    </section>
    <section className="signal-section signal-practice" data-reveal>
      <div className="signal-section-label"><span>02 / THE PRACTICE</span><span>A SMALL START IS STILL A START.</span></div>
      <div className="signal-practice-grid"><div><h2>FROM “WHAT IF”<br/>TO <em>“IT WORKS.”</em></h2><p className="signal-practice-intro">Making is a loop. Each attempt gives you a better question.</p><ol className="signal-steps"><li><span>01</span><div><h3>Pull it apart.</h3><p>Understand the components and the idea connecting them.</p></div></li><li><span>02</span><div><h3>Try one thing.</h3><p>Build a small version. Observe what happens. Change what doesn’t work.</p></div></li><li><span>03</span><div><h3>Pass it on.</h3><p>Keep the diagram, the mistake, and the fix. Help the next person start.</p></div></li></ol></div><div className="signal-film-wrap"><WorkbenchFilm/><p className="signal-caption">A complete 9 V series circuit: 1 kΩ resistor, red LED, and battery return.</p></div></div>
    </section>
    <section id="events" className="signal-section signal-events" data-reveal>
      <div className="signal-section-label"><span>03 / IN THE ROOM</span><Link href="/events">Upcoming events <ArrowUpRight size={16}/></Link></div>
      <div className="signal-events-title"><h2>GOOD IDEAS<br/>DON’T STAY <em>QUIET.</em></h2><p>Present it. Question it. Take it further.<br/>A glimpse into the community, from the event archive.</p></div>
      <Link href="/photography" className="signal-event-feature"><img src="/images/ideathon-feature.webp" alt="Ideathon 3.0 event participants presenting their work" loading="lazy"/><div><span className="signal-label">FROM THE CLUB PHOTO ARCHIVE</span><h3>IDEATHON 3.0</h3><span className="feature-link">Step inside the event <ArrowUpRight size={22}/></span></div></Link>
      <div className="signal-event-rows">{events.slice(0,2).map((e,i)=><a key={e.id} href={e.href} target="_blank" rel="noreferrer"><span className="event-number">0{i+1}</span><h3>{e.title}</h3><span>{e.dateLabel}</span><ArrowUpRight size={24}/></a>)}</div>
      <p className="signal-event-note">Looking for the next event? <Link href="/join">Ask the club <ArrowUpRight size={14}/></Link> · Ideathon 4.0 takes place on September 25.</p>
    </section>
    <section className="signal-section signal-people" data-reveal><div className="signal-section-label"><span>04 / PEOPLE, NOT JUST PARTS</span><span>THE HUMAN SIDE OF HARDWARE.</span></div><div className="signal-people-grid"><h2>FIND YOUR<br/><em>KIND OF CURIOUS.</em></h2><article className="signal-person"><span className="person-photo"><img src="/images/social/team-1.jpg" alt="Aryan Dubey, ChipTech President" loading="lazy"/></span><div><span className="signal-label">CLUB LEADERSHIP</span><h3>Aryan Dubey</h3><p>President, ChipTech <span className="person-attribution">— announced by the club.</span></p><p>RV University, 2025–2029. His work spans Android development, UI/UX design, and AI-assisted software analysis.</p><a className="signal-text-link" href="/people" target="_blank" rel="noreferrer">Meet the core team <ArrowUpRight size={18}/></a></div></article></div></section>
    <section className="signal-section signal-join" data-reveal><div className="signal-section-label"><span>05 / YOUR NEXT CONNECTION</span><span>CHIPTECH / RVU</span></div><div className="signal-join-grid"><h2>GOT A<br/><em>“WHAT IF”?</em></h2><div><p className="signal-large-copy">That’s a good place to start.</p><p>Tell us what you want to learn, build, or figure out. Ask about joining and upcoming sessions.</p><Link href="/join" className="signal-button">Find your way in <ArrowUpRight size={21}/></Link></div></div><div className="signal-faq"><details><summary>Just getting started with electronics?<Plus size={20}/></summary><p>Start the conversation with the club. Tell them your experience level and what you’d like to try, and ask which upcoming activity would suit you.</p></details><details><summary>When is the next workshop?<Plus size={20}/></summary><p>Ideathon 4.0 is scheduled for September 25, 2026. Visit Events for the programme and registration details. Email club_chiptech@rvu.edu.in for other upcoming activities.</p></details></div></section>
  </ClubLayout>;
}
