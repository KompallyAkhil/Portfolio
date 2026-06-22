"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Copy, Check } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function EmailModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
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
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", animation: "fadeIn 0.15s ease" }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col gap-4 p-7 w-[90%] max-w-[420px] border-2 max-sm:p-4 max-sm:w-[95%]"
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
            Get in Touch
          </h3>
          <button
            className="flex items-center justify-center w-8 h-8 border-2 text-[1.2rem] cursor-pointer transition-all duration-150"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--rule-soft)",
              color: "var(--ink-mute)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--ink)";
              e.currentTarget.style.color = "var(--bg)";
              e.currentTarget.style.borderColor = "var(--ink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--bg-surface)";
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

        {/* Content */}
        <div
          className="flex flex-col items-stretch gap-4 px-5 py-6 border-2 max-sm:px-3 max-sm:py-4"
          style={{ borderColor: "var(--rule-soft)" }}
        >
          {/* Email address */}
          <span
            className="font-semibold text-[0.88rem] text-center px-5 py-3 border whitespace-nowrap max-sm:text-[0.75rem] max-sm:px-2 max-sm:whitespace-normal max-sm:break-all max-sm:overflow-wrap-anywhere"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--blueprint)",
              background: "var(--bg)",
              borderColor: "var(--rule-soft)",
            }}
          >
            {personalInfo.email}
          </span>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-1.5 w-full border-2 text-[0.78rem] font-semibold px-3.5 py-2.5 cursor-pointer whitespace-nowrap transition-all duration-150"
            style={{
              fontFamily: "var(--font-mono)",
              background: "var(--ink)",
              color: "var(--bg)",
              borderColor: "var(--ink)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--blueprint)";
              e.currentTarget.style.borderColor = "var(--blueprint)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--ink)";
              e.currentTarget.style.borderColor = "var(--ink)";
            }}
            title={copied ? "Copied!" : "Copy email"}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Hint */}
        <p
          className="m-0 py-2 text-[0.85rem] border-2 border-dashed text-center"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--ink-mute)",
            borderColor: "var(--rule-soft)",
          }}
        >
          {copied ? "Email copied to clipboard!" : "Click copy to grab my email"}
        </p>
      </div>
    </div>,
    document.body
  );
}
