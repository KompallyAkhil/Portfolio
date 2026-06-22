"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Briefcase, User, Code, Layers, GraduationCap, Trophy, Globe } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { QrCodeIcon } from "@hugeicons/core-free-icons";

const items = [
  { icon: Briefcase, href: "#experience", label: "Experience" },
  { icon: User, href: "#about", label: "About" },
  { icon: Code, href: "#projects", label: "Projects" },
  { icon: Layers, href: "#tech-stack", label: "Tech Stack" },
  { icon: GraduationCap, href: "#education", label: "Education" },
  { icon: Trophy, href: "#achievements", label: "Achievements" },
  { icon: Globe, href: "#socials", label: "Socials" },
];

function QrModal({ onClose }) {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", animation: "fadeIn 0.15s ease" }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col gap-4 p-6 w-[90%] max-w-[320px] text-center border-2"
        style={{
          background: "var(--bg)",
          borderColor: "var(--rule-soft)",
          boxShadow: "var(--shadow-hard-lg)",
          animation: "popIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex justify-between items-center border-b-2 pb-3 mb-2"
          style={{ borderColor: "var(--rule-soft)" }}
        >
          <h3
            className="m-0 text-2xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            Let's Connect!
          </h3>
          <br />
          <button
            className="flex items-center justify-center w-8 h-8 border-2 text-[1.2rem] cursor-pointer transition-all duration-150 hover:text-white"
            style={{
              background: "transparent",
              borderColor: "var(--rule-soft)",
              color: "var(--ink-mute)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--ink)";
              e.currentTarget.style.color = "var(--bg)";
              e.currentTarget.style.borderColor = "var(--ink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--ink-mute)";
              e.currentTarget.style.borderColor = "var(--rule-soft)";
            }}
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* QR image */}
        <div className="flex justify-center">
          <img src="/QR/QR.png" alt="QR Code" style={{ width: 220, height: 220, objectFit: "contain", mixBlendMode: "darken" }} />
        </div>

        {/* Hint */}
        <p
          className="m-0 py-2 text-[0.85rem] border-2 border-dashed"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--ink-mute)",
            borderColor: "var(--rule-soft)",
          }}
        >
          Scan to connect
        </p>
      </div>
    </div>,
    document.body
  );
}

export default function FloatingSidebar() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 20) {
        setActive("#final-message");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-6 right-6 z-[200] flex-col gap-1 p-2 rounded-2xl border transition-all duration-[350ms] max-md:hidden ${visible ? "flex opacity-100 translate-x-0 pointer-events-auto" : "flex opacity-0 translate-x-5 pointer-events-none"
          }`}
        style={{ background: "var(--bg)", borderColor: "var(--rule-soft)" }}
        aria-label="Section navigation"
      >
        {/* QR button */}
        <button
          className="flex items-center justify-center w-9 h-9 rounded-[10px] cursor-pointer border-none bg-transparent transition-colors duration-200"
          style={{ color: "var(--ink-mute)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--blueprint-tint)";
            e.currentTarget.style.color = "var(--ink)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--ink-mute)";
          }}
          onClick={() => setShowQr(true)}
          title="QR Code"
          aria-label="Show QR Code"
          type="button"
        >
          <HugeiconsIcon icon={QrCodeIcon} size={18} />
        </button>

        {/* Divider */}
        <div
          className="w-5 h-px self-center"
          style={{ background: "var(--rule-soft)" }}
        />

        {/* Nav items */}
        {items.map(({ icon: Icon, href, label }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              className="flex items-center justify-center w-9 h-9 rounded-[10px] no-underline transition-colors duration-200"
              style={{
                color: isActive ? "var(--blueprint)" : "var(--ink-mute)",
                background: isActive ? "var(--blueprint-tint)" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "var(--blueprint-tint)";
                  e.currentTarget.style.color = "var(--ink)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--ink-mute)";
                }
              }}
              title={label}
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </nav>

      {showQr && <QrModal onClose={() => setShowQr(false)} />}
    </>
  );
}
