"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ComponentType } from "react";
import Image from "next/image";
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
  ShieldIcon,
  LayersIcon,
  DatabaseIcon,
} from "@/app/icons";
import { projects, type Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

const iconComponents: Record<string, ComponentType> = {
  brain: BrainIcon,
  chart: ChartIcon,
  bot: BotIcon,
  globe: GlobeIcon,
  search: SearchIcon,
  ship: ShipIcon,
  code: CodeIcon,
  map: MapIcon,
  "file-text": FileTextIcon,
  shield: ShieldIcon,
  layers: LayersIcon,
  database: DatabaseIcon,
};

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
      <path
        d="M5 8l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
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

const prefetchedUrls = new Set<string>();

function prefetchImages(urls: string[]) {
  urls.forEach((url) => {
    if (prefetchedUrls.has(url)) return;
    prefetchedUrls.add(url);
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  });
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxSrc(null);
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const evaluateScroll = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const el = trackRef.current;
      if (!el) return;
      const { scrollTop, scrollHeight, clientHeight } = el;
      setShowScrollHint(scrollTop + clientHeight < scrollHeight - 12);
    });
  }, []);

  useEffect(() => {
    const element = trackRef.current;
    if (!element) return;
    evaluateScroll();
    element.addEventListener("scroll", evaluateScroll, { passive: true });
    window.addEventListener("resize", evaluateScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId.current);
      element.removeEventListener("scroll", evaluateScroll);
      window.removeEventListener("resize", evaluateScroll);
    };
  }, [evaluateScroll]);

  const handleScrollHint = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ top: el.clientHeight * 0.75, behavior: "smooth" });
  };

  return (
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
          aria-label="Projects list"
          ref={trackRef}
        >
          {projects.map((project, index) => {
            const IconComponent =
              project.iconKey ? iconComponents[project.iconKey] : null;
            const thumbnail = project.details.screenshots?.[0];
            return (
              <article
                key={project.title}
                className="project-card"
                data-animate
                style={{ animationDelay: `${0.35 + index * 0.04}s` }}
                role="listitem"
                onMouseEnter={() => {
                  if (project.details.screenshots?.length) {
                    prefetchImages(project.details.screenshots);
                  }
                }}
              >
                <div
                  className={`project-thumb${thumbnail ? " project-thumb-clickable" : ""}`}
                  onClick={thumbnail ? () => setLightboxSrc(thumbnail) : undefined}
                  role={thumbnail ? "button" : undefined}
                  aria-label={thumbnail ? `Expand ${project.title} screenshot` : undefined}
                  tabIndex={thumbnail ? 0 : undefined}
                  onKeyDown={thumbnail ? (e) => { if (e.key === "Enter" || e.key === " ") setLightboxSrc(thumbnail); } : undefined}
                >
                  {thumbnail ? (
                    <Image
                      src={thumbnail}
                      alt={`${project.title} preview`}
                      width={320}
                      height={220}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      sizes="(max-width: 520px) 130px, (max-width: 760px) 40vw, 420px"
                    />
                  ) : (
                    <div className="project-thumb-empty">
                      {IconComponent && <IconComponent />}
                    </div>
                  )}
                </div>

                <div className="project-content-side">
                  {thumbnail && IconComponent && (
                    <div className="project-icon-display">
                      <IconComponent />
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
                    <span className="project-built-with">
                      {project.details.builtWith}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {showScrollHint && (
          <button
            className="scroll-arrow"
            onClick={handleScrollHint}
            aria-label="Scroll projects"
            type="button"
          >
            <ChevronDownIcon />
          </button>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {lightboxSrc && createPortal(
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close image"
              type="button"
            >
              ×
            </button>
            <Image
              src={lightboxSrc}
              alt="Project screenshot expanded"
              width={1400}
              height={900}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              sizes="95vw"
              priority
            />
          </div>
        </div>,

        document.body
      )}
    </section>
  );
}
