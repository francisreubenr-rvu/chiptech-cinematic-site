/** Tactile Ledger navigation: persistent desktop links and an accessible mobile bottom sheet. */
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { track } from "@/lib/analytics";

const mark = "/manus-storage/chiptech-official-mark_91a6def1.jpg";
const items = [
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Join", href: "#join" },
];

function jump(href: string) { document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" }); }

export default function SiteHeader() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < 96 || current < lastY.current);
      lastY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href: string) => {
    track("navigation_clicked", { target: href.slice(1) });
    jump(href);
  };

  return (
    <header className={`club-header ${visible ? "club-header-visible" : "club-header-hidden"}`}>
      <a className="paper-logo" href="#home" onClick={(event) => { event.preventDefault(); navigate("#home"); }} aria-label="ChipTech home"><img src={mark} alt="ChipTech mark" /><span>CHIPTECH<small>RVU / BLR</small></span></a>
      <nav className="club-nav" aria-label="Primary navigation">{items.map((item) => <button onClick={() => navigate(item.href)} key={item.href}>{item.label}</button>)}</nav>
      <Button className="nav-join" onClick={() => navigate("#join")}>Join ChipTech <ArrowUpRight size={15} /></Button>
      <Drawer>
        <DrawerTrigger asChild><button className="mobile-menu" aria-label="Open navigation"><Menu size={21} /></button></DrawerTrigger>
        <DrawerContent className="chip-drawer">
          <DrawerHeader><DrawerTitle>ChipTech navigation</DrawerTitle><DrawerDescription>Jump directly to the club information you need.</DrawerDescription></DrawerHeader>
          <nav className="drawer-nav" aria-label="Mobile navigation">{items.map((item) => <DrawerClose asChild key={item.href}><button onClick={() => navigate(item.href)}>{item.label}<ArrowUpRight size={17} /></button></DrawerClose>)}</nav>
          <DrawerClose asChild><button className="drawer-close">Close <X size={17} /></button></DrawerClose>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
