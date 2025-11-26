export type Project = {
  title: string;
  href: string;
  githubUrl?: string;
  iconKey?: string;
  details: {
    summary: string;
    builtWith: string;
    modalDetail: string;
    screenshots?: string[];
  };
};

export const projects: Project[] = [
  {
    title: "Big Tech Co-Pilot",
    href: "https://bme-investment-copilot-vectorDB.vercel.app",
    githubUrl: "https://github.com/bme3412/next-copilot/tree/main",
    iconKey: "bot",
    details: {
      summary:
        "Write powerful queries about Mega Cap Tech companies using Retrieval Augmented Generation (RAG) and Claude API. Analyzed and structured 240 earnings calls, generated embeddings and stored in Pinecone vector database.",
      builtWith: "Next.js, Voyage AI, Pinecone, AWS S3",
      modalDetail:
        "Users can write queries about specific companies, specific time periods, several companies and time periods, or secular trends and Retrieval Augmented Generation (RAG) is used to answer the queries. Includes 240 earnings calls and quarterly earnings reports, 1.4m tokens of text, and 1.6m tokens of generated embeddings, stored in Pinecone vector database. Includes AAPL, AMD, AMZN, AVGO, CRM, GOOGL, META, MSFT, NVDA, ORCL. Built with Next.js 15, React 19, Tailwind CSS, Recharts, Anthropic Claude, Voyage AI, Pinecone, and AWS S3 utilities ",
        screenshots: ["/investment-copilot-preview.png"],
      },
  },
  {
    title: "Tariff Tracker",
    href: "https://bme-q1-tariff-tracker.vercel.app",
    githubUrl: "https://github.com/bme3412/bme-q1-tariff-tracker",
    iconKey: "ship",
    details: {
      summary:
        "Helps investors spot tariff risks with structured output report generation of 150 earnings calls focusing on tariff impacts, supply chain shifts, and guidance changes during Q1 2025 earnings season",
      builtWith: "Cursor, Claude-Sonnet 4, Next.js, Tailwind CSS",
      modalDetail:
        "Systematic real-time analysis of 150 earnings calls focusing on tariff impacts, supply chain shifts, and guidance changes during Q1 2025 earnings season. Each call analyzed, summarized and structured using Claude API. Organized by sector and geographies. Includes hybird keyword search. Built using Cursor, Claude-Sonnet 4, Next.js/React, Tailwind CSS, and Vercel.",
        screenshots: ["/tariff-tracker-preview.png"],
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
      builtWith: "Typescript, Tailwind CSS,Claude-Sonnet 4.5",
      modalDetail:
        "Interactive DCF Valuation Platform: Real-time equity valuation tool that lets investors stress-test growth assumptions across business segments, instantly recalculating fair value and enterprise value with AI-generated investment summaries. Built to bridge the gap between fundamental analysis and dynamic scenario modeling. Created with Typescript, React/Tailwind CSS, and Claude-Sonnet 4.5. Deployed on Vercel.",
      screenshots: ["/dcf-preview.png"],
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
      builtWith: "Typescript, Pinecone vectorDB, Anthropic API",
      modalDetail:
        "An AI-powered earnings analysis platform for Q2 2025 software company earnings calls. Built with Next.js, TypeScript, and integrated with Pinecone for semantic search and Anthropic API for intelligent analysis. Users can ask natural language questions about 100+ software company earnings, with AI-powered responses using Anthropic with earnings call context. Built with Typescript, Pinecone vectorDB, Anthropic API, hosted on Vercel.",
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
        "Self-paced curriculum covering LLM fundamentals to production deployment. 10 modules with Claude-generated quizzes.",
      builtWith: "Next.js/React, Claude-Sonnet 4.5, Vercel",
      modalDetail:
        "Self-directed Gen AI crash course with integrated study tracking, Claude-powered quiz generation, and weighted curriculum covering everything from LLM architecture to deployment—turning scattered resources into systematic mastery. Built with Next.js/React, Claude-Sonnet 4.5, and Vercel.",
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
        "Ask anything about me. Don't just read my resume - chat with it! Learn about my background, my career goals, and what makes me tick, with an interactive resume answers powered by Claude Anthopic",
      builtWith: "Typescript, Pinecone vectorDB, Claude-Sonnet 4.5",
      modalDetail:
        "Full-stack interactive resume with AI-powered chat interface. I converted my resume and professional background into embeddings and stored in Pinecone vectorDB. Built with Typescript, Pinecone vectorDB, Claude-Sonnet 4.5, and Vercel.",
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
      builtWith: "Next.js, AWS S3 & Cloudfront, Mapbox",
      modalDetail:
        "A place to store all of my travel photos. Each photo is optimized for web display and also plotted on a map using Mapbox. Some day I will get round to starting a travel newsletter. Built with Next.js, AWS S3 & Cloudfront, Cursor, and Mapbox.",
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
        "Intensive city-by-city trip planner for Europe. Enter trip dates and find the best cities to visit and optimal activities for each day. Includes detailed city guides with over 220 cities. Remains a work in progress.",
      builtWith: "Next.js/React, Tailwind CSS, Mapbox, Claude-Sonnet 4.5",
      modalDetail:
        "EuroTrip Planner is a Next.js application for designing thoughtful, season‑aware trips across Europe.Instead of generic “10 days in Europe” templates, it combines structured city data, seasonal calendars, and an AI planner to help you choose where to go and when.",
        screenshots: ["eurotrip-planner-preview.png"],
      },
  },
];

