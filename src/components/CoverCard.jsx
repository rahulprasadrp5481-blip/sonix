import './CoverCard.css';

export default function CoverCard({ cover, title, subtitle }) {
  return (
    <button type="button" className="cover-card">
      <img
        className="cover-card-img"
        src={cover}
        alt=""
        width="140"
        height="140"
        loading="lazy"
      />
      <span className="cover-card-title">{title}</span>
      <span className="cover-card-subtitle">{subtitle}</span>
    </button>
  );
}