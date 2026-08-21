import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isAggregatorSource, pickTrendingLead } from "./router";
import type { GroupedArticle } from "../types";

function article(partial: Partial<GroupedArticle> & Pick<GroupedArticle, "title" | "url" | "source">): GroupedArticle {
  return {
    id: partial.id ?? partial.url,
    category: "cholesterol",
    priority: "high",
    publishedAt: "2026-08-18T12:00:00.000Z",
    publishedRaw: null,
    summary: null,
    collectedAt: "2026-08-18T12:00:00.000Z",
    related: [],
    ...partial,
  };
}

describe("trending lead quality", () => {
  it("treats good-news aggregators as aggregators", () => {
    assert.equal(isAggregatorSource("Google News: ApoB"), true);
    assert.equal(isAggregatorSource("X.com via GNews: lipids / CAC / ApoB"), true);
    assert.equal(isAggregatorSource("Journal of Clinical Lipidology"), false);
  });

  it("prefers a first-party headline within 10% of the top aggregator score", () => {
    const agg = article({ title: "apob residual risk", url: "https://news.google.com/rss/articles/x", source: "Google News: ApoB" });
    const press = article({
      title: "ApoB outperforms LDL-C for residual risk",
      url: "https://www.lipidjournal.com/article/apob",
      source: "Journal of Clinical Lipidology",
    });
    const lead = pickTrendingLead([
      { article: agg, score: 100 },
      { article: press, score: 92 },
    ]);
    assert.equal(lead.source, "Journal of Clinical Lipidology");
    assert.equal(lead.related.some((r) => r.source === "Google News: ApoB"), true);
  });

  it("keeps the aggregator when no first-party alternative is close", () => {
    const agg = article({ title: "only on gnews", url: "https://news.google.com/rss/articles/y", source: "Google News: ApoB" });
    const old = article({ title: "unrelated journal", url: "https://www.lipidjournal.com/old", source: "Journal of Clinical Lipidology" });
    const lead = pickTrendingLead([
      { article: agg, score: 100 },
      { article: old, score: 50 },
    ]);
    assert.equal(lead.source, "Google News: ApoB");
  });
});
