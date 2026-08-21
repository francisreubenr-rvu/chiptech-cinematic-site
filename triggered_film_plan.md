# ChipTech Workshop Film: Triggered Stop-Motion Plan

## Film contract

The website will present a **45-second, 16:9, original stop-motion workshop film** as a single deliberate event. The film begins when the visitor first intentionally scrolls down, presses Enter, Page Down, Space, or the visible start control. It runs once at its authored pace and never maps time to scroll position. The intro copy, controls, and progress indicator sit outside the video aperture, while the film itself contains **no generated text, labels, logos, or captions**.

Audio is limited to quiet diegetic workshop sound: paper movement, miniature wheels, a soft desk-lamp click, tiny component clicks, a short motor whirr, and a restrained final electronic chirp. There is no score, no narration, and no dialogue. If the browser rejects sound playback after scroll, the film continues muted and exposes an external sound-enable control, rather than using a deceptive or broken autoplay workaround.

## Original character and visual bible

| Element | Definition |
|---|---|
| **Nim** | A small original wool-and-clay workshop creature with a cocoa-brown felt oval body, tiny charcoal legs, an off-white fabric face panel, round black button eyes, and one stitched cyan thread across its back. Nim has no resemblance to any named or existing animation character. |
| **Pip** | A palm-sized original warm-amber clay helper with a round pebble body, square spectacles made from thin copper wire, and two small wheel feet. Pip brings parts and creates physical-comedy interruptions. |
| **Set** | A hand-built miniature graphite workbench with off-white engineering paper, felt shadows, copper wire, a cream breadboard, one black microchip, and cyan LED light. |
| **Style** | Original practical stop-motion with individually sculpted imperfect objects, tactile felt and paper fibers, visible handmade joins, fixed 35mm miniature-workshop framing, and restrained, authored comedy. |
| **Palette** | Graphite and paper as foundation, one cyan signal, copper or amber as action cue, and muted clay browns. The material contrast is deliberate rather than generic dark-tech gloss. |

## Sequence and continuity plan

| Time | Clip | Narrative purpose | Action and continuity | Diegetic sound |
|---|---|---|---|---|
| 00:00–00:05 | 01. The bench wakes | Establish | Nim sits beside an unpowered black chip. Pip rolls in from the right with a tiny desk-lamp switch, and Nim clicks the lamp on. The chip, paper, breadboard, and both puppets remain in the same overhead workshop world. | Felt shuffle, soft lamp click. |
| 00:05–00:10 | 02. The chip refuses | Develop | Nim nudges the chip across the paper. It spins gently back toward Nim, while Pip steadies it with a copper wire loop. End with chip centered. | Paper scrape, tiny chip tap. |
| 00:10–00:15 | 03. Pins and paper | Develop | Pip brings blank colored paper tabs; Nim places them around the chip as physical markers. Both puppets remain on either side of the same chip and the breadboard stays lower right. | Paper rustle, soft card patter. |
| 00:15–00:20 | 04. A stubborn solder strip | Develop | A copper strip springs loose. Nim catches one end while Pip guides the other across the chip pads, creating a small comic wobble. The strip settles securely by the end. | Copper tick, felted thump. |
| 00:20–00:25 | 05. Route the signal | Develop | Nim pulls a cyan paper wire toward the breadboard. Pip rolls backward, carrying the end through a curve until the connection lands. All prior pieces remain present. | Paper drag, wheel roll, click. |
| 00:25–00:30 | 06. Power trial | Develop | Pip carries an amber power tab, gives it to Nim, and Nim places it at the breadboard. One cyan LED lights after a brief pause, with the rest of the miniature room unchanged. | Two light clicks, small electric chirp. |
| 00:30–00:35 | 07. It moves | Climax | A tiny wheeled prototype wakes and rolls a short, safe semicircle around the pair. Nim takes one careful step back while Pip celebrates with a single wheel spin. | Gentle motor whirr, quiet rolling wheel. |
| 00:35–00:40 | 08. More hands | Resolve | Three faceted off-white maker cards slide into the workbench background. Nim and Pip each pull one closer to the prototype, forming a balanced community tableau. | Paper slide, three tiny taps. |
| 00:40–00:45 | 09. Signal held | Resolve | The completed workbench holds. The cyan LED pulses once, Nim and Pip exchange a small nod, and the camera keeps the final composition steady for the transition into the homepage. | One restrained final LED chirp, room tone. |

## Generation and assembly rules

Each five-second clip uses the previous clip’s last decodable frame as its next first keyframe. The camera remains fixed and upright in a 16:9 miniature-workshop composition. Every prompt prohibits on-screen text and requires all active objects to remain physically present throughout the clip, except for the newly introduced object explicitly described in its action. The final output is assembled in order with preserved diegetic sound, yielding one 45-second H.264 source.

## Trigger and fallback rules

| Situation | Behavior |
|---|---|
| First meaningful scroll or keyboard scroll | Lock page scroll temporarily, start playback at normal authored speed, and show a compact external skip button. |
| Play promise resolves with sound | Keep the quiet workshop sound at a restrained volume. |
| Browser blocks unmuted play | Continue muted and expose an external `Enable workshop sound` control. |
| Reduced motion | Do not autoplay the film. Show the complete static workshop composition and an explicit `Play film` action. |
| Mobile | Show a still first frame with an explicit `Play workshop film` button. The full film plays only after a tap. |
| Film ends or Skip is chosen | Restore page scroll and move focus to the ChipTech homepage landmark. |
