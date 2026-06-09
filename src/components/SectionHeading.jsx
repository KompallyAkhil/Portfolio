// Reusable section heading — retro numbered label + title
export default function SectionHeading({ number, title, id }) {
  return (
    <div className="section-heading" id={id}>
      <span className="section-number">{number}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-rule" aria-hidden="true" />
    </div>
  );
}
