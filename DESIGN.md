# ChipTech — Make something that works

## Strategy and sources
Audience: curious RV University students. Primary goal: contact the club about joining. Secondary goal: understand the practice and find documented events and leadership.
Category: community marketing site with an educational interaction. Core emotion: curiosity.
Sources: user-supplied guides/ROUTER.md and RULES.md; operating rules across A01–A02, B01–B19, C01–C08; the ten playbooks. B04 and B17 are explicitly unusable transcripts and are not evidence.

## Structure before styling
Text wireframe:
1. Header: full ChipTech name / Explore / Events / People / Join.
2. Hero: “Make something that works.” + RVU electronics club context + Join ChipTech; original circuit illustration, power interaction.
3. Short identity strip: Circuits / Embedded systems / Hardware prototyping.
4. Practice: “From what if to it works.” Three sequential steps and a local stop-motion circuit study, with pause.
5. Events: two sourced Circuitrix entries; compact upcoming-date notice. No invented activity counts.
6. People: Aryan Dubey, attributed LinkedIn role/background; no synthetic headshot.
7. Join: one direct CTA, beginner question answered, recruitment details explicitly unpublished.
8. Footer: all routes, contact and existing social sources.
Subpages retain existing routes with shorter intros and explicit sources.

Divergent alternatives considered: (A) keep paper archive + split illustrated card; (B) full-bleed circuit studio + luminous power interaction. B is selected because the user rejected the archive's blandness; A is the previous local revision.
This is an autonomous revision under the user's explicit build authorization, not a new approval-gated commission. Digital structural sketch above substitutes for physical paper.

## Art direction
C05 category: Christopher Nolan, constrained by A02 usable navigation. Signature element: a circuit that comes alive. Repeated visual rhyme: rounded circuit traces and a single signal dot.
Existing cyan brand accent retained, with ink, soft chalk, slate, and one intermediate surface. No arbitrary new brand palette. Source mood reference: original site's cyan/ink identity and physical breadboard geometry from the existing illustrated workbench.
Display anchor: Barlow Condensed 600. Body: Space Grotesk 400/500. Accent: IBM Plex Mono 400. Cap at three families.
Scale: 16px base; 1.25 modular ladder, with fluid interpolation and optical adjustment. Headings use non-colliding 1–1.08 line height and >= -.025em tracking. Prior user readability feedback overrides “tighten” when it crowds letters.
Container: 1280px, 12 columns, 24px gutters; 24px mobile side space. Deliberately alternate dense event rows, roomy manifesto, and immersive dark hero.
Eye path: Z-shaped hero; layered headings and sequential rows below.

## Motion contract (project choices, not claimed guide specifications)
Power switch: visitor controls visual state, no external effect. Circuit assembly: 12fps illustrated stop motion, pause control; stops offscreen/hidden. Scroll influence: <= 6 degree object rotation; native scrolling, no pinned waiting sequence.
Reveals: 650ms ease-out, 24px maximum displacement; stagger <= 180ms. Buttons: 180ms color/arrow shift. Reduced motion: final assembled static frame; no transforms or automatic playback. Focus: 3px visible outline; all primary controls >=44px.
User's explicit immersive animation request overrides the guide's micro-motion-only default; no scroll blocking or delayed navigation.

## Provenance and handoff
Aryan: https://in.linkedin.com/in/kabir-aryan-dubey — profile lists President at ChipTech, RVU 2025–2029; Android/UI work and RCAi described there. Self-reported role, not independent club verification.
Events: existing RVU Circuitrix record and RVU Facebook post; preserve attribution. No new dates, attendance, lab access, testimonials, project wins, or photos invented.
Illustrations are original visual studies, not evidence of an actual ChipTech project or a build-ready wiring schematic.
Manus assets absent: preserve old source files but new pages must not request missing media. No deployment requested; deliver local preview.
Run pnpm check, pnpm build, browser desktop + 390px + reduced-motion, navigation, controls, overflow and missing-media checks. Record outcomes after verification.

## Supplied photography
Source: user-supplied Google Drive album `Ideathon_3.0_Photos`, folder `1uTSPgRYj4lcMIR6zBNavsnv4UyoR8SA0`.
Web derivatives: room = IMG_1311.JPG; team = IMG_2038.JPG; feature = IMG_2068.JPG; making = IMG_1345.JPG; speaker = DSC_0011.JPG.
Originals retained outside the public bundle. EXIF orientation normalized, resized within 1600px, WebP quality 83. No identities inferred from photographs. Ideathon images are not presented as Circuitrix documentation.

## Verification — 2026-09-08
- TypeScript check and production build pass.
- Desktop hero inspected in Codex; 390px mobile hero and club section inspected visually.
- No horizontal overflow at 390px on home, photo story, or join.
- All three homepage photographs loaded after scrolling into view.
- Power toggle changes its pressed state; illustrated film pause changes to play.
- Mobile drawer opens and Join navigation reaches the new contact page.
- Reduced-motion emulation stops sculpture animation and disables the film control with a completed static composition.
- Desktop viewport and normal motion restored; homepage marked as preview deliverable.
- Local preview only; no remote push or deployment performed.
