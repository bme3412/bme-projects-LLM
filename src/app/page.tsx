import type { ReactNode } from "react";
import { ProjectsSection } from "./components/ProjectsSection";

type ContactLink = {
  label: string;
  shortLabel: string;
  href: string;
  icon: ReactNode;
};

const contacts: ContactLink[] = [
  {
    label: "Email Brendan",
    shortLabel: "Email",
    href: "mailto:erhardbr@gmail.com",
    icon: <MailIcon />,
  },
  {
    label: "GitHub",
    shortLabel: "GitHub",
    href: "https://github.com/bme3412",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    shortLabel: "LinkedIn",
    href: "https://www.linkedin.com/in/brendan-erhard/",
    icon: <LinkedInIcon />,
  },
];


const certs = [
  { name: "Certified Professional: Agentic AI", issuer: "NVIDIA", date: "Jan 2026" },
  { name: "Certified Professional: Gen AI LLMs", issuer: "NVIDIA", date: "Dec 2025" },
  { name: "Certified Associate: Generative AI LLMs", issuer: "NVIDIA", date: "Mar 2025" },
  { name: "Certified AI Practitioner", issuer: "AWS", date: "Sep 2025" },
  { name: "Certified Cloud Practitioner", issuer: "AWS", date: "Jun 2025" },
  { name: "Knowledge: Cloud Essentials", issuer: "AWS", date: "Jun 2025" },
  { name: "AI Agents Fundamentals", issuer: "Hugging Face", date: "Oct 2025" },
  { name: "Fundamentals of MCP", issuer: "Hugging Face", date: "Jun 2025" },
];

export default function Home() {
  return (
    <div className="viewport-shell">
      <main className="control-panel" role="main">
        <section
          className="bio-panel"
          data-animate
          style={{ animationDelay: "0.1s" }}
        >
          <div className="bio-top">
            <div className="bio-header">
              <p className="bio-greeting">Hi, I&apos;m Brendan.</p>
              <h1 className="hero-title">
                Trained on finance, fine-tuned for AI.
              </h1>
            </div>

            <div className="bio-copy">
              <p>Senior Analyst covering $5B in global tech investments — building AI tools with LLMs, Python, and Next.js on the side.</p>
              <p>Looking for my next role in AI engineering.</p>
              <p className="bio-tagline">Welcome to my AI/LLM project portfolio.</p>
            </div>
          </div>

          <div className="bio-cta-area">
            <a
              className="resume-cta"
              href="/Brendan-Erhard-Resume-3.2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ResumeIcon />
              View Resume
            </a>

            <div
              className="contact-strip"
              role="group"
              aria-label="Contact Brendan"
            >
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  className="contact-chip"
                  href={contact.href}
                  aria-label={contact.label}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="contact-chip-icon">{contact.icon}</span>
                  <span className="contact-chip-label">{contact.shortLabel}</span>
                </a>
              ))}
            </div>

            <div className="cert-section">
              <p className="cert-section-label">Certifications</p>
              <ul className="cert-list">
                {certs.map((cert) => (
                  <li key={cert.name} className="cert-row">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-date">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ProjectsSection />
      </main>
    </div>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
      <path
        d="M5 2.5h7l3 3V17a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 17V2.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M12 2.5V5.5H15"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9h5M7.5 11.5h5M7.5 14h3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
      <path
        d="M3.5 5.75h13a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="m4 6 6.5 4 6.5-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
      <path
        d="M8.5 16.5c-4 1.2-4-2.5-5.5-3m11 6v-2.8c0-.8-.1-1.2.5-1.8 2.6-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-.98-.3-3.2 1.2a11 11 0 0 0-5.6 0C7 1.2 6 1.5 6 1.5a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.3c0 4.6 2.9 5.6 5.5 6 .6.6.5 1 .5 1.8V20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
      <path
        d="M5.5 8.2V16m9-4.4V16m0-4.4c0-1.6-.9-2.4-2.2-2.4-1 0-2 .8-2.3 1.6m0 0V8.2m0 2.6V16M5.5 5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
