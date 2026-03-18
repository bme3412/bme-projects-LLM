export type Project = {
  title: string;
  href: string;
  githubUrl?: string;
  iconKey?: string;
  details: {
    summary: string;
    builtWith: string;
    problem: string;
    modalDetail: string;
    impact: string;
    screenshots?: string[];
  };
};

export const projects: Project[] = [
  {
    title: "30 Days of Agentic AI",
    href: "https://gen-ai-30-days.vercel.app/",
    githubUrl: "https://github.com/bme3412/30-days-agentic-ai",
    iconKey: "brain",
    details: {
      summary:
        "A 30-day learning challenge covering AI agent engineering from design patterns to production deployment. Building a verifiable portfolio of agentic AI skills, one day at a time.",
      builtWith: "Next.js, TypeScript, Tailwind CSS, Vercel",
      problem:
        "Learning AI agent engineering is fragmented across tutorials, papers, and documentation. There's no structured curriculum that builds progressively from fundamentals to production-ready agent systems.",
      modalDetail:
        "Designed a 30-day structured curriculum that progresses through core agentic AI concepts: design patterns, tool use, memory systems, multi-agent coordination, and production deployment. Each day includes hands-on implementation with progress tracking. The roadmap, daily log, and stats features provide accountability and visibility into learning progress.",
      impact:
        "Transforms scattered AI agent resources into a systematic 30-day learning path with daily accountability checkpoints and a portfolio of implemented patterns.",
      screenshots: ["/screenshots/30-days-agentic-ai.jpg"],
    },
  },
  {
    title: "March Madness ML Bracket",
    href: "https://bme-march-madness-2026.vercel.app/",
    githubUrl: "https://github.com/bme3412/march-madness-2026",
    iconKey: "chart",
    details: {
      summary:
        "ML-powered NCAA tournament bracket predictor using a 3-model ensemble (Logistic Regression, XGBoost, LightGBM) with Monte Carlo simulation. Trained on 73 datasets including 5.8M rows of historical data, KenPom ratings, and FiveThirtyEight projections.",
      builtWith: "Next.js, Python, scikit-learn, XGBoost, LightGBM, pandas, NumPy, Kaggle API",
      problem:
        "March Madness brackets are notoriously unpredictable — most people rely on gut feelings, team loyalty, or surface-level stats. There's no accessible tool that combines rigorous ML modeling with an interactive bracket experience.",
      modalDetail:
        "Built a 3-model ensemble using inverse-Brier weighting: Logistic Regression (69.4% accuracy, 36.2% weight), XGBoost (67.2%, 32.1% weight), and LightGBM (66.8%, 31.7% weight). Engineered 91 features including offensive/defensive efficiency per 100 possessions, margin-of-victory adjusted Elo ratings with 33% season regression, and recent performance metrics. Validated using Leave-One-March-Out cross-validation across 17 tournament years (2008-2025, excluding 2020). Monte Carlo simulation runs 10,000 tournaments to generate championship and Final Four probabilities. Data pipeline integrates 73 datasets: 35 Kaggle CSVs plus 38 external sources (KenPom, Barttorvik, FiveThirtyEight, Heat Check, AP polls).",
      impact:
        "Generates pairwise matchup probabilities, championship odds, and Final Four advancement rates backed by 5.8M rows of historical data. The ensemble achieves a Brier score of 0.198 on the best-performing model — competitive with top Kaggle submissions.",
      screenshots: ["/screenshots/march-madness-preview.png"],
    },
  },
  {
    title: "Equity Research Agent",
    href: "https://bme-equity-research-agent.vercel.app",
    githubUrl: "https://github.com/bme3412/equity-research-agent",
    details: {
      summary:
        "Multi-agent system that processes earnings transcripts, IR decks, and SEC filings into institutional-quality initiation reports. Features a 6-phase reality-check pipeline with truth-tagged metrics, kill-switch thresholds, and deterministic claim verification.",
      builtWith:
        "Python 3.12, FastAPI, React 19, TypeScript, Gemini 2.5 Flash/Pro, Claude Sonnet 4.6 (streaming + extended thinking), SEC XBRL API, Financial Modeling Prep API, openpyxl, PyMuPDF, Zustand, TanStack Query",
      problem:
        "Institutional equity research requires manually processing hundreds of pages of earnings transcripts, SEC filings, and investor presentations every quarter. LLM-generated financial analysis compounds this with its own failure modes: unverifiable claims presented as fact, promotional tone, internal inconsistencies, and no audit trail — making raw LLM output unsuitable for institutional use.",
      modalDetail:
        "Built a five-stage additive coverage pipeline — Discovery → Parsing → Quarterly Assessment → Rolling Thesis (activates at Q5) → Initiation Report — where each quarter's data compounds into a richer thesis. Transcripts are auto-fetched from the FMP API and run through four parallel extraction functions (guidance, numbers, sentiment, risks), each using a focused prompt optimized for that data type rather than a single mega-prompt.\n\nThe initiation report generator runs a 6-phase Reality Check System before, during, and after LLM generation. Phase 0 classifies the business model archetype (e.g. ota_marketplace, b2b_saas, ads_platform) and loads the corresponding Reality Check Spec — defining north-star KPIs, kill-switch thresholds, and margin expectations for that archetype. Subsequent phases run deterministic sanity checks (YoY math verification, margin reconciliation within 2pp), LLM claim cross-examination that generates alternative explanations for every positive management claim, and a structural audit for omitted metrics and peer data gaps. A post-processor enforces rating downgrades (Buy → Hold) and conviction changes when kill-switches fire — it rewrites the report header deterministically rather than relying on the model obeying a soft instruction. Every number in the output carries a truth tag: [Reported], [MgmtStated], [Derived], or [Assumption]. Coverage universe: AAPL, AMZN, BKNG, CRM, GOOGL, MDB, MSFT, NFLX, NVDA, ON, TSLA.",
      impact:
        "Generates 3,500–4,500 word initiation reports with full audit trails, truth-tagged metrics, and Bull/Base/Bear scenario modeling with explicit EPS math. The SSE streaming architecture delivers real-time text deltas for Anthropic and a full-report event for Gemini — with a ThreadPoolExecutor preventing async loop blocking. Deployed on Render (backend) and Vercel (frontend) with Excel model export via XBRL CompanyFacts data.",
      screenshots: ["/screenshots/equity-research-agent.png"],
    },
  },
  {
    title: "Clarity 3.1",
    href: "https://bme-clarity-3.vercel.app",
    githubUrl: "https://github.com/bme3412/clarity-3.1",
    iconKey: "database",
    details: {
      summary:
        "Production-grade hybrid RAG system for financial analysis. Ask natural language questions across 240+ tech company earnings transcripts — get cited, grounded answers with structured financial data. Achieved 60% reduction in research preparation time.",
      builtWith: "Next.js, JavaScript, Voyage AI, Pinecone, Claude (Anthropic), hybrid RAG (dense + BM25)",
      problem:
        "Dense vector search alone misses the exact financial terms that matter most: product names like 'MI300' or 'Blackwell', specific metrics like 'gross margin expansion', or ticker symbols. Standard RAG systems trade semantic understanding for keyword precision — or vice versa.",
      modalDetail:
        "Built a hybrid search pipeline combining Voyage voyage-3.5 dense embeddings (1024-dim) with BM25 sparse vectors over 11,929 indexed chunks from 571 transcript files. Claude uses tool-use to dynamically select between structured financial queries (get_financial_metrics), semantic transcript search, and growth rate calculations depending on query type. Responses stream token-by-token via SSE with citations and source scores.",
      impact:
        "60% reduction in research preparation time. Hybrid search achieves faithfulness 0.85 / relevance 0.88 — a ~7pp lift over dense-only baseline. Time to first token ~1.5s. Covers AAPL, AMD, AMZN, AVGO, CRM, GOOGL, META, MSFT, NVDA, ORCL across FY2020–FY2025.",
      screenshots: ["/screenshots/clarity-llm.png"],
    },
  },
  {
    title: "AI Discounted Cash Flow Model",
    href: "https://llm-dcf.vercel.app/",
    githubUrl: "https://github.com/bme3412/LLM-DCF",
    iconKey: "chart",
    details: {
      summary:
        "Interactive DCF valuation model with adjustable segment growth drivers and AI-powered investment analysis. Instantly stress-test growth assumptions and see fair value updates.",
      builtWith: "TypeScript, Tailwind CSS, LLM",
      problem:
        "Traditional DCF models live in static spreadsheets. Changing an assumption requires manual recalculation, and there's no integrated layer to explain *why* a growth rate is reasonable or what the market is pricing in.",
      modalDetail:
        "Built a real-time DCF engine in TypeScript that recalculates enterprise value and fair value as users adjust segment-level growth drivers via sliders. An LLM integration generates a contextual investment summary explaining the valuation, key sensitivities, and how the implied assumptions compare to consensus — bridging fundamental analysis with scenario modeling.",
      impact:
        "Scenario analysis that takes hours in Excel happens in seconds. The AI summary layer means even non-quant users can interpret what the model is saying about a stock's risk/reward.",
      screenshots: ["/screenshots/dcf-preview.png"],
    },
  },
  {
    title: "Big Tech Co-Pilot",
    href: "https://bme-investment-copilot-vectorDB.vercel.app",
    githubUrl: "https://github.com/bme3412/next-copilot/tree/main",
    iconKey: "bot",
    details: {
      summary:
        "Write powerful queries about Mega Cap Tech companies using Retrieval Augmented Generation (RAG) and LLM API. Analyzed and structured 240 earnings calls, generated embeddings and stored in Pinecone vector database.",
      builtWith: "Next.js, Voyage AI, Pinecone, AWS S3",
      problem:
        "Earnings call transcripts are dense, time-consuming documents. Analysts need answers to specific questions — about a company, a time period, or a macro trend — but manually reading 240 calls across 10 companies is impossible.",
      modalDetail:
        "Built a full-stack RAG pipeline: ingested 240 earnings calls and quarterly reports (1.4M tokens of text), generated 1.6M tokens of embeddings via Voyage AI, and stored them in Pinecone. A Next.js frontend lets users ask natural language questions; the system retrieves the most relevant transcript chunks and feeds them to an LLM to synthesize a grounded answer. Covers AAPL, AMD, AMZN, AVGO, CRM, GOOGL, META, MSFT, NVDA, ORCL.",
      impact:
        "Turns a multi-hour manual research task into a sub-30-second query. Users can cross-reference multiple companies and time periods in a single question — something impossible with traditional search.",
      screenshots: ["/screenshots/investment-copilot-preview.png"],
    },
  },
  {
    title: "Traverse",
    href: "https://bme-traverse.vercel.app",
    githubUrl: "https://github.com/bme3412/traverse",
    iconKey: "shield",
    details: {
      summary:
        "AI-powered visa application auditor covering 37,830 travel corridors in 40+ languages. Three Claude Opus 4.6 agents review documents like an experienced immigration team — catching the errors that cause preventable rejections. Built for the Anthropic Claude Code Hackathon (selected from 500 of 13,000 applicants).",
      builtWith: "Next.js, TypeScript, Claude Opus 4.6, Anthropic, Vercel",
      problem:
        "1 in 4 visa applications gets refused — and most rejections are preventable. Incomplete forms, missing documents, and cross-lingual contradictions that the applicant never noticed. There's no tool that reviews your application the way an experienced immigration professional would.",
      modalDetail:
        "Built three coordinated AI agents on Claude Opus 4.6: a Research Agent that searches live government sources for corridor-specific requirements, a Document Intelligence Agent that reads uploaded documents in any language using vision and cross-references them for contradictions, and an Advisory Agent that synthesizes findings into prioritized, actionable fixes. Results stream in real time via SSE. Covers all 37,830 global travel corridors and reads documents in 40+ languages. Built for the Anthropic Claude Code Hackathon.",
      impact:
        "Selected for the Anthropic Claude Code Opus 4.6 Hackathon — 500 participants from 13,000 applicants. Demo catches real cross-lingual contradictions: a Hindi employment certificate stating ₹85K/month while the English cover letter shows a different salary and employment type — exactly the kind of contradiction that triggers visa denials.",
      screenshots: ["/screenshots/traverse.png"],
    },
  },
  {
    title: "Tariff Tracker",
    href: "https://bme-q1-tariff-tracker.vercel.app",
    githubUrl: "https://github.com/bme3412/bme-q1-tariff-tracker",
    iconKey: "ship",
    details: {
      summary:
        "Helps investors spot tariff risks with structured output report generation of 150 earnings calls focusing on tariff impacts, supply chain shifts, and guidance changes during Q1 2025 earnings season.",
      builtWith: "Cursor, LLM, Next.js, Tailwind CSS",
      problem:
        "During Q1 2025, tariffs became the dominant risk for global supply chains. Investors needed to rapidly assess which companies had exposure — but this required reading 150+ earnings transcripts across dozens of sectors.",
      modalDetail:
        "Systematically processed 150 earnings calls through an LLM pipeline that extracted tariff mentions, supply chain commentary, and guidance changes into structured JSON. Built a Next.js interface organized by sector and geography, with hybrid keyword + semantic search so analysts can filter to exactly the companies and geographies relevant to their thesis.",
      impact:
        "Condenses a week of earnings-season reading into an on-demand dashboard. Sector and geographic organization lets a portfolio manager screen for tariff risk in minutes rather than days.",
      screenshots: ["/screenshots/tariff-tracker-preview.png"],
    },
  },
  {
    title: "Software Deep Dive",
    href: "https://q2-software.vercel.app",
    githubUrl: "https://github.com/bme3412/q2-software",
    iconKey: "code",
    details: {
      summary:
        "Software stocks were crushed in Q2 2025. This interactive deep dive enables analysts to ask detailed questions to surface key insights on macro-trends like AI adoption or subscription growth.",
      builtWith: "TypeScript, Pinecone vectorDB, LLM API",
      problem:
        "Q2 2025 was a pivotal quarter for software stocks — AI adoption narratives collided with slowing consumption growth. Analysts needed a way to quickly surface how 100+ companies were discussing these themes without reading every transcript.",
      modalDetail:
        "Ingested and embedded 100+ software earnings calls into Pinecone. Built a Next.js interface that accepts natural language questions and returns LLM-synthesized answers grounded in the actual transcript text — with citations so users can verify context. Semantic search surfaces the most relevant company commentary regardless of exact wording.",
      impact:
        "Enables theme-based research across an entire sector in one query. Ask 'which companies mentioned slowing seat expansion?' and get a synthesized answer across 100 calls in seconds.",
      screenshots: ["/screenshots/software-deepdive.png"],
    },
  },
  {
    title: "Generative AI/LLM Crash Course",
    href: "https://bme-llm-crashcourse.vercel.app/",
    githubUrl: "https://github.com/bme3412/bme-LLM-crashcourse",
    iconKey: "brain",
    details: {
      summary:
        "Self-paced curriculum covering LLM fundamentals to production deployment. 10 modules with AI-generated quizzes.",
      builtWith: "Next.js/React, LLM, Vercel",
      problem:
        "Most GenAI learning resources are scattered — blog posts, YouTube videos, academic papers — with no structured progression from beginner to production-ready practitioner.",
      modalDetail:
        "Designed a 10-module curriculum progressing from LLM architecture fundamentals through prompt engineering, RAG, fine-tuning, agents, and production deployment. Each module includes readings, code examples, and AI-generated quizzes that adapt to the learner's responses. Integrated study tracking shows completion progress across the full curriculum.",
      impact:
        "Turns scattered AI resources into a systematic path to mastery. The quiz generation system means assessment is always fresh — no memorizing fixed answer sets.",
      screenshots: ["/screenshots/crashcourse-preview.png"],
    },
  },
  {
    title: "LLM Resume",
    href: "https://bme-llm-resume.vercel.app",
    githubUrl: "https://github.com/bme3412/RAG-resume/tree/main",
    iconKey: "file-text",
    details: {
      summary:
        "Ask anything about me. Don't just read my resume — chat with it. Learn about my background, career goals, and what makes me tick.",
      builtWith: "TypeScript, Pinecone vectorDB, LLM",
      problem:
        "A PDF resume is a passive document. It answers the questions the candidate anticipated — not the questions a recruiter or hiring manager actually has.",
      modalDetail:
        "Converted my full professional background, resume, and career narrative into embeddings stored in Pinecone. Built a chat interface that uses RAG to answer any question about my background with grounded, specific responses — rather than generic LLM hallucinations. The system retrieves the most relevant sections of my experience before generating an answer.",
      impact:
        "A recruiter can ask 'How does your finance background apply to AI engineering?' and get a specific, sourced answer in seconds — rather than skimming a PDF hoping to find the connection.",
      screenshots: ["/screenshots/llm-resume-preview.png"],
    },
  },
  {
    title: "Passport & Ponder",
    href: "https://bme-travel-photos.vercel.app/",
    githubUrl: "https://github.com/bme3412/travel-photos/tree/main",
    iconKey: "globe",
    details: {
      summary:
        "Global travel photo repository, organized by location and trip. All photos are stored in AWS S3 and displayed on a Mapbox map. Includes 1,250 photos from 54 countries and 6 continents.",
      builtWith: "Next.js, AWS S3 & CloudFront, Mapbox",
      problem:
        "Travel photos live fragmented across phones, hard drives, and cloud services — organized chronologically but not geographically. There's no way to visualize where you've been or browse photos by place.",
      modalDetail:
        "Built a photo archive that stores 1,250 images on AWS S3 with CloudFront CDN delivery. Each photo is geo-tagged and plotted on an interactive Mapbox map, so the collection becomes a visual journey. Photos are organized by country and trip — browsable both as a gallery and spatially on the map.",
      impact:
        "54 countries across 6 continents, all browseable on a single map. Demonstrates full-stack AWS + geospatial integration: S3 storage, CloudFront caching, and Mapbox rendering.",
      screenshots: ["/screenshots/passport-ponder-preview.png"],
    },
  },
  {
    title: "EuroTrip Planner",
    href: "https://eurotrip-planner.vercel.app",
    githubUrl: "https://github.com/bme3412/eurotrip-planner/tree/main",
    iconKey: "map",
    details: {
      summary:
        "Intensive city-by-city trip planner for Europe. Enter trip dates and find the best cities to visit and optimal activities for each day. Includes detailed city guides with over 220 cities.",
      builtWith: "Next.js/React, Tailwind CSS, Mapbox, LLM",
      problem:
        "'10 days in Europe' travel content is generic and ignores seasons, travel times between cities, and individual interests. Planning a real trip requires synthesizing information from dozens of sources.",
      modalDetail:
        "Built a trip planner that combines structured data for 220+ European cities (seasonal highlights, travel times, crowd levels) with an AI planning layer. Users input their dates and the system suggests an optimized city itinerary accounting for geography, season, and day-by-day pacing. Each city has a detailed guide with curated activities. Mapbox renders the route visually.",
      impact:
        "Transforms the chaotic 'open 30 tabs' trip planning process into a single structured tool. The seasonal awareness means recommendations are actually appropriate for when you're traveling — not just generic top-10 lists.",
      screenshots: ["/screenshots/eurotrip-planner-preview.png"],
    },
  },
];
