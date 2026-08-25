# ChipTech: From Trailer to Working Club Site

## Decision

The critique is substantially correct. The current page is a persuasive **entry frame**, not a complete public product. The redesign therefore treats the workshop film as optional orientation, not the website itself. The new direction is **Ledger and Workshop**: a warm, evidence-first publication surface where every promise is paired with a source, an artifact, a date, a contributor role, or an explicit content gap.

## What is retained, altered, and removed

| Current element | Decision | Rationale |
|---|---|---|
| Nim and Pip workshop film | **Retain, reduce to orientation** | The characters are distinctive, but they must introduce a real club, not substitute for one. |
| Graphite and cyan base | **Alter** | Cyan becomes a trace and status color only. Paper, copper, solder-gray, and document photography carry most of the material identity. |
| Large slogan typography | **Retain, tighten** | Large type establishes hierarchy, but each large claim needs immediate proof or a practical explanation. |
| Decorative paper overlays in footage | **Remove** | The footage must show the bench. A visual field cannot host a documentary, a collage, and a ransom note simultaneously. |
| Platform-forward presentation | **Remove from site surface** | ChipTech, its work, and RVU evidence must be the visible layer. |
| One-page-only architecture | **Replace** | Add meaningful route-level depth while keeping a strong homepage index. |

## Information architecture

| Route | Visitor question answered | Required proof surface |
|---|---|---|
| `/` | What is ChipTech and why should I care? | Build-bench manifesto, verified programme record, latest project index, join route |
| `/projects` | What has the club built and learned? | Project records, status, artifact slots, technical notes, repository or gap label |
| `/ledger` | What has the club actually done? | Dated events, workshops, exhibition records, source links, upcoming-gap state |
| `/people` | Who operates the club and where can I contribute? | Faculty, leadership, working groups, role status, published contact route |
| `/join` | How do I join or collaborate? | Clear interest route, what to bring, current recruitment state, contact method |

## Homepage composition

The homepage becomes a **field index**, not a 900-pixel poster. The entry film remains an accessible optional preface. After it, the main page provides a concise build-bench manifesto, a source-backed programme strip, a build archive preview, a workshop ledger preview, a people-and-practice preview, and one clear join route. The site uses real or clearly flagged records. Unknown current projects, staff names, and recruitment dates remain labelled rather than invented.

## Content proof contract

Every club claim must map to one of four evidence types. **Record** means a source link such as an RVU event page. **Artifact** means an approved image, board revision, scope trace, repository, or build note. **Attribution** means a named, consented person or role. **Gap** means the page says that the fact is not published yet. This keeps the site intellectually honest while the club gathers material.

## Technical floor

The redesign keeps the current static React stack but builds crawlable client routes, semantic headings, linkable records, and intentional metadata. The 15-second film loads only on desktop after a user action. Mobile shows its poster and an explicit play control. Reduced-motion visitors receive a static entry. The site never blocks content behind a film, and the main routes are usable without media playback.

## Execution tasks

| Priority | Task | Acceptance condition |
|---:|---|---|
| P0 | Convert the one-screen shell into five linked routes | Every navigation item resolves to readable page content and a return path. |
| P0 | Add build archive and ledger structures | Cards display evidence type, status, date, and source or explicit pending label. |
| P0 | Make film optional and reliable | First interaction triggers it on desktop; skip, reduced-motion, mobile, and ended states remain functional. |
| P1 | Build a coherent Ledger and Workshop system | Paper record blocks, technical trace nodes, evidence stamps, and source citations appear consistently. |
| P1 | Strengthen ownable identity | ChipTech lockup, RVU sublabel, trace line, and document serial system are consistent across routes. |
| P1 | Improve metadata and route descriptions | Unique title and description exist for each route. |
| P2 | Replace all pending cards with official artifacts | Requires approved projects, photos, people, and recruitment information from the club. |

## Acceptance criteria

The redesign is complete when a visitor can answer **what the club is, what it works on, what it has publicly done, who is involved, and how to join** without relying on the film. The film must feel like a crafted opening note, not a substitute for information. The site must expose current information gaps visibly, avoid platform-centric language, remain keyboard and mobile usable, and compile without TypeScript or production-build errors.
