/** Tactile Ledger navigation: persistent desktop links and an accessible mobile bottom sheet. */
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { track } from "@/lib/analytics";
import { Link, useLocation } from "wouter";

const items = [
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Blogs", href: "/blogs" },
  { label: "Vlogs", href: "/vlogs" },
  { label: "Gallery", href: "/photography" },
  { label: "Awards", href: "/awards" },
  { label: "Rankings", href: "/leaderboards" },
  { label: "People", href: "/people" },

];

export default function SiteHeader() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < 96 || current < lastY.current);
      lastY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigated = (href: string) => track("navigation_clicked", { target: href.slice(1) || "home" });

  return (
    <header className={`club-header ${visible ? "club-header-visible" : "club-header-hidden"}`}>
      <Link className="paper-logo" href="/" onClick={() => navigated("/")} aria-label="ChipTech home"><img className="official-logo" src="/images/social/logo.jpg" alt="ChipTech logo"/><span>CHIPTECH<small>RVU / BLR</small></span></Link>
      <nav className="club-nav" aria-label="Primary navigation">{items.map((item) => <Link className={location === item.href ? "is-current" : ""} href={item.href} onClick={() => navigated(item.href)} key={item.href}>{item.label}</Link>)}</nav>
      <Button asChild className="nav-join"><Link href="/join" onClick={() => navigated("/join")}>Join ChipTech <ArrowUpRight size={15} /></Link></Button>
      <Drawer>
        <DrawerTrigger asChild><button className="mobile-menu" aria-label="Open navigation"><Menu size={21} /></button></DrawerTrigger>
        <DrawerContent className="chip-drawer">
          <DrawerHeader><DrawerTitle>ChipTech navigation</DrawerTitle><DrawerDescription>Jump directly to the club information you need.</DrawerDescription></DrawerHeader>
          <nav className="drawer-nav" aria-label="Mobile navigation">{items.map((item) => <DrawerClose asChild key={item.href}><Link href={item.href} onClick={() => navigated(item.href)}>{item.label}<ArrowUpRight size={17} /></Link></DrawerClose>)}</nav>
          <DrawerClose asChild><Link className="drawer-close" href="/join">Join ChipTech <ArrowUpRight size={17}/></Link></DrawerClose>
          <DrawerClose asChild><button className="drawer-close">Close <X size={17} /></button></DrawerClose>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
