# Active club sitemap

Primary: Home → Events → Ideathon 4.0; News; Blogs; Vlogs; Photography; Awards; Leaderboards; People; Join.
Projects remains accessible in the footer. Past event records remain at /ledger. /field-notes is retained as a compatible photo-story route. /live-event aliases /events/ideathon-4.

The homepage promotes the upcoming event. Every new channel has its own URL; news contains the sourced event and photo story, photography uses the supplied Ideathon 3.0 album. Blogs and vlogs accept email pitches and explicitly show no published entries. Awards and leaderboards do not invent winners or scores. These are static editorial pages, not a CMS or a live scoring backend.

## Event provenance
Source: https://unstop.com/competitions/ideathon-40-rv-university-bangalore-1750113
Read full expanded description in browser, 2026-09-08. Source updated 2026-09-06 19:16 IST.
Programme, venue, fee, eligibility, abstract, progression, prizes, rules and logistics are paraphrased from the listing. Register CTA points to Unstop; no payment or registration is processed locally.
Conflicts preserved prominently: registration opening Sep 10 vs active Register UI; detail programme Sep 25 vs stage widget Sep 25–28; deadline widget Sep 15 00:00 IST. 50 teams refers to pre-event selection, 30 refers to final-round advancement, not contradictory counts.

## Pinterest reference collection
- Image / geometric study: https://kr.pinterest.com/pin/333547916167950862/ — split wireframe cube, displayed by Adamon von Eden, image watermark PI-SLICES. Studied negative space, thin edges and dark field.
- Video / motion study: https://kr.pinterest.com/pin/703898616798308638/ — “Motion Graphics Inspiration - @florentzunino”, posted by madeinprosto; description credits original to @florentzunino. Browser playback verified at 5 seconds, readyState 4. Studied intersecting geometric outlines and controlled loops.
- Event typography reference: https://kr.pinterest.com/pin/247909154483375868/ — Samsung CXL / Brut Works, discovered via search; not independently inspected.

Pinterest references inform original CSS geometry; they are not labelled as club media, and third-party videos are not copied into the vlogs collection. The supplied Drive photographs remain the source of real club imagery. No Pinterest saves/posts or account changes were performed.

## QA
2026-09-08: TypeScript and production build pass. Browser checked desktop event layout and registration destination. At 390px, Events, News, Blogs, Vlogs, Photography, Awards, Leaderboards, and the event detail all render without horizontal overflow. Mobile drawer → Events → event detail navigation works. Team/payment FAQ expands. Reduced-motion disables event orbit animation. Desktop viewport restored with event page open.

## September 8 media update
- Official poster supplied by Francis preserved verbatim in images/ideathon-4-official-poster.png, presented on the event noticeboard. Its 9 AM–6 PM hours, venue, and UG eligibility are explicitly distinguished from Unstop.
- Instagram public profile: local logo and 12 visible post/reel previews, plus all 14 slides from the September 4 team carousel Dc3-nwKn4y1. Names and roles transcribed from slides, original artwork preserved. Older feed pagination could not be confirmed after approval review hit an account usage limit. This is not a complete historical Instagram export.
- Reading room: generated with built-in image_gen; saved client/public/images/reading-room.webp. Prompt: original painterly fox studying circuit notes in a rainy teal library, amber lamp, breadboard and LED, wide composition with dark left-side text space, no logos or text. Fictional artwork labelled on page. Rain has a pause control and reduced-motion fallback.
- User-selected Pinterest references reviewed: 1196337405786575 (EnspireME motion clip), 69735494226501895 (Electronics vision board), 79657487156314682 (robot in front of code), 2040762323650478 (Instructables Electronic Components Art).
- 693484042627271089: Circuitmix, Trying to learn Soldering, approximately 22 seconds. Observed public MP4 saved to client/public/video/soldering-reference.mp4, user-initiated playback in Projects, attribution and original link retained. External reference, not club footage.

### Final local verification — September 8
- TypeScript check and production build pass after metadata refresh.
- Reading room rendered in the Codex browser; rain pause toggles its pressed state.
- At 390px, People, Projects, and Ideathon detail have no horizontal overflow. All rendered team images loaded.
- Local soldering video loaded with readyState 4, duration 22.09 seconds, and playback advanced beyond 13 seconds.
- Projects and People metadata now describe the active club and official team rather than archive placeholders.

### Profile and workbench refinements — September 8
- Transcribed 15 official team taglines as selectable text, with slow left-to-right colour animation, individual pause controls, and reduced-motion fallback.
- Hero punchline: Small components. Big possibilities. CHIPTECH is a single display-font word, with the broad SVG animation override corrected.
- Footer social/contact links remain on one row at desktop and 390px.
- Replaced the disconnected breadboard illustration with a complete series schematic: 9 V, 1 kΩ, red LED (assumed 2 V forward drop), 7 mA; resistor dissipation 49 mW.
- Adapted code curvature from https://in.pinterest.com/pin/733031276894133103/, retro instruments from https://in.pinterest.com/pin/163396292726460639/, and intimate workshop composition from https://in.pinterest.com/pin/588142032599403541/ into the original Projects bench calculator. References inspected visually; no reference images republished.
- Calculator verified at 1 kΩ (7.00 mA) and 2.2 kΩ (3.18 mA). TypeScript and build pass. Portrait uses a CSS crop of the official Instagram announcement.
