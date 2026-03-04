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
      screenshots: ["/30-days-agentic-ai.jpg"],
    },
  },
  {
    title: "Cursor IR Agent",
    href: "https://cursor-ir-agent.vercel.app",
    githubUrl: "https://github.com/bme3412/cursor-ir-agent",
    iconKey: "layers",
    details: {
      summary:
        "AI agent for institutional equity research — automates the extraction, analysis, and synthesis of earnings transcripts, IR presentations, and SEC filings into institutional-quality initiation reports with a 6-phase deterministic reality-check pipeline.",
      builtWith: "Python, FastAPI, React, TypeScript, Gemini 2.5, Claude Opus 4.6, SEC XBRL API",
      problem:
        "Institutional equity research requires reading hundreds of pages of earnings transcripts, SEC filings, and investor presentations every quarter — all manually. Even then, LLM-generated financial analysis fails in predictable ways: unverifiable claims presented as fact, promotional tone, and internal inconsistencies.",
      modalDetail:
        "Built a multi-stage coverage pipeline: Discovery → Parsing (Schema 1/2) → Quarterly Assessment (Schema 3) → Rolling Thesis (Schema 4, activates at Q5) → Initiation Report. The initiation generator includes a 6-phase Reality Check system: deterministic sanity checks (YoY math, margin reconciliation, kill-switches), LLM claim cross-examination, and a post-processor that enforces rating downgrades and bans promotional language. Every number in the output carries a truth tag: [Reported], [MgmtStated], [Derived], or [Assumption]. Currently tracks AAPL, AMZN, BKNG, CRM, GOOGL, MDB, MSFT, NFLX, NVDA, TSLA.",
      impact:
        "Generates 3,500–4,500 word institutional-quality initiation reports with auditable, truth-tagged metrics. Kill-switch enforcement deterministically rewrites ratings when quality thresholds are violated — the system doesn't rely on the model obeying soft instructions.",
      screenshots: [],
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
      screenshots: [],
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
      screenshots: ["/dcf-preview.png"],
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
      screenshots: ["/investment-copilot-preview.png"],
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
      screenshots: [],
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
      screenshots: ["/tariff-tracker-preview.png"],
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
      screenshots: ["/software-deepdive.png"],
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
      screenshots: ["/crashcourse-preview.png"],
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
      screenshots: ["/llm-resume-preview.png"],
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
      screenshots: ["/passport-ponder-preview.png"],
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
      screenshots: ["/eurotrip-planner-preview.png"],
    },
  },
];
