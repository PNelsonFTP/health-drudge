# Health Drudge — Deploy

| Homepage | https://pnelsonftp.github.io/health-drudge/ |
| Site Atom feed | https://pnelsonftp.github.io/health-drudge/feed.xml |
| Repository | https://github.com/PNelsonFTP/health-drudge |

Vite `base` is `/health-drudge/`. If you rename the repo, change
`vite.config.ts` and `scripts/lib/emitFeed.ts`.

## Pages

1. Public GitHub repo `PNelsonFTP/health-drudge` on branch `main`.
2. Settings → Pages → **Source: GitHub Actions**.
3. `.github/workflows/refresh.yml` builds `dist/` and deploys with `deploy-pages`.

Optional secret: `ANTHROPIC_API_KEY` for the Claude brief.

First push to `main` triggers the workflow. Hourly cron is `5 * * * *` UTC.
