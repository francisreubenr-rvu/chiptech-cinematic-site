# ChipTech Frame Film Contract

## Film definition

The frame-driven entry uses one silent **6-second 16:9 stop-motion film** at **24 fps**, producing **144 extracted frames**. The source film tells the existing eight-step narrative in one continuous locked-off tabletop composition: a single chip, labelled pins, soldering, routed wires, a breadboard, power, a working prototype, and three student-community workstream cards. There is no dialogue, narration, or background music.

## Scroll and load contract

| Concern | Implementation decision |
|---|---|
| Desktop playback | Scroll progress maps directly and monotonically to source frame `0` through `143`. Frame selection is quantized, never interpolated. |
| Visible cadence | The source has 24 unique visual frames per second. The browser draws the matching discrete frame as the user scrolls. |
| Initial load | The first frame and the next 12 frames preload at high priority. The rest are fetched on demand in a small window around the active frame. |
| Media format | Extracted JPEG frames are resized to 960 by 540 and quality-optimized for source payload and browser decode speed. |
| Mobile | The original four-scene CSS introduction remains the responsive mobile path. It avoids frame-sequence payload on small viewports. |
| Reduced motion | The original static collage remains the preference-respecting path. No frame fetching or scroll-linked art runs. |
| Fallback | If the source frame sequence fails to load, the existing CSS tactile circuit composition remains present. |

## Video-production treatment

| Dimension | Decision |
|---|---|
| Purpose | Give the desktop introduction real photographed stop-motion texture rather than simulated movement. |
| Visual style | Paper-cut engineering notebook, physically photographed component cards, rough paper edges, small registration offsets, matte graphite surface, one cyan signal, limited amber power accent. |
| Camera | Locked overhead tabletop shot. The camera never pans, zooms, or changes lens. |
| Recurring objects | Off-white paper sheet, black microchip marked only with a geometric cyan trace, hand-cut wire paths, breadboard, amber power tab, cyan LED dots, three community cards. |
| Audio | None. The source film is silent and browser playback uses frames only. |
| Text | No generated readable text. HTML scene copy remains the stable accessible language layer. |

## Transition description for source generation

The complete tabletop surface, off-white engineering paper, dark chip, paper wire elements, breadboard, and empty card positions exist from the first frame and remain within the overhead composition. Across the six seconds, objects are added by discrete stop-motion holds: labels land, a short copper solder strip crosses the chip pads, three paper wires connect to the breadboard, an amber power tab appears, cyan LED dots illuminate, and three paper community cards fan outward. Nothing morphs, melts, or teleports; every addition is a plausible physical placement on the same surface, and the final frame is a balanced collaborative circuit composition.
