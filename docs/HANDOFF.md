# Health Drudge — Handoff

Operations guide. Last updated: 2026-08-21.

## Quick reference

| Item | Value |
|------|-------|
| Public name | Health Drudge |
| Live | https://pnelsonftp.github.io/health-drudge/ |
| Site feed | https://pnelsonftp.github.io/health-drudge/feed.xml |
| Repository | https://github.com/PNelsonFTP/health-drudge |
| Default branch | `main` |
| Local path | `/Users/paulnelson/Documents/Development/health-drudge` |
| Hourly workflow | `.github/workflows/refresh.yml` (`5 * * * *` UTC) |
| Weekly feed audit | `.github/workflows/feed-audit.yml` (Mondays 12:00 UTC) |
| Node (CI) | 22 |
| Optional secret | `ANTHROPIC_API_KEY` — Claude brief; fallback without it |

Pages source must be **GitHub Actions**, not “Deploy from a branch”.
Details: [DEPLOY.md](./DEPLOY.md).

## Local development

```bash
cd health-drudge
npm ci
npm run build:data
npm run dev
# → http://localhost:5173/health-drudge/
```

## Common tasks

### Add a feed

1. Confirm HTTP 200 + real RSS/Atom.
2. Append to `SOURCES` in `scripts/sources.ts` with a home `category` and `priority`.
3. `npm run validate:feeds && npm run build:data && npm run build:check`

Keep the list aligned with `Collectors/health-collector/sources.yaml` when possible.

### Failed feeds

Reddit official `.rss` 429s under burst. The fetcher uses a descriptive UA.
Daily sequential Actions runs usually succeed; a few Reddit 429s will not fail
the quality gate (`minFeedOkRatio` is 0.70).
