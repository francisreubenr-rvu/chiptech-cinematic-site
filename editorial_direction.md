# ChipTech Editorial Cinematic Direction

## Design movement

The redesign takes the site from an engineering ledger toward an **editorial field journal**. The page should feel like a well-made university publication that happens to document hardware work: large cover imagery, crisp typographic hierarchy, marginal evidence notes, and tactile inserts that move only when they have something to add.

The visual rhythm is deliberately asymmetric. A cinematic hero occupies one complete editorial spread, then the page moves through warm record pages, dense dark archive pages, and brief color interruptions. Nothing is centered merely because it was easier to code. That habit has done enough damage already.

## Hero composition

The home route opens as a full-bleed moving cover. Bench imagery fills the field behind a graphite editorial mask. The title lives in a left column with a narrow publication masthead, while the right lower edge carries one source docket. A smooth film grade, slow scale shift, and single signal-line draw establish depth. The content remains legible at every moment and no proof label overlaps the primary heading.

## Material system

| Layer | Role | Material treatment |
|---|---|---|
| Graphite | Cinematic ground | Near-black photographic mask with subtle paper grain and a deep blue-green undertone. |
| Archive paper | Reading surface | Warm off-white with faint halftone dots, registration lines, and generous empty area. |
| Cyan | Active signal | Reserved for navigation, source status, directional cues, and the occasional charged word. |
| Copper | Physical register | Thin print offset, card shadow, and hand-made construction cue. |
| Type | Editorial voice | Large Space Grotesk cover headlines, compact IBM Plex Mono captions, calm body text. |

## Motion hierarchy

The hero video moves continuously but slowly. Stop-motion accents operate as short stepped transformations: a source docket rises into place, a paper label tilts by one degree, and a trace node snaps through three positions. Scroll-driven section entry uses only opacity and a short `translateY`, 360ms maximum. The page never uses endless floating, parallax theatre, or uninterruptible animation. Reduced-motion users receive the final visual state immediately.

## Route rhythm

The homepage is the cover story. Projects is an archive catalog. Ledger is a chronological evidence desk. People is a contribution feature. Join is a small call-for-submissions page. The shared trace line, document serials, and footnote-like dockets make them part of one publication without cloning the exact same giant headline five times.
