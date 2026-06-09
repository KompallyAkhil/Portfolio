"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import confetti from "canvas-confetti";

export default function CertificateModal({ onClose, imageUrl, title }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useEffect(() => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
        zIndex: 10001,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
        zIndex: 10001,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return createPortal(
    <div className="cert-overlay" onClick={onClose}>
      <div className="cert-box" onClick={(e) => e.stopPropagation()}>
        <div className="cert-box__header">
          <h3 className="cert-box__title">{title || "Graduation Certificate"}</h3>
          <button
            className="cert-box__close"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            ✕
          </button>
        </div>
        <div className="cert-box__image-container">
          <img
            src={imageUrl}
            alt={title || "Graduation Certificate"}
            className="cert-box__image"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
