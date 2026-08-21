# ChipTech Cinematic Video Blueprint

## Production intent

The website will use three silent, short, hyper-real 16:9 loops. They establish a real-feeling nocturnal electronics workshop, then move closer to the handmade prototype, then resolve with a calm signal-path ambience. Each clip is self-contained, has no dialogue, no narration, no background music, and no on-screen text. Website copy remains in HTML for accessibility and exactness.

## Global visual definition

| Dimension | Definition |
|---|---|
| Sub-genre | Hyper-real industrial product cinema set in a contemporary Bengaluru university electronics lab |
| Rendering | Photoreal live-action image quality, natural human movement, physically plausible electronics |
| Color and light | Graphite blacks, focused signal cyan from instruments and LEDs, restrained warm copper workbench light |
| Detail density | High-detail foreground components and tactile lab surfaces; controlled, softly defocused background |
| Sound | None. Clips are embedded muted and loop silently. |
| Persistent visual anchors | Cyan oscilloscope trace, soldered prototype board, copper workbench light, black antistatic mat, real Indian student maker environment |

## Clip plan

| Clip | Website role | Duration | Scene and action | Camera | Transition description |
|---|---|---:|---|---|---|
| Hero lab loop | Hero panel | 6 seconds | A realistic Indian university student works at a dark electronics bench. Their hands adjust a breadboard prototype while a cyan oscilloscope trace begins pulsing. | Slow 35mm dolly right at bench height | The hands, compact breadboard, oscilloscope and black antistatic mat are visible from the opening frame and remain throughout. The camera travels slowly right by less than one metre while the student makes one precise adjustment with a probe. The cyan trace grows gradually brighter after the adjustment; cables, notebook, and copper task light remain physically fixed. |
| Prototype loop | Build section | 6 seconds | Macro view of a small handmade wheeled microcontroller prototype with a cyan LED strip. The board wakes, LEDs sequence, and a tiny motor wheel turns once. | Macro slider move from low-left to low-right | The small robot, its exposed microcontroller, neat colored wires, black workshop surface, and cyan LED strip are all present from the opening frame and persist. The camera slides slowly across the physical prototype as the LEDs illuminate in a left-to-right sequence. The motor wheel turns one measured rotation, then stops; no components appear, vanish, or teleport. |
| Signal ambience loop | Contact panel | 5 seconds | A graphite lab desk at night with a completed circuit board, a softly glowing cyan signal path, and a hand withdrawing after a successful test. | Slow overhead crane rise | The complete circuit board and illuminated cyan signal path are visible at the first frame and remain present. A student hand starts near the board, releases the final probe, and withdraws steadily beyond frame edge while the camera rises gently. The signal path continues a soft pulse through the end, while the desk, notebook, and copper lamp remain stable. |

## Reference imagery required

| Reference | Clips using it | Framing |
|---|---|---|
| Primary hardware-lab anchor | Hero lab loop and signal ambience loop | 16:9 upright wide workbench composition |
| Macro prototype anchor | Prototype loop | 16:9 upright close low-angle composition |

## Playback behaviour

Video loops will use `autoplay`, `muted`, `loop`, `playsInline`, and a poster image. On small screens and under `prefers-reduced-motion: reduce`, the page will retain the poster image rather than moving footage. The final website will have no video audio and no disruptive full-screen playback.
