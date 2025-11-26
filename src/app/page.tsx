"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import {
  BrainIcon,
  ChartIcon,
  BotIcon,
  GlobeIcon,
  SearchIcon,
  ShipIcon,
  CodeIcon,
  MapIcon,
  FileTextIcon,
} from "./icons";

type ContactLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

const contacts: ContactLink[] = [
  {
    label: "Email Brendan",
    href: "mailto:erhardbr@gmail.com",
    icon: <MailIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/bme3412",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brendan-erhard/",
    icon: <LinkedInIcon />,
  },
];

const iconMap: Record<string, ReactNode> = {
  brain: <BrainIcon />,
  chart: <ChartIcon />,
  bot: <BotIcon />,
  globe: <GlobeIcon />,
  search: <SearchIcon />,
  ship: <ShipIcon />,
  code: <CodeIcon />,
  map: <MapIcon />,
  "file-text": <FileTextIcon />,
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const element = trackRef.current;
    if (!element) return;

    const evaluateScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      setShowScrollHint(scrollLeft + clientWidth < scrollWidth - 12);
    };

    evaluateScroll();
    element.addEventListener("scroll", evaluateScroll);
    window.addEventListener("resize", evaluateScroll);

    return () => {
      element.removeEventListener("scroll", evaluateScroll);
      window.removeEventListener("resize", evaluateScroll);
    };
  }, []);

  const handleScrollHint = () => {
    const element = trackRef.current;
    if (!element) return;
    element.scrollBy({
      left: element.clientWidth * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div className="viewport-shell">
      <main className="control-panel" role="main">
        <section
          className="bio-panel"
          data-animate
          style={{ animationDelay: "0.1s" }}
        >
          <div className="hero-copy">
            <h1 className="hero-title">
              👋 Hi, I&apos;m Brendan. Trained on finance, fine-tuned for AI. Ready to build
            </h1>
            <div className="bio-copy">
              <p>Senior Analyst, Global Technology Equity Strategy</p>
              <br />
              <p>By day: Analyzing $5B in tech investments</p>
              <p>By night: Building AI tools with Claude & Next.js</p>
              <br />
              <p>Looking for my next adventure in AI engineering</p>
            </div>
          </div>

        <div className="contact-icons bio-contact" role="group" aria-label="Contact Brendan">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              className="contact-icon"
              href={contact.href}
              aria-label={contact.label}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {contact.icon}
            </a>
          ))}
        </div>
        </section>

        <section
          className="projects-section"
          data-animate
          style={{ animationDelay: "0.2s" }}
        >
          <header className="projects-header">
            <p className="projects-title">Active Projects</p>
          </header>

          <div className="projects-viewport">
            <div
              className="projects-track"
              role="list"
              aria-label="Projects carousel"
              ref={trackRef}
            >
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="project-card"
                  data-animate
                  style={{ animationDelay: `${0.35 + index * 0.05}s` }}
                  role="listitem"
                >
                  {project.iconKey && iconMap[project.iconKey] && (
                    <div className="project-icon-display">
                      {iconMap[project.iconKey]}
                    </div>
                  )}
                  <div className="project-top">
                    <div>
                      <span className="project-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                  </div>
                  <div className="project-body">
                    <p className="project-summary">{project.details.summary}</p>
                    <div className="project-actions">
                      <button
                        className="project-action"
                        type="button"
                        onClick={() => setSelectedProject(project)}
                      >
                        Project details
                      </button>
                      {project.githubUrl && (
                        <a
                          className="project-action project-action-github"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <span className="github-icon-small">
                            <GitHubIcon />
                          </span>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-foot">
                    <span className="project-built-with">{project.details.builtWith}</span>
                  </div>
                </article>
              ))}
            </div>
            {showScrollHint ? (
              <button
                className="scroll-arrow"
                onClick={handleScrollHint}
                aria-label="Scroll projects"
                type="button"
              >
                <ChevronIcon />
              </button>
            ) : null}
          </div>

        </section>
      </main>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </div>
  );
}

type ModalProps = {
  project: Project;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ModalProps) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="project-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close details">
          ×
        </button>
        <header className="modal-header">
          <div>
            <p className="project-index modal-index">Details</p>
            <h2>{project.title}</h2>
            <a
              className="modal-cta"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              Visit build ↗
            </a>
          </div>
        </header>
        <p className="modal-summary">{project.details.modalDetail}</p>
        
        {project.details.screenshots && project.details.screenshots.length > 0 && (
          <div className="modal-screenshots">
            {project.details.screenshots.map((src, i) => (
              <div key={i} className="modal-screenshot-frame">
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        )}

        <p className="modal-built-with">{project.details.builtWith}</p>
      </div>
    </div>
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

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
      <path
        d="M8 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
