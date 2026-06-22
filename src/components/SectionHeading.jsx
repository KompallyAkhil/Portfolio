// Reusable section heading — retro numbered label + title
export default function SectionHeading({ number, title, id }) {
  return (
    <div className="flex items-center gap-4 mb-8" id={id}>
      <span
        className="opacity-70"
        style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--blueprint)" }}
      >
        {number}
      </span>
      <h2
        className="m-0 whitespace-nowrap"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
          color: "var(--ink)",
        }}
      >
        {title}
      </h2>
      <div
        className="flex-1 h-[2px]"
        style={{ background: "#d3d3d32f" }}
        aria-hidden="true"
      />
    </div>
  );
}
