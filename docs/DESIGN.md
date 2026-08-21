# Health Drudge — Design

Static Drudge-style SPA. All RSS is fetched at **build time** into
`public/data/*.json`. The browser never hits feed URLs.

```
scripts/sources.ts  →  fetch-feeds.ts  →  router / score / group
        → public/data/headlines.json (+ preview, brief, feed.xml)
        → Vite SPA
```

## Categories

CHOLESTEROL & LDL, CAC & PLAQUE, APOB & PARTICLES, FASTING GLUCOSE,
EXERCISE, NUTRITION, JOURNALS & RESEARCH, ANALYSIS, REDDIT & X.

Keyword routing can place a story in additional columns. Google News,
Reddit, ScienceDaily, and MedicalXpress are treated as aggregators so a
first-party journal/society headline wins trending when scores are close.

## Look

Same chrome as AI Drudge: siren red masthead, monospace, dark default,
three-column grid, bookmarks / read-later / mutes, hover cards, feed-health footer.

## Relationship to Collectors

`health-collector` writes dated Markdown collections. This site does **not**
read those files. It independently polls the same RSS roster hourly so the
homepage stays live between collector runs.
