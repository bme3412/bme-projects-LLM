# Brendan — Portfolio

**Live:** [bme-projects-nov2025.vercel.app](https://bme-projects-nov2025.vercel.app)

Personal portfolio for Brendan — Senior Analyst, Global Technology Equity Strategy, and AI builder. Targeting AI Engineering and investing roles.

---

## About

A single-page portfolio built to communicate two things quickly:

1. **Who I am** — finance background, AI engineering skillset, what I'm looking for
2. **What I've built** — 11 projects spanning RAG systems, AI agents, financial analysis tools, and more

---

## Stack

- **Framework:** Next.js 15 (App Router, Server + Client Components)
- **Styling:** Tailwind CSS + custom CSS (no component library)
- **Fonts:** DM Serif Display, DM Sans, JetBrains Mono via `next/font/google`
- **Images:** `next/image` with AVIF/WebP optimization, lazy loading, prefetch on hover
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

---


## Projects Featured

| Project | Description |
|---|---|
| Equity Research Agent | AI agent for institutional equity research with 6-phase reality-check pipeline |
| Clarity 3.1 | Hybrid RAG system (dense + BM25) over 240+ earnings transcripts |
| AI DCF Model | Real-time DCF valuation engine with LLM-powered investment analysis |
| Big Tech Co-Pilot | RAG pipeline over 240 earnings calls across Mega Cap Tech |
| Traverse | AI visa auditor — 37,830 corridors, 40+ languages (Anthropic Hackathon) |
| Tariff Tracker | Structured analysis of 150 Q1 2025 earnings calls for tariff exposure |
| Software Deep Dive | Semantic Q&A over 100+ Q2 2025 software earnings calls |
| GenAI/LLM Crash Course | 10-module self-paced curriculum with AI-generated quizzes |
| LLM Resume | Chat with my resume via RAG |
| Passport & Ponder | 1,250 travel photos from 54 countries on a Mapbox map |
| EuroTrip Planner | City-by-city Europe trip planner with seasonal awareness |

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Bio panel (server component)
│   ├── layout.tsx            # Fonts, metadata, Analytics
│   ├── globals.css           # All styles
│   ├── icons.tsx             # SVG icon components
│   └── components/
│       ├── ProjectsSection.tsx  # Projects carousel (client)
│       └── ProjectModal.tsx     # Case study modal (client)
└── data/
    └── projects.ts           # All project data
```
