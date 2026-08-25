/** Content is intentionally typed and explicit about verified records versus content awaiting club confirmation. */
export type ProjectStatus = "content_pending" | "concept" | "research" | "prototyping" | "building" | "testing" | "deployed" | "archived";

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: string;
  technologies: string[];
  status: ProjectStatus;
  updatedAt: string;
};

export type ClubEvent = {
  id: string;
  title: string;
  dateLabel: string;
  location: string;
  summary: string;
  kind: "record" | "upcoming_placeholder";
  registrationState: "record" | "coming_soon";
  href?: string;
};

export const buildBenchPrinciples = [
  { serial: "01", title: "Start with the system", detail: "Identify the parts, constraints, and signal path before touching the hardware." },
  { serial: "02", title: "Test one assumption", detail: "A small observable result beats a grand unmeasured claim." },
  { serial: "03", title: "Leave a trace", detail: "Document the board, the failure, the revision, and the handoff." },
];

export const projects: Project[] = [
  {
    id: "catalogue-pending",
    title: "Project catalogue",
    summary: "Official project names, contributor details, repositories, and build states are being prepared for publication.",
    category: "Content-ready record",
    technologies: ["Details pending", "Verified entries only"],
    status: "content_pending",
    updatedAt: "Club confirmation required",
  },
];

export const events: ClubEvent[] = [
  {
    id: "circuitrix-2023",
    title: "Circuitrix: Light Up RVU",
    dateLabel: "20 DEC 2023",
    location: "RV University, Bengaluru",
    summary: "An electronics circuits and systems exhibition documented by RV University.",
    kind: "record",
    registrationState: "record",
    href: "https://rvu.edu.in/events/circuitrix-light-up-rvu/",
  },
  {
    id: "circuitrix-2",
    title: "Circuitrix 2.0",
    dateLabel: "10 JAN 2025",
    location: "RV University, Bengaluru",
    summary: "An institutional post recording advanced circuits, practical applications, and visual light design.",
    kind: "record",
    registrationState: "record",
    href: "https://www.facebook.com/RV.University1/posts/exciting-moments-at-circuitrix-20-presented-by-the-centre-of-iot-edge-computing-/953943550172694/",
  },
  {
    id: "upcoming-schedule",
    title: "Upcoming programme schedule",
    dateLabel: "TO BE PUBLISHED",
    location: "Venue to be confirmed",
    summary: "Official upcoming-event information has not been supplied for this website yet.",
    kind: "upcoming_placeholder",
    registrationState: "coming_soon",
  },
];

export const teamGroups = [
  { title: "Faculty advisor", note: "Official appointment pending confirmation", items: ["Role and contact to be added by ChipTech"] },
  { title: "Club leadership", note: "Official committee list pending confirmation", items: ["Club lead", "Core committee"] },
  { title: "Working groups", note: "Proposed structure, not an official roster", items: ["Hardware and embedded systems", "Programmes and community", "Design and documentation"] },
];
