// Source feed list for Health Drudge.
//
// Roster copied from Collectors/health-collector/sources.yaml
// (probe-verified 2026-08-21). HTML-only clinic listings are omitted;
// those are covered by Google News site: queries below.
//
// Re-check any time with: npm run validate:feeds

export type CategoryId =
  | "cholesterol"
  | "cac"
  | "apob"
  | "glucose"
  | "exercise"
  | "nutrition"
  | "research"
  | "analysis"
  | "community";

export type Priority = "critical" | "high" | "medium" | "low";

export interface FeedSource {
  name: string;
  url: string;
  category: CategoryId;
  priority: Priority;
}

export const SOURCES: FeedSource[] = [
  // ---------- cholesterol ----------
  { name: "AHA Heart News", url: "https://newsroom.heart.org/cats/heart_news.xml", category: "cholesterol", priority: "critical" },
  { name: "Google News: Mayo cholesterol", url: "https://news.google.com/rss/search?q=site:mayoclinic.org+(cholesterol+OR+statin+OR+LDL)&hl=en-US&gl=US&ceid=US:en", category: "cholesterol", priority: "medium" },
  { name: "Google News: Harvard cholesterol", url: "https://news.google.com/rss/search?q=site:health.harvard.edu+(cholesterol+OR+LDL+OR+statin)&hl=en-US&gl=US&ceid=US:en", category: "cholesterol", priority: "medium" },
  { name: "Google News: Cleveland Clinic cholesterol", url: "https://news.google.com/rss/search?q=site:my.clevelandclinic.org+(cholesterol+OR+statin+OR+LDL)&hl=en-US&gl=US&ceid=US:en", category: "cholesterol", priority: "medium" },
  { name: "Google News: FH / Lp(a) / bempedoic", url: "https://news.google.com/rss/search?q=%22familial+hypercholesterolemia%22+OR+%22Lp(a)%22+OR+%22bempedoic+acid%22&hl=en-US&gl=US&ceid=US:en", category: "cholesterol", priority: "high" },
  { name: "ScienceDaily Cholesterol", url: "https://www.sciencedaily.com/rss/health_medicine/cholesterol.xml", category: "cholesterol", priority: "medium" },
  { name: "Google News: Cholesterol / LDL", url: "https://news.google.com/rss/search?q=cholesterol+OR+LDL-C+OR+%22LDL+cholesterol%22&hl=en-US&gl=US&ceid=US:en", category: "cholesterol", priority: "medium" },
  { name: "Google News: ACC lipids", url: "https://news.google.com/rss/search?q=site:acc.org+(cholesterol+OR+LDL+OR+statin+OR+PCSK9)&hl=en-US&gl=US&ceid=US:en", category: "cholesterol", priority: "high" },
  { name: "Google News: NLA lipid.org", url: "https://news.google.com/rss/search?q=site:lipid.org+(news+OR+guideline+OR+statement+OR+ApoB+OR+cholesterol)&hl=en-US&gl=US&ceid=US:en", category: "cholesterol", priority: "high" },
  { name: "Google News: oral PCSK9 / inclisiran", url: "https://news.google.com/rss/search?q=inclisiran+OR+Leqvio+OR+enlicitide+OR+%22oral+PCSK9%22&hl=en-US&gl=US&ceid=US:en", category: "cholesterol", priority: "high" },
  { name: "Google News: NHLBI cholesterol", url: "https://news.google.com/rss/search?q=site:nhlbi.nih.gov+(cholesterol+OR+LDL+OR+statin)&hl=en-US&gl=US&ceid=US:en", category: "cholesterol", priority: "medium" },
  { name: "PCNA", url: "https://pcna.net/feed/", category: "cholesterol", priority: "medium" },

  // ---------- cac ----------
  { name: "ScienceDaily Heart Disease", url: "https://www.sciencedaily.com/rss/health_medicine/heart_disease.xml", category: "cac", priority: "medium" },
  { name: "Google News: CAC score", url: "https://news.google.com/rss/search?q=%22CAC+score%22+OR+%22coronary+artery+calcium%22+OR+%22calcium+score%22&hl=en-US&gl=US&ceid=US:en", category: "cac", priority: "high" },
  { name: "Circulation: Cardiovascular Imaging", url: "https://www.ahajournals.org/action/showFeed?type=etoc&feed=rss&jc=circimaging", category: "cac", priority: "high" },
  { name: "Google News: CAC progression", url: "https://news.google.com/rss/search?q=%22coronary+artery+calcium%22+(progression+OR+regression+OR+statin+OR+plaque)&hl=en-US&gl=US&ceid=US:en", category: "cac", priority: "high" },
  { name: "SCCT Society Updates", url: "https://scct.org/resource/rss/news.rss", category: "cac", priority: "critical" },
  { name: "JACC Cardiovascular Imaging (advance)", url: "https://www.jacc.org/action/showFeed?type=axatoc&feed=rss&jc=jcmg", category: "cac", priority: "critical" },
  { name: "Journal of Cardiovascular CT", url: "https://www.journalofcardiovascularct.com/action/showFeed?type=etoc&feed=rss&jc=jcct", category: "cac", priority: "high" },
  { name: "EHJ Cardiovascular Imaging", url: "https://academic.oup.com/rss/site_5376/3237.xml", category: "cac", priority: "high" },
  { name: "Google News: ACC CAC", url: "https://news.google.com/rss/search?q=site:acc.org+(%22CAC+score%22+OR+%22coronary+artery+calcium%22+OR+%22calcium+score%22)&hl=en-US&gl=US&ceid=US:en", category: "cac", priority: "high" },
  { name: "Google News: MESA + CAC", url: "https://news.google.com/rss/search?q=MESA+(%22coronary+artery+calcium%22+OR+%22CAC+score%22+OR+%22calcium+score%22)&hl=en-US&gl=US&ceid=US:en", category: "cac", priority: "high" },
  { name: "Google News: CCTA / plaque change", url: "https://news.google.com/rss/search?q=(CCTA+OR+%22coronary+CT%22)+(%22plaque+regression%22+OR+%22plaque+progression%22+OR+CAC)&hl=en-US&gl=US&ceid=US:en", category: "cac", priority: "high" },
  { name: "Google News: TCTMD CAC", url: "https://news.google.com/rss/search?q=site:tctmd.com+(%22calcium+score%22+OR+CAC+OR+%22coronary+calcium%22)&hl=en-US&gl=US&ceid=US:en", category: "cac", priority: "medium" },
  { name: "Google News: CAC + PCSK9", url: "https://news.google.com/rss/search?q=%22coronary+artery+calcium%22+(PCSK9+OR+evolocumab+OR+alirocumab)&hl=en-US&gl=US&ceid=US:en", category: "cac", priority: "high" },

  // ---------- apob ----------
  { name: "Journal of Clinical Lipidology", url: "https://www.lipidjournal.com/action/showFeed?jc=jacl&type=etoc&feed=rss", category: "apob", priority: "critical" },
  { name: "EAS News", url: "https://eas-society.org/feed/", category: "apob", priority: "medium" },
  { name: "EAS Topic News", url: "https://eas-society.org/topics/news/feed/", category: "apob", priority: "medium" },
  { name: "EAS Publications", url: "https://eas-society.org/topics/publications/feed/", category: "apob", priority: "high" },
  { name: "EAS Lipid Clinic Network", url: "https://eas-society.org/topics/lipid-clinic-network/feed/", category: "apob", priority: "high" },
  { name: "Google News: PCSK9 / ezetimibe / bempedoic", url: "https://news.google.com/rss/search?q=PCSK9+OR+ezetimibe+OR+%22bempedoic+acid%22&hl=en-US&gl=US&ceid=US:en", category: "apob", priority: "high" },
  { name: "Journal of Lipid Research", url: "https://www.jlr.org/current.rss", category: "apob", priority: "high" },
  { name: "Family Heart Foundation", url: "https://familyheart.org/feed", category: "apob", priority: "high" },
  { name: "Google News: ApoB", url: "https://news.google.com/rss/search?q=ApoB+OR+%22apo+B%22+OR+apolipoprotein&hl=en-US&gl=US&ceid=US:en", category: "apob", priority: "high" },
  { name: "Learn Your Lipids (FNLA)", url: "https://www.learnyourlipids.com/feed/", category: "apob", priority: "medium" },
  { name: "Google News: 2026 dyslipidemia guideline", url: "https://news.google.com/rss/search?q=%222026%22+(dyslipidemia+OR+%22blood+cholesterol%22)+guideline+(ACC+OR+AHA+OR+ApoB)&hl=en-US&gl=US&ceid=US:en", category: "apob", priority: "critical" },
  { name: "Google News: residual risk + ApoB", url: "https://news.google.com/rss/search?q=%22residual+risk%22+(ApoB+OR+%22apo+B%22+OR+lipidology)&hl=en-US&gl=US&ceid=US:en", category: "apob", priority: "high" },
  { name: "Google News: PubMed ApoB", url: "https://news.google.com/rss/search?q=site:pubmed.ncbi.nlm.nih.gov+(ApoB+OR+%22apolipoprotein+B%22)&hl=en-US&gl=US&ceid=US:en", category: "apob", priority: "high" },

  // ---------- glucose ----------
  { name: "ADA News", url: "https://diabetes.org/rss.xml", category: "glucose", priority: "critical" },
  { name: "Diabetes Care (current)", url: "https://diabetesjournals.org/rss/site_1000003/1000004.xml", category: "glucose", priority: "critical" },
  { name: "Diabetes Care (advance)", url: "https://diabetesjournals.org/rss/site_1000003/advanceAccess_1000004.xml", category: "glucose", priority: "high" },
  { name: "NIDDK Discoveries & Practice", url: "https://www.niddk.nih.gov/health-information/professionals/diabetes-discoveries-practice/rss", category: "glucose", priority: "high" },
  { name: "NIDDK News", url: "https://www.niddk.nih.gov/rss/news", category: "glucose", priority: "medium" },
  { name: "Ben Bikman", url: "https://benbikman.com/feed", category: "glucose", priority: "medium" },
  { name: "Insulin IQ", url: "https://www.insuliniq.com/feed", category: "glucose", priority: "medium" },
  { name: "Mastering Diabetes", url: "https://www.masteringdiabetes.org/feed/", category: "glucose", priority: "low" },
  { name: "ScienceDaily Diabetes", url: "https://www.sciencedaily.com/rss/health_medicine/diabetes.xml", category: "glucose", priority: "medium" },
  { name: "Google News: Fasting glucose / IR", url: "https://news.google.com/rss/search?q=%22fasting+glucose%22+OR+prediabetes+OR+%22insulin+resistance%22&hl=en-US&gl=US&ceid=US:en", category: "glucose", priority: "high" },
  { name: "ADA Diabetes (current)", url: "https://diabetesjournals.org/rss/site_1000001/1000003.xml", category: "glucose", priority: "high" },
  { name: "ADA Diabetes (advance)", url: "https://diabetesjournals.org/rss/site_1000001/advanceAccess_1000003.xml", category: "glucose", priority: "high" },
  { name: "Diabetologia", url: "https://link.springer.com/search.rss?facet-content-type=Article&facet-journal-id=125", category: "glucose", priority: "high" },
  { name: "Lancet Diabetes & Endocrinology", url: "https://www.thelancet.com/rssfeed/landia_online.xml", category: "glucose", priority: "high" },
  { name: "JCEM", url: "https://academic.oup.com/rss/site_5591/3464.xml", category: "glucose", priority: "high" },
  { name: "Journal of the Endocrine Society", url: "https://academic.oup.com/rss/site_6066/3935.xml", category: "glucose", priority: "high" },
  { name: "MedicalXpress Endocrinology & Metabolism", url: "https://medicalxpress.com/rss-feed/endocrinology-metabolism-news/", category: "glucose", priority: "medium" },
  { name: "Healio Endocrinology", url: "https://www.healio.com/sws/feed/news/endocrinology", category: "glucose", priority: "medium" },
  { name: "Endocrine News", url: "https://endocrinenews.endocrine.org/feed/", category: "glucose", priority: "medium" },
  { name: "Google News: FPG / HOMA-IR / IFG", url: "https://news.google.com/rss/search?q=%22fasting+plasma+glucose%22+OR+HOMA-IR+OR+%22impaired+fasting+glucose%22&hl=en-US&gl=US&ceid=US:en", category: "glucose", priority: "high" },
  { name: "Google News: CDC diabetes", url: "https://news.google.com/rss/search?q=when:1y+site:cdc.gov/diabetes+(prediabetes+OR+diabetes)&hl=en-US&gl=US&ceid=US:en", category: "glucose", priority: "high" },
  { name: "Google News: ADA DOCM Care", url: "https://news.google.com/rss/search?q=site:diabetesjournals.org/docm-care&hl=en-US&gl=US&ceid=US:en", category: "glucose", priority: "high" },

  // ---------- exercise ----------
  { name: "ACSM", url: "https://www.acsm.org/feed", category: "exercise", priority: "high" },
  { name: "Stronger by Science", url: "https://www.strongerbyscience.com/feed/", category: "exercise", priority: "high" },
  { name: "Stronger by Science Research Spotlight", url: "https://www.strongerbyscience.com/research-spotlight/feed/", category: "exercise", priority: "medium" },
  { name: "Peter Attia Exercise", url: "https://peterattiamd.com/category/exercise/feed/", category: "exercise", priority: "high" },
  { name: "Peter Attia Zone 2", url: "https://peterattiamd.com/tag/zone-2/feed/", category: "exercise", priority: "high" },
  { name: "ACSM Science Spotlight", url: "https://acsm.org/category/science-spotlight/feed/", category: "exercise", priority: "medium" },
  { name: "Google News: resistance training + labs", url: "https://news.google.com/rss/search?q=%22resistance+training%22+(ApoB+OR+lipids+OR+%22fasting+glucose%22+OR+%22insulin+sensitivity%22)&hl=en-US&gl=US&ceid=US:en", category: "exercise", priority: "high" },
  { name: "Inigo San Millan", url: "https://inigosanmillan.substack.com/feed", category: "exercise", priority: "high" },
  { name: "Barbell Medicine", url: "https://www.barbellmedicine.com/feed/", category: "exercise", priority: "high" },
  { name: "ACSM Heart Health", url: "https://acsm.org/category/heart-health/feed/", category: "exercise", priority: "medium" },
  { name: "Journal of Applied Physiology", url: "https://journals.physiology.org/action/showFeed?type=etoc&feed=rss&jc=jappl", category: "exercise", priority: "medium" },
  { name: "BJSM Blog", url: "https://blogs.bmj.com/bjsm/feed/", category: "exercise", priority: "medium" },
  { name: "ScienceDaily Fitness", url: "https://www.sciencedaily.com/rss/health_medicine/fitness.xml", category: "exercise", priority: "medium" },
  { name: "Google News: Zone 2 / VO2 / resistance", url: "https://news.google.com/rss/search?q=%22zone+2%22+exercise+OR+%22VO2+max%22+OR+%22resistance+training%22+cardiometabolic&hl=en-US&gl=US&ceid=US:en", category: "exercise", priority: "medium" },
  { name: "ACSM News Release", url: "https://acsm.org/category/news-release/feed/", category: "exercise", priority: "high" },
  { name: "ACSM Active Voice", url: "https://acsm.org/category/active-voice/feed/", category: "exercise", priority: "high" },
  { name: "European Journal of Applied Physiology", url: "https://link.springer.com/search.rss?facet-journal-id=421&sortBy=newestFirst", category: "exercise", priority: "medium" },
  { name: "Journal of Physical Activity and Health", url: "https://journals.humankinetics.com/journalnewarticlerss/journals/jpah/jpah-overview.xml", category: "exercise", priority: "medium" },
  { name: "Alan Couzens", url: "https://alancouzens.substack.com/feed", category: "exercise", priority: "high" },
  { name: "Google News: post-meal walking + glucose", url: "https://news.google.com/rss/search?q=(%22walking+after+eating%22+OR+%22postprandial+walk%22+OR+%22post-meal+walk%22)+glucose&hl=en-US&gl=US&ceid=US:en", category: "exercise", priority: "high" },
  { name: "Google News: exercise snacks", url: "https://news.google.com/rss/search?q=%22exercise+snacks%22+(glucose+OR+cardiometabolic+OR+VO2+OR+insulin)&hl=en-US&gl=US&ceid=US:en", category: "exercise", priority: "high" },
  { name: "Google News: BJSM cardiometabolic", url: "https://news.google.com/rss/search?q=site:bjsm.bmj.com+(cardiometabolic+OR+%22physical+activity%22)+(glucose+OR+insulin+OR+lipid+OR+VO2+OR+mortality)&hl=en-US&gl=US&ceid=US:en", category: "exercise", priority: "high" },

  // ---------- nutrition ----------
  { name: "Harvard Nutrition Source", url: "https://nutritionsource.hsph.harvard.edu/feed/", category: "nutrition", priority: "high" },
  { name: "NutritionFacts", url: "https://nutritionfacts.org/feed/", category: "nutrition", priority: "high" },
  { name: "Tufts Health & Nutrition Letter", url: "https://www.nutritionletter.tufts.edu/feed/", category: "nutrition", priority: "high" },
  { name: "American Society for Nutrition", url: "https://nutrition.org/feed/", category: "nutrition", priority: "medium" },
  { name: "AJCN", url: "https://rss.sciencedirect.com/publication/science/00029165", category: "nutrition", priority: "high" },
  { name: "Food Politics (Marion Nestle)", url: "https://www.foodpolitics.com/feed/", category: "nutrition", priority: "medium" },
  { name: "ConscienHealth Food & Nutrition", url: "https://conscienhealth.org/category/food-nutrition/feed/", category: "nutrition", priority: "medium" },
  { name: "ScienceDaily Nutrition", url: "https://www.sciencedaily.com/rss/health_medicine/nutrition.xml", category: "nutrition", priority: "medium" },
  { name: "Google News: Mediterranean / DASH", url: "https://news.google.com/rss/search?q=%22Mediterranean+diet%22+OR+%22DASH+diet%22+(cholesterol+OR+glucose+OR+ApoB)&hl=en-US&gl=US&ceid=US:en", category: "nutrition", priority: "medium" },
  { name: "Google News: ultra-processed food", url: "https://news.google.com/rss/search?q=%22ultra-processed%22+(cardiovascular+OR+cholesterol+OR+ApoB)&hl=en-US&gl=US&ceid=US:en", category: "nutrition", priority: "medium" },
  { name: "Advances in Nutrition", url: "https://rss.sciencedirect.com/publication/science/21618313", category: "nutrition", priority: "high" },
  { name: "Oldways Mediterranean Diet", url: "https://oldwayspt.org/blog/category/mediterranean-diet/feed", category: "nutrition", priority: "high" },
  { name: "Sigma Nutrition", url: "https://sigmanutrition.com/feed/", category: "nutrition", priority: "medium" },
  { name: "Google News: portfolio / soluble fiber", url: "https://news.google.com/rss/search?q=%22portfolio+diet%22+OR+%22soluble+fiber%22+(LDL+OR+cholesterol+OR+ApoB)&hl=en-US&gl=US&ceid=US:en", category: "nutrition", priority: "high" },
  { name: "Google News: Cochrane diet-lipid", url: "https://news.google.com/rss/search?q=Cochrane+(diet+OR+dietary+OR+%22saturated+fat%22+OR+fiber)+(LDL+OR+cholesterol+OR+ApoB)&hl=en-US&gl=US&ceid=US:en", category: "nutrition", priority: "high" },
  { name: "Google News: NHLBI DASH", url: "https://news.google.com/rss/search?q=site:nhlbi.nih.gov+(DASH+OR+%22eating+plan%22)+(cholesterol+OR+LDL+OR+diet)&hl=en-US&gl=US&ceid=US:en", category: "nutrition", priority: "high" },

  // ---------- research ----------
  { name: "Circulation (advance ToC)", url: "https://www.ahajournals.org/action/showFeed?type=axatoc&feed=rss&jc=circ", category: "research", priority: "critical" },
  { name: "Circulation: Quality and Outcomes", url: "https://www.ahajournals.org/action/showFeed?type=etoc&feed=rss&jc=circoutcomes", category: "research", priority: "medium" },
  { name: "JACC etoc", url: "https://www.jacc.org/action/showFeed?type=etoc&feed=rss&jc=jac", category: "research", priority: "critical" },
  { name: "JAMA Cardiology", url: "https://jamanetwork.com/rss/site_192/184.xml", category: "research", priority: "high" },
  { name: "JAHA etoc", url: "https://www.ahajournals.org/action/showFeed?type=etoc&feed=rss&jc=jaha", category: "research", priority: "high" },
  { name: "Hypertension etoc", url: "https://www.ahajournals.org/action/showFeed?type=etoc&feed=rss&jc=hyp", category: "research", priority: "medium" },
  { name: "Circulation Research etoc", url: "https://www.ahajournals.org/action/showFeed?type=etoc&feed=rss&jc=res", category: "research", priority: "medium" },
  { name: "Nature Reviews Cardiology", url: "https://www.nature.com/nrcardio.rss", category: "research", priority: "high" },
  { name: "AHA Scientific Statements", url: "https://newsroom.heart.org/cats/scientific_statements_guidelines.xml", category: "research", priority: "critical" },
  { name: "MedicalXpress Cardiology", url: "https://medicalxpress.com/rss-feed/cardiology-news/", category: "research", priority: "medium" },
  { name: "Phys.org Cardiology", url: "https://phys.org/rss-feed/health-news/cardiology/", category: "research", priority: "low" },
  { name: "ATVB etoc", url: "https://www.ahajournals.org/action/showFeed?type=etoc&feed=rss&jc=atvb", category: "research", priority: "high" },
  { name: "European Heart Journal", url: "https://academic.oup.com/rss/site_5375/3236.xml", category: "research", priority: "high" },
  { name: "European Journal of Preventive Cardiology", url: "https://academic.oup.com/rss/site_6311/4074.xml", category: "research", priority: "high" },
  { name: "Atherosclerosis journal", url: "https://www.atherosclerosis-journal.com/action/showFeed?type=etoc&feed=rss&jc=ath", category: "research", priority: "high" },
  { name: "American Journal of Preventive Cardiology", url: "https://rss.sciencedirect.com/publication/science/26666677", category: "research", priority: "high" },
  { name: "Current Atherosclerosis Reports", url: "https://link.springer.com/search.rss?facet-journal-id=11883&query=", category: "research", priority: "high" },
  { name: "Atherosclerosis Plus", url: "https://rss.sciencedirect.com/publication/science/26670895", category: "research", priority: "high" },

  // ---------- analysis ----------
  { name: "Peter Attia", url: "https://peterattiamd.com/feed/", category: "analysis", priority: "high" },
  { name: "Kevin C. Klatt", url: "https://kcklatt.substack.com/feed", category: "analysis", priority: "medium" },
  { name: "MedPage Today Cardiology", url: "https://www.medpagetoday.com/rss/cardiology.xml", category: "analysis", priority: "medium" },
  { name: "CardioBrief", url: "https://www.cardiobrief.org/feed/", category: "analysis", priority: "medium" },
  { name: "ACC Latest in Cardiology", url: "https://www.acc.org/Feed/LatestCardiology", category: "analysis", priority: "medium" },
  { name: "Healio Cardiology", url: "https://www.healio.com/sws/feed/news/cardiology", category: "analysis", priority: "medium" },
  { name: "The Skeptical Cardiologist", url: "https://theskepticalcardiologist.substack.com/feed", category: "analysis", priority: "medium" },

  // ---------- community ----------
  { name: "Reddit cardio (Cholesterol+Attia+SciNutrition)", url: "https://www.reddit.com/r/Cholesterol+PeterAttia+ScientificNutrition+AdvancedFitness/new.rss", category: "community", priority: "medium" },
  { name: "Reddit metabolic + exercise", url: "https://www.reddit.com/r/prediabetes+diabetes_t2+InsulinResistance+bodyweightfitness+Zone2+MediterraneanDiet/new.rss", category: "community", priority: "medium" },
  { name: "Reddit search: ApoB", url: "https://www.reddit.com/search.rss?q=ApoB+OR+%22apo+B%22&sort=new&t=week", category: "community", priority: "medium" },
  { name: "Reddit search: CAC score", url: "https://www.reddit.com/search.rss?q=%22CAC+score%22+OR+%22calcium+score%22+OR+%22coronary+calcium%22&sort=new&t=week", category: "community", priority: "medium" },
  { name: "Reddit search: fasting glucose", url: "https://www.reddit.com/search.rss?q=%22fasting+glucose%22+OR+%22insulin+resistance%22+OR+prediabetes&sort=new&t=week", category: "community", priority: "medium" },
  { name: "Reddit r/Cholesterol therapy search", url: "https://www.reddit.com/r/Cholesterol/search.rss?q=statin+OR+ezetimibe+OR+PCSK9+OR+bempedoic&restrict_sr=1&sort=new&t=week", category: "community", priority: "medium" },
  { name: "Reddit r/Cholesterol CAC search", url: "https://www.reddit.com/r/Cholesterol/search.rss?q=%22CAC+score%22+OR+%22calcium+score%22+OR+%22coronary+calcium%22&restrict_sr=1&sort=new&t=month", category: "community", priority: "medium" },
  { name: "Reddit search: add-on lipid therapy", url: "https://www.reddit.com/search.rss?q=ezetimibe+OR+%22bempedoic+acid%22+OR+inclisiran+OR+enlicitide&sort=new&t=week", category: "community", priority: "medium" },
  { name: "X.com via GNews: lipids / CAC / ApoB", url: "https://news.google.com/rss/search?q=when:2d+(ApoB+OR+%22apo+B%22+OR+%22CAC+score%22+OR+%22coronary+calcium%22+OR+lipidology)+site:x.com&hl=en-US&gl=US&ceid=US:en", category: "community", priority: "medium" },
  { name: "X.com via GNews: Dayspring / Attia / AHA", url: "https://news.google.com/rss/search?q=site:x.com+(Dayspring+OR+%22Peter+Attia%22+OR+HeartNews)+(cholesterol+OR+ApoB+OR+CAC)&hl=en-US&gl=US&ceid=US:en", category: "community", priority: "medium" },
  { name: "X.com via GNews: LDL / glucose", url: "https://news.google.com/rss/search?q=when:2d+(%22LDL+cholesterol%22+OR+PCSK9+OR+%22fasting+glucose%22+OR+prediabetes)+site:x.com&hl=en-US&gl=US&ceid=US:en", category: "community", priority: "medium" },
  { name: "X.com via GNews: Zone 2 / VO2", url: "https://news.google.com/rss/search?q=when:2d+(%22zone+2%22+OR+%22VO2+max%22)+site:x.com&hl=en-US&gl=US&ceid=US:en", category: "community", priority: "low" },
  { name: "X.com via GNews: CAC clinicians", url: "https://news.google.com/rss/search?q=site:x.com+(BudoffMd+OR+MichaelJBlaha+OR+RonBlankstein+OR+khurramn1)+(CAC+OR+CCTA+OR+plaque)&hl=en-US&gl=US&ceid=US:en", category: "community", priority: "high" },
  { name: "X.com via GNews: diet pattern x lipids", url: "https://news.google.com/rss/search?q=site:x.com+(Mediterranean+OR+%22saturated+fat%22+OR+fiber)+(LDL+OR+ApoB)&hl=en-US&gl=US&ceid=US:en", category: "community", priority: "medium" },
  { name: "X.com via GNews: glucose only", url: "https://news.google.com/rss/search?q=when:2d+(prediabetes+OR+%22fasting+glucose%22+OR+%22insulin+resistance%22+OR+HOMA-IR)+site:x.com&hl=en-US&gl=US&ceid=US:en", category: "community", priority: "medium" },

];

export interface AgeWindow {
  softDays: number;
  hardDays: number;
  minItems: number;
}

export const AGE_WINDOWS: Record<CategoryId, AgeWindow> = {
  cholesterol: { softDays: 3, hardDays: 5, minItems: 4 },
  cac: { softDays: 3, hardDays: 5, minItems: 3 },
  apob: { softDays: 3, hardDays: 5, minItems: 3 },
  glucose: { softDays: 3, hardDays: 5, minItems: 4 },
  exercise: { softDays: 5, hardDays: 8, minItems: 3 },
  nutrition: { softDays: 5, hardDays: 8, minItems: 3 },
  research: { softDays: 10, hardDays: 16, minItems: 4 },
  analysis: { softDays: 5, hardDays: 8, minItems: 3 },
  community: { softDays: 2, hardDays: 4, minItems: 3 },
};

export const KEYWORDS: { match: string[]; routeTo: CategoryId }[] = [
  { match: ["ldl", "statin", "ezetimibe", "pcsk9", "bempedoic", "inclisiran", "enlicitide", "non-hdl", "cholesterol"], routeTo: "cholesterol" },
  { match: ["cac score", "calcium score", "coronary calcium", "coronary artery calcium", "ccta", "plaque regression", "mesa"], routeTo: "cac" },
  { match: ["apob", "apo b", "apolipoprotein", "ldl-p", "particle number", "lp(a)", "residual risk"], routeTo: "apob" },
  { match: ["fasting glucose", "prediabetes", "insulin resistance", "homa-ir", "hba1c", "impaired fasting"], routeTo: "glucose" },
  { match: ["zone 2", "vo2", "resistance training", "exercise snacks", "post-meal walk", "postprandial walk"], routeTo: "exercise" },
  { match: ["mediterranean", "dash", "portfolio diet", "soluble fiber", "ultra-processed", "saturated fat"], routeTo: "nutrition" },
];

export interface CategoryMeta {
  id: CategoryId;
  label: string;
  short: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: "cholesterol", label: "CHOLESTEROL & LDL", short: "LDL" },
  { id: "cac", label: "CAC & PLAQUE", short: "CAC" },
  { id: "apob", label: "APOB & PARTICLES", short: "APOB" },
  { id: "glucose", label: "FASTING GLUCOSE", short: "GLUCOSE" },
  { id: "exercise", label: "EXERCISE", short: "EXERCISE" },
  { id: "nutrition", label: "NUTRITION", short: "NUTRITION" },
  { id: "research", label: "JOURNALS & RESEARCH", short: "RESEARCH" },
  { id: "analysis", label: "ANALYSIS", short: "ANALYSIS" },
  { id: "community", label: "REDDIT & X", short: "COMMUNITY" },
];

export const PRIORITY_WEIGHT: Record<Priority, number> = {
  critical: 100,
  high: 50,
  medium: 10,
  low: 1,
};
