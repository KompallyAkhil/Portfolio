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
    <div
      className="flex flex-col gap-0 py-3.5 border-t first:border-t-0 first:pt-0 last:pb-0 no-underline"
      style={{ borderColor: "var(--rule-soft)" }}
    >
      {/* Summary row */}
      <div
        className="flex items-start justify-between gap-4 cursor-pointer select-none w-full"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <span
            className="flex items-center gap-1.5 text-[0.72rem] whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
          >
            <GitHubIconSm /> {pr.repo} · #{pr.prNumber}
          </span>
          <span
            className="text-[0.92rem] font-semibold leading-[1.3] transition-colors duration-150"
            style={{ color: "var(--ink)" }}
          >
            {pr.title}
          </span>
          <span
            className="text-[0.8rem] leading-[1.4]"
            style={{ fontFamily: "var(--font-sans)", color: "var(--ink-mute)" }}
          >
            {pr.description}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0 pt-0.5">
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.05em] whitespace-nowrap text-white"
            style={{ background: "#8957e5" }}
          >
            <GitMerge size={11} /> Merged
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-[220ms]`}
            style={{
              color: "var(--ink-mute)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </div>

      {/* Expandable details */}
      {open && (
        <div
          className="oss-pr-dropdown-enter mt-3 p-4 border border-l-[3px]"
          style={{
            background: "var(--bg-surface-hover)",
            borderColor: "var(--rule-soft)",
            borderLeftColor: "#8957e5",
          }}
        >
          <ul className="list-none p-0 m-0 mb-3.5 flex flex-col gap-2">
            {pr.details.map((point, i) => (
              <li
                key={i}
                className="flex gap-2.5 items-start text-[0.85rem] leading-[1.5]"
                style={{ fontFamily: "var(--font-sans)", color: "var(--ink-soft)" }}
              >
                <span className="font-bold shrink-0 mt-px text-[0.8rem]" style={{ color: "#8957e5" }}>→</span>
                {point}
              </li>
            ))}
          </ul>
          <a
            href={pr.prUrl}
            className="inline-flex items-center gap-1.5 border px-4 py-2 text-[0.78rem] font-semibold no-underline transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-mono)",
              background: "var(--ink)",
              color: "var(--bg-surface)",
              borderColor: "var(--ink)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0 var(--ink)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
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
    <article
      className="flex flex-col justify-between border p-6 transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 col-span-full"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--rule-soft)",
        position: "relative",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hard)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* OSS Header */}
      <div className="flex justify-between items-start mb-5 flex-wrap gap-4">
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center gap-2 text-[0.85rem]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
          >
            <GitHubIconLg />
            <span>Open Source Contributions</span>
          </div>
          <h3
            className="m-0 text-[1.25rem] font-semibold leading-[1.2] tracking-tight flex items-center gap-3"
            style={{ fontFamily: "var(--font-sans)", color: "var(--ink)" }}
          >
            Merged Pull Requests
          </h3>
        </div>
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.8rem] font-bold uppercase border text-white"
          style={{ background: "#8957e5", borderColor: "#8957e5", fontFamily: "var(--font-mono)" }}
        >
          <GitMerge size={14} />
          {pullRequests.length} Merged
        </div>
      </div>

      {/* PR list */}
      <div className="flex flex-col gap-0 mt-1 flex-1">
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

      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {/* OSS full-width */}
        <OSSSCard />

        {/* GitHub */}
        <div
          className="col-span-2 flex flex-col border p-6 transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 max-md:col-span-full"
          style={{ background: "var(--bg-surface)", borderColor: "var(--rule-soft)" }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hard)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <GitHubIconLg />
            <span
              className="text-[0.65rem] font-bold px-2.5 py-1 uppercase tracking-[0.08em] text-white"
              style={{ background: "#2ea043", fontFamily: "var(--font-mono)" }}
            >
              GitHub
            </span>
          </div>
          <h3
            className="m-0 mb-1.5 text-[1.15rem] font-semibold flex items-center gap-2.5 tracking-tight"
            style={{ fontFamily: "var(--font-sans)", color: "var(--ink)" }}
          >
            GitHub Activity
          </h3>
          <p
            className="m-0 text-[0.9rem] font-medium"
            style={{ fontFamily: "var(--font-sans)", color: "var(--ink-mute)" }}
          >
            Contribution chart
          </p>
          <div className="mt-auto w-full py-4 flex justify-center items-center">
            <img
              src="https://ghchart.rshah.org/KompallyAkhil"
              alt="GitHub Contributions"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

        {/* LeetCode */}
        <div
          className="flex flex-col border p-6 transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 max-md:col-span-full"
          style={{ background: "var(--bg-surface)", borderColor: "var(--rule-soft)" }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hard)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span
              className="text-[0.65rem] font-bold px-2.5 py-1 uppercase tracking-[0.08em] text-white"
              style={{ background: "#ffa116", fontFamily: "var(--font-mono)" }}
            >
              LeetCode
            </span>
          </div>
          <h3
            className="m-0 mb-1.5 text-[1.15rem] font-semibold flex items-center gap-2.5 tracking-tight"
            style={{ fontFamily: "var(--font-sans)", color: "var(--ink)" }}
          >
            Problem Solving
          </h3>
          <p
            className="m-0 text-[0.9rem] font-medium"
            style={{ fontFamily: "var(--font-sans)", color: "var(--ink-mute)" }}
          >
            Data Structures &amp; Algorithms
          </p>
          <div className="mt-auto w-full pt-2.5 flex justify-center items-center">
            <img
              src="https://leetcard.jacoblin.cool/AkhilKompally?theme=light&font=Inter&ext=svg"
              alt="LeetCode Stats"
              className="w-full max-w-[800px] h-auto block"
              style={{ mixBlendMode: "darken" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
