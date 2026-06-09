"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Copy, Check } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function EmailModal({ onClose }) {
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return createPortal(
    <div className="qr-overlay" onClick={onClose}>
      <div className="qr-box email-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qr-box__header">
          <h3 className="qr-box__title">Get in Touch</h3>
          <button className="qr-box__close" onClick={onClose} aria-label="Close" type="button">✕</button>
        </div>
        <div className="email-modal__content">
          <span className="email-modal__address">{personalInfo.email}</span>
          <button
            onClick={handleCopy}
            className="email-modal__copy"
            title={copied ? "Copied!" : "Copy email"}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="qr-box__hint">{copied ? "Email copied to clipboard!" : "Click copy to grab my email"}</p>
      </div>
    </div>,
    document.body
  );
}
