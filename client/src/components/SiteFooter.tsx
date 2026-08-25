/** Ledger and Workshop footer: ownable club identity with confirmed links and honest pending states. */
import { Instagram, Linkedin, Mail } from "lucide-react";

const mark = "/manus-storage/chiptech-official-mark_91a6def1.jpg";

export default function SiteFooter() {
  return <footer className="site-footer"><div className="footer-lockup"><img src={mark} alt="ChipTech mark" /><div><strong>CHIPTECH</strong><span>RV UNIVERSITY / BENGALURU</span></div></div><div className="footer-statement"><p>Built around practical learning in circuits, embedded systems, hardware, and the habit of documenting what actually happened.</p><small>PUBLIC RECORD INDEX · CONTENT REVIEW IN PROGRESS</small></div><div className="footer-links"><a href="https://rvu.edu.in/" target="_blank" rel="noreferrer">RV University</a><a href="https://www.linkedin.com/company/chiptechrvu" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="https://www.instagram.com/chiptech_rvu/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a><a href="mailto:club_chiptech@rvu.edu.in"><Mail size={15} /> Contact</a></div></footer>;
}
