import './Row.css';

export default function Row({ title, children }) {
  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <ul className="row-list bleed">{children}</ul>
    </section>
  );
}