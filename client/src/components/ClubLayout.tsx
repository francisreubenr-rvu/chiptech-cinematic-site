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
      "/projects": { title: "Project Archive | ChipTech, RV University", description: "ChipTech's project archive structure for build artifacts, technical notes, project status, and verified contribution records." },
      "/ledger": { title: "Workshop Ledger | ChipTech, RV University", description: "A source-linked public ledger of ChipTech workshops, exhibitions, and programme records at RV University." },
      "/people": { title: "People and Practice | ChipTech, RV University", description: "ChipTech's public people structure, working groups, and role accountability model." },
      "/join": { title: "Join ChipTech | RV University", description: "The direct route to contact ChipTech about practical learning, club contribution, and the current joining cycle." },
    };
    const current = metadata[location] ?? metadata["/"];
    document.title = current.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", current.description);
  }, [location]);
  return <div className="club-site"><div className="paper-grain" aria-hidden="true" /><SiteHeader /><EditorialMotion /><main className="club-main" id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></div>;
}
