"use client";

import SectionHeading from "./SectionHeading";
import { ExternalLink, GitMerge, ChevronDown } from "lucide-react";
import { useState } from "react";

function GitHubIconSm() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function GitHubIconLg() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const pullRequests = [
  {
    repo: "puri-adityakumar/astraa",
    prNumber: 68,
    title: "Missing Keyboard Support in Scientific Calculator",
    description: "Added keydown event listener mapping keyboard inputs to calculator functions.",
    details: [
      "Identified the missing keyboard accessibility issue in the Scientific Calculator component.",
      "Implemented a keydown event listener attached to the calculator's root element.",
      "Mapped common keyboard keys (digits 0–9, operators +/−/×/÷, Enter, Backspace, Escape) to existing calculator handler functions.",
      "Ensured the listener cleans up correctly on component unmount to prevent memory leaks.",
      "Tested across Chrome, Firefox, and Safari for consistent keyboard behavior.",
    ],
    prUrl: "https://github.com/puri-adityakumar/astraa/pull/68",
  },
  {
    repo: "puri-adityakumar/astraa",
    prNumber: 61,
    title: "Bug Fixes: Race Conditions, API Error Handling & Hydration",
    description: "Refactored async flows, improved API error handling, fixed SSR hydration mismatches.",
    details: [
      "Diagnosed and resolved a race condition in concurrent async data fetches that caused stale state updates.",
      "Added structured try/catch blocks with meaningful fallback UI states for failed API calls.",
      "Fixed SSR/CSR hydration mismatches by moving dynamic values into useEffect and deferring client-only rendering.",
      "Replaced unguarded promise chains with async/await and proper cancellation using AbortController.",
      "Added error boundary wrappers around critical sections to prevent full-page crashes.",
    ],
    prUrl: "https://github.com/puri-adityakumar/astraa/pull/61",
  },
  {
    repo: "ig-imanish/mx-icons",
    prNumber: 39,
    title: "feat: Installation Guide Page with React Router DOM",
    description: "Built a fully responsive Installation Guide page supporting dark & light modes.",
    details: [
      "Integrated react-router-dom to enable client-side navigation to the new Installation Guide route.",
      "Designed and built a step-by-step installation guide page covering npm, yarn, and pnpm install instructions.",
      "Implemented full dark mode and light mode support using CSS variables, matching the existing design system.",
      "Ensured pixel-perfect responsive layout across mobile, tablet, and desktop screen sizes.",
      "Added smooth scroll and anchor navigation for long-form guide sections.",
    ],
    prUrl: "https://github.com/ig-imanish/mx-icons/pull/39",
  },
  {
    repo: "itshover/itshover",
    prNumber: 61,
    title: "New Examples: Animated Navbar & Collapsible Sidebar",
    description: "Added animated-navbar and collapsible-sidebar examples, fixed cursor pointer UX.",
    details: [
      "Created a new animated-navbar example demonstrating smooth entry animations using CSS transitions.",
      "Built a collapsible-sidebar example with toggle state management and accessible ARIA attributes.",
      "Fixed a UX issue where the cursor didn't show as a pointer on preview, code, and animation tabs in ExampleCard.",
      "Added CodeRabbit-reviewed implementation ensuring clean, idiomatic React patterns throughout.",
      "Examples are fully responsive and include both dark and light mode variants.",
    ],
    prUrl: "https://github.com/itshover/itshover/pull/61",
  },
];

function PRRow({ pr }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`oss-pr-item${open ? " oss-pr-item--open" : ""}`}>
      {/* Summary row — clickable toggle */}
      <div className="oss-pr-item__summary" onClick={() => setOpen(!open)}>
        <div className="oss-pr-item__left">
          <span className="oss-pr-item__repo">
            <GitHubIconSm /> {pr.repo} · #{pr.prNumber}
          </span>
          <span className="oss-pr-item__title">{pr.title}</span>
          <span className="oss-pr-item__desc">{pr.description}</span>
        </div>
        <div className="oss-pr-item__right">
          <span className="oss-pr-item__merged">
            <GitMerge size={11} /> Merged
          </span>
          <ChevronDown size={16} className={`oss-pr-chevron${open ? " oss-pr-chevron--open" : ""}`} />
        </div>
      </div>

      {/* Expandable details */}
      {open && (
        <div className="oss-pr-item__dropdown">
          <ul className="oss-pr-detail-list">
            {pr.details.map((point, i) => (
              <li key={i} className="oss-pr-detail-item">
                <span className="oss-pr-detail-bullet">→</span>
                {point}
              </li>
            ))}
          </ul>
          <a
            href={pr.prUrl}
            className="oss-pr-detail-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <GitHubIconSm /> View Pull Request #{pr.prNumber} <ExternalLink size={12} />
          </a>
        </div>
      )}
    </div>
  );
}

function OSSSCard() {
  return (
    <article className="bento-card--oss bento-card--oss-full">
      <div className="oss-header">
        <div className="oss-header-left">
          <div className="oss-repo">
            <GitHubIconLg />
            <span>Open Source Contributions</span>
          </div>
          <h3 className="oss-title">Merged Pull Requests</h3>
        </div>
        <div className="oss-status">
          <GitMerge size={14} />
          {pullRequests.length} Merged
        </div>
      </div>

      <div className="oss-pr-list">
        {pullRequests.map((pr) => (
          <PRRow key={pr.prUrl} pr={pr} />
        ))}
      </div>
    </article>
  );
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="portfolio-section">
      <SectionHeading number="06" title="Achievements" id="achievements-heading" />
      <div className="bento-grid">
        <OSSSCard />
        <div className="bento-card bento-card--github">
          <div className="bento-card__top">
            <GitHubIconLg />
            <span className="bento-card__badge bento-card__badge--github">GitHub</span>
          </div>
          <h3 className="bento-card__title">GitHub Activity</h3>
          <p className="bento-card__subtitle" style={{ marginBottom: "0" }}>Contribution chart</p>
          <div className="github-chart-container">
            <img
              src="https://ghchart.rshah.org/KompallyAkhil"
              alt="GitHub Contributions"
              className="github-chart"
            />
          </div>
        </div>
        <div className="bento-card bento-card--leetcode">
          <div className="bento-card__top">
            <span className="bento-card__badge bento-card__badge--leetcode">LeetCode</span>
          </div>
          <h3 className="bento-card__title">Problem Solving</h3>
          <p className="bento-card__subtitle" style={{ marginBottom: "0" }}>Data Structures &amp; Algorithms</p>
          <div className="leetcode-chart-container">
            <img
              src="https://leetcard.jacoblin.cool/AkhilKompally?theme=light&font=Inter&ext=svg"
              alt="LeetCode Stats"
              className="leetcode-chart"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
