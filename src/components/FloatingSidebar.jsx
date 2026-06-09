"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Briefcase, User, Code, Layers, GraduationCap, Trophy, Globe, Heart } from "lucide-react";
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
    <div className="qr-overlay" onClick={onClose}>
      <div className="qr-box" onClick={(e) => e.stopPropagation()}>
        <div className="qr-box__header">
          <h3 className="qr-box__title">Let's Connect!</h3>
          <br></br>
          <button className="qr-box__close" onClick={onClose} aria-label="Close" type="button">✕</button>
        </div>
        <div className="qr-box__image">
          <img src="/QR/QR.png" alt="QR Code" />
        </div>
        <p className="qr-box__hint">Scan to connect</p>
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
      
      // Fallback: If user hits the absolute bottom of the page, force activate the final section
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
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`floating-sidebar ${visible ? "floating-sidebar--visible" : ""}`}
        aria-label="Section navigation"
      >
        <button
          className="floating-sidebar__item floating-sidebar__qr"
          onClick={() => setShowQr(true)}
          title="QR Code"
          aria-label="Show QR Code"
          type="button"
        >
          <HugeiconsIcon icon={QrCodeIcon} size={18} />
        </button>

        <div className="floating-sidebar__divider" />

        {items.map(({ icon: Icon, href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setActive(href)}
            className={`floating-sidebar__item ${active === href ? "floating-sidebar__item--active" : ""}`}
            title={label}
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </nav>

      {showQr && <QrModal onClose={() => setShowQr(false)} />}
    </>
  );
}
