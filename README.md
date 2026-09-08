# ChipTech — RV University

The active website for ChipTech, RV University’s student electronics and hardware community.

**Website:** [chiptech-rvu.vercel.app](https://chiptech-rvu.vercel.app)

## Explore

- **Home:** club introduction, interactive circuit artwork, events, and joining information.
- **Events:** upcoming activities and the detailed [Ideathon 4.0 programme](https://chiptech-rvu.vercel.app/events/ideathon-4), including the original college poster.
- **People:** official core-team announcements and individual animated taglines.
- **Projects:** soldering reference video, an interactive LED-current calculator, and a complete series-circuit schematic.
- **Blogs:** an illustrated reading room, ready for club articles.
- **News, vlogs, photography, awards, and leaderboards:** dedicated destinations for club activity. Unpublished content is shown honestly rather than filled with invented records.

## Development

Requires Node.js 24 and pnpm. The exact pnpm version is specified in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev --port 3077
```

Open http://localhost:3077.

```sh
pnpm check    # TypeScript
pnpm build    # Vite client and Express server
pnpm preview  # Preview the Vite build locally
```

## Project structure

```text
client/src/pages/        Route content
client/src/components/  Shared layout, media, animation, and experiments
client/src/lib/         Club data and source-backed media records
client/src/signal.css   Current visual system and responsive refinements
client/public/          Local images and video
server/                 Optional Express server
DESIGN.md               Design direction and accessibility decisions
docs/LIVE-SITE.md       Source provenance, content caveats, and verification notes
vercel.json             Vercel build output and client-side route fallback
```

The frontend uses React, TypeScript, Vite, Wouter, and Tailwind CSS. Animations include pause controls where appropriate and respect reduced-motion preferences.

## Deployment

The existing Vercel project is named `chiptech`. It serves the static client from `dist/public`; `dist/index.js` is the optional Express server and is not the Vercel static entry point. Client routes rewrite to `index.html`.

The Vercel project is not connected to GitHub for automatic deployment. After pushing a verified change, deploy explicitly from a checkout linked to the correct project:

```sh
vercel link --project chiptech
vercel deploy          # Preview
vercel deploy --prod   # Production, when approved
```

Verify direct route loads, media playback, and mobile layouts on the resulting deployment. Do not commit `.vercel` or environment files.

## Content and attribution

- Team names, roles, taglines, and announcement slides come from the [official ChipTech Instagram account](https://www.instagram.com/chiptech_rvu/). The imported feed is a dated selection, not a complete or automatically synchronized Instagram feed.
- Ideathon 3.0 photography comes from the club-supplied album. The Ideathon 4.0 college poster is preserved in its original design.
- Event details are summarized from the [RV University Unstop listing](https://unstop.com/competitions/ideathon-40-rv-university-bangalore-1750113). Differences between the listing and college poster are disclosed on the event page; confirm final logistics with the organizer.
- The fox reading-room illustration is original AI-generated artwork, labelled as a fictional scene.
- The soldering clip is attributed to Circuitmix and linked to its original Pinterest post. It is external inspiration, not ChipTech event footage.
- The workbench calculator is an illustrative electrical model: a 9 V supply and a red LED with an assumed 2 V forward drop. Actual component characteristics vary.

See [source and verification notes](docs/LIVE-SITE.md) for detailed provenance. Third-party assets retain their respective owners’ rights; their inclusion does not grant reuse rights.
