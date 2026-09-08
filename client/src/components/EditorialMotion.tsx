/** Editorial flow controller: one small observer creates calm section reveals without scroll hijacking or a motion dependency. */
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function EditorialMotion() {
  const [location] = useLocation();
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".route-section, .route-cta-strip, .index-join, [data-reveal]"));
    if (motionQuery.matches) {
      targets.forEach((target) => target.classList.add("editorial-reveal-ready"));
      return;
    }
    targets.forEach((target) => target.classList.add("editorial-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("editorial-reveal-ready");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04, rootMargin: "0px 0px -7% 0px" });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location]);
  return null;
}
