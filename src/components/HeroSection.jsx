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
    <section className="hero" aria-label="Introduction">
      <div className="hero__name-block">
        <h1 className="hero__name">
          <span className="hero__name-line">{personalInfo.firstName}</span>
          <span className="hero__name-line" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
            {personalInfo.lastName}
            <button
              onClick={playPronunciation}
              aria-label="Listen to pronunciation"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "1px",
                display: "inline-flex",
                alignItems: "center",
                color: "var(--ink)",
                opacity: 0.5,
                transition: "opacity 0.2s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.5}
            >
              <Volume2 size={24} />
            </button>
            <audio ref={audioRef} src="/Voice/AkhilKompally_Voiceover.mp3" preload="auto" />
          </span>
        </h1>
      </div>
      <div className="hero__meta">
        <div style={{ background: "var(--bg)", width: "fit-content", paddingRight: "16px", paddingBottom: "8px" }}>
          <p className="hero__title">{personalInfo.title}</p>
          <p className="hero__tagline" style={{ marginBottom: "20px" }}>{personalInfo.tagline}</p>
        </div>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">View Work</a>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href={personalInfo.resumeUrl} className="btn btn--primary" target="_blank" rel="noopener noreferrer">Resume</a>
            <button 
              onClick={() => setIsEmailModalOpen(true)}
              className="btn btn--primary" 
              style={{ padding: "0 14px", display: "flex", alignItems: "center", justifyContent: "center" }}
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
