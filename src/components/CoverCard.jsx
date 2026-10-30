import {Link} from 'react-router'
import './CoverCard.css';

export default function CoverCard({ cover, title, subtitle, to }) {
  const content = (
    <>
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
    </>
  )
  if (to){
    return(
      <Link to={to} className='cover-card'>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className="cover-card">
      {content}      
    </button>
  )
}