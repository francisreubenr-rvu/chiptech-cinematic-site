/** Ledger and Workshop page frame: routes share one clear navigation, material background, and club-owned footer. */
import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import EditorialMotion from "./EditorialMotion";

export default function ClubLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => {
    const metadata: Record<string, { title: string; description: string }> = {
      "/": { title: "ChipTech | RV University", description: "ChipTech is an RV University student technical club for practical learning in circuits, embedded systems, hardware prototyping, and documented build practice." },
      "/projects": { title: "Projects & Workshop | ChipTech, RV University", description: "Explore ChipTech's workbench, circuit studies, and inspiration for your next hardware project." },
      "/ledger": { title: "Workshop Ledger | ChipTech, RV University", description: "A source-linked public ledger of ChipTech workshops, exhibitions, and programme records at RV University." },
      "/people": { title: "People and Practice | ChipTech, RV University", description: "Meet the officially announced ChipTech core team and working groups at RV University." },
      "/join": { title: "Join ChipTech | RV University", description: "The direct route to contact ChipTech about practical learning, club contribution, and the current joining cycle." },
      "/field-notes": { title: "Field Notes | ChipTech, RV University", description: "Scenes from Ideathon 3.0 and the ChipTech community, with original club photography." },
    };
    for (const [path, title] of Object.entries({"/events":"Upcoming Events", "/events/ideathon-4":"Ideathon 4.0", "/live-event":"Ideathon 4.0", "/news":"Club News", "/blogs":"Blogs", "/vlogs":"Vlogs", "/photography":"Photography", "/awards":"Awards", "/leaderboards":"Leaderboards"})) metadata[path] = { title: `${title} | ChipTech, RV University`, description: `${title} at ChipTech: the RV University community for making, learning, and connecting.` };
    window.scrollTo({top:0, behavior:'instant'});
    const current = metadata[location] ?? metadata["/"];
    document.title = current.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", current.description);
  }, [location]);
  return <div className="club-site signal-site"><a className="signal-skip" href="#main-content">Skip to content</a><SiteHeader /><EditorialMotion /><main key={location} className="club-main" id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></div>;
}
