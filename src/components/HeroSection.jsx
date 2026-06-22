"use client";
import { personalInfo } from "@/data/portfolio";
import { Volume2, Mail } from "lucide-react";
import { useRef, useState } from "react";
import EmailModal from "./EmailModal";

export default function HeroSection() {
  const audioRef = useRef(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const playPronunciation = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <section className="hero-animate py-14 pb-12" aria-label="Introduction">
      {/* Name block */}
      <div>
        <h1
          className="flex flex-col gap-0 m-0 leading-[0.9]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="block w-fit py-0.5"
            style={{
              fontSize: "clamp(4rem, 12vw, 9rem)",
              color: "var(--blueprint)",
              background: "var(--bg)",
            }}
          >
            {personalInfo.firstName}
          </span>
          <span
            className="flex items-center gap-[0.2rem] w-fit py-0.5"
            style={{
              fontSize: "clamp(4rem, 12vw, 9rem)",
              color: "var(--blueprint)",
              background: "var(--bg)",
            }}
          >
            {personalInfo.lastName}
            <button
              onClick={playPronunciation}
              aria-label="Listen to pronunciation"
              className="inline-flex items-center bg-transparent border-none cursor-pointer p-px transition-opacity duration-200"
              style={{ color: "var(--ink)", opacity: 0.5 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
            >
              <Volume2 size={24} />
            </button>
            <audio ref={audioRef} src="/Voice/AkhilKompally_Voiceover.mp3" preload="auto" />
          </span>
        </h1>
      </div>

      {/* Meta */}
      <div className="mt-8 max-w-[520px]">
        <div style={{ background: "var(--bg)", width: "fit-content", paddingRight: "16px", paddingBottom: "8px" }}>
          <p
            className="m-0 mb-2 font-semibold text-[1.1rem]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
          >
            {personalInfo.title}
          </p>
          <p
            className="text-[1.15rem] leading-relaxed mb-5"
            style={{ color: "var(--ink-soft)" }}
          >
            {personalInfo.tagline}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-stretch gap-3 flex-wrap">
          <a
            href="#projects"
            className="inline-block font-medium text-[0.85rem] px-6 py-2.5 border-2 cursor-pointer transition-all duration-200 no-underline"
            style={{
              fontFamily: "var(--font-mono)",
              borderColor: "var(--blueprint)",
              background: "var(--blueprint)",
              color: "#fff",
              boxShadow: "var(--shadow-hard)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hard-lg)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hard)")}
          >
            View Work
          </a>
          <div className="flex gap-2.5">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-[0.85rem] px-6 py-2.5 border-2 cursor-pointer transition-all duration-200 no-underline"
              style={{
                fontFamily: "var(--font-mono)",
                borderColor: "var(--blueprint)",
                background: "var(--blueprint)",
                color: "#fff",
                boxShadow: "var(--shadow-hard)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hard-lg)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hard)")}
            >
              Resume
            </a>
            <button
              onClick={() => setIsEmailModalOpen(true)}
              className="inline-flex items-center justify-center px-3.5 border-2 cursor-pointer transition-all duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                borderColor: "var(--blueprint)",
                background: "var(--blueprint)",
                color: "#fff",
                boxShadow: "var(--shadow-hard)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hard-lg)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-hard)")}
              aria-label="Email Me"
            >
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      {isEmailModalOpen && <EmailModal onClose={() => setIsEmailModalOpen(false)} />}
    </section>
  );
}
