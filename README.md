# HEALTH DRUDGE

A Drudge-Report-style aggregator for cardiometabolic headlines: LDL/cholesterol,
CAC score, ApoB, fasting glucose, exercise, and nutrition. Static site, no server,
refreshed hourly by GitHub Actions. 138 RSS sources across 9 categories, matching
the `health-collector` roster in the Collectors fleet.

**Live:** https://pnelsonftp.github.io/health-drudge/  
**Subscribe:** https://pnelsonftp.github.io/health-drudge/feed.xml (Atom)  
**Local:** http://localhost:5173/health-drudge/

Sibling of [ai-drudge](https://pnelsonftp.github.io/ai-drudge/),
[cyber-drudge](https://pnelsonftp.github.io/cyber-drudge/), and
[jesus-report](https://pnelsonftp.github.io/jesus-report/).

## Stack

- Vite 6 + React 19 + TypeScript
- Tailwind CSS v4
- `fast-xml-parser` for RSS/Atom/RDF (build-time only)
- GitHub Pages + Actions (hourly refresh + weekly feed audit)

## Local development

```bash
cd health-drudge
npm ci
npm run build:data
npm run dev
# → http://localhost:5173/health-drudge/
```

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Vite |
| `npm run build` | Typecheck + static site → `dist/` |
| `npm run build:data` | Fetch RSS and write `public/data/*` + `feed.xml` |
| `npm run build:check` | Quality gate on the last data build |
| `npm run validate:feeds` | Liveness audit |
| `npm test` | Router / URL-unwrap tests |

Optional: set `ANTHROPIC_API_KEY` for a Claude daily brief. Without it, a curated fallback brief is written.

## Layout

Same homepage as the other Drudge sites: masthead, daily brief, trending clusters,
lead story, latest strip, then a three-column category grid.

## Sources

Feed list lives in `scripts/sources.ts`, generated from
`../Collectors/health-collector/sources.yaml` (2026-08-21). Clinic HTML listings
without RSS are covered by Google News `site:` queries. Daily X.com is Google
News `site:x.com` (public Nitter/RSSHub instances were dead when probed).
