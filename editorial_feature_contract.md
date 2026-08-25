# Editorial Feature Contract

## Hero intro reel and sound

The hero reel is the existing original fifteen-second Nim and Pip workshop film, reframed as an editorial moving cover. It starts muted because uninvited audio is a browser-hostile choice. A visible control sits below the hero copy and uses a clear `Sound off` or `Sound on` state. The control changes the video’s `muted` property only after the visitor activates it. If the browser prevents sound playback, the control reverts to `Sound off` and does not pretend otherwise. The reel remains nonessential to navigation and all cover text stays outside the aperture.

## Project photo essay

The new `/field-notes` route is an **archive-format photo essay**, not a claim that an unverified project shipped. It uses the material language of a build record: a visual cover, three process plates, captions, and a final artifact request. It distinguishes clearly between a **visual study** and an **official ChipTech project record**. Once the club supplies approved build photography, the same route can become a real project essay without a layout rewrite.

## Next workshop docket

The homepage docket exposes a changing interface state rather than fabricated programme data. Its default state is **schedule pending publication**. Hovering or keyboard focusing the docket expands a small evidence panel that explains which details are missing: date, time, venue, topic, and registration route. A direct email link provides the current action. The content is represented as a typed object so an official record can later replace the pending state in one edit.

## Motion and accessibility

The reel uses smooth video only. The photo essay uses brief stepped entrance holds for photo plates and captions. The docket’s expand state uses opacity and transform, with focus handling equivalent to hover. `prefers-reduced-motion` renders all three interfaces in their final stable state. No module relies on hover alone, unprompted audio, or image-only text.
