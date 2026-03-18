"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

type ModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ModalProps) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="project-modal">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>

        <header className="modal-header">
          <div>
            <p className="project-index modal-index">Case Study</p>
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

        <div className="modal-sections">
          <div className="modal-section">
            <p className="modal-label">The Problem</p>
            <p className="modal-section-text">{project.details.problem}</p>
          </div>

          <div className="modal-section">
            <p className="modal-label">What I Built</p>
            <p className="modal-section-text">{project.details.modalDetail}</p>
          </div>

          <div className="modal-section modal-section-impact">
            <p className="modal-label">Results</p>
            <p className="modal-section-text">{project.details.impact}</p>
          </div>
        </div>

        {project.details.screenshots && project.details.screenshots.length > 0 && (
          <div className="modal-screenshots">
            {project.details.screenshots.map((src, i) => (
              <div key={i} className="modal-screenshot-frame">
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={900}
                  height={506}
                  style={{ width: "100%", height: "auto" }}
                  sizes="(max-width: 900px) 95vw, 900px"
                  loading="lazy"
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
