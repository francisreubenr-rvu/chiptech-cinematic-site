/** Ledger and Workshop footer: ownable club identity with confirmed links and honest pending states. */
import { Link } from "wouter";
import { Instagram, Linkedin, Mail } from "lucide-react";


export default function SiteFooter() {
  return <footer className="site-footer"><div className="footer-lockup"><img className="official-logo" src="/images/social/logo.jpg" alt="ChipTech logo"/><div><strong>CHIPTECH</strong><span>RV UNIVERSITY / BENGALURU</span></div></div><div className="footer-statement"><p>Built around practical learning in circuits, embedded systems, hardware, and the habit of documenting what actually happened.</p><small>BUILD · CONNECT · KEEP EXPLORING</small></div><nav className="footer-site-map" aria-label="Club pages">{[["Events","/events"],["News","/news"],["Blogs","/blogs"],["Vlogs","/vlogs"],["Photography","/photography"],["Awards","/awards"],["Leaderboards","/leaderboards"],["Projects","/projects"],["People","/people"],["Join","/join"]].map(([name,path])=><Link key={path} href={path}>{name}</Link>)}</nav><div className="footer-links"><a href="https://rvu.edu.in/" target="_blank" rel="noreferrer">RV University</a><a href="https://www.linkedin.com/company/chiptechrvu" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="https://www.instagram.com/chiptech_rvu/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a><a href="mailto:club_chiptech@rvu.edu.in"><Mail size={15} /> Contact</a></div></footer>;
}
