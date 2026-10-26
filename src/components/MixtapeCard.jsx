import CoverCard from './CoverCard'
import './MixtapeCard.css'

export default function MixtapeCard({ mixtape }) {
  const { cover, title, from, note } = mixtape

  return (
    <div className="mixtape-card">
      <CoverCard cover={cover} title={title} subtitle={`from ${from}`} />
      <p className="mixtape-note">“{note}”</p>
    </div>
  )
}