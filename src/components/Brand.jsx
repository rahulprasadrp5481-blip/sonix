import './Brand.css';

export default function Brand() {
  return (
    <header className="brand">
      <svg className="brand-mark" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#F2B33D" />
        <circle cx="16" cy="16" r="9" fill="none" stroke="#1A1510" strokeWidth="1.5" opacity=".45" />
        <circle cx="16" cy="16" r="4" fill="#1A1510" />
      </svg>
      <span className="brand-name">Sonix</span>
    </header>
  );
}