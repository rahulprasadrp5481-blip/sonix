import Row from './Row'
import CoverCard from './CoverCard'

export default function SongRow({ title, songs }) {
  return (
    <Row title={title}>
      {songs.map((song) => (
        <li key={song.id}>
          <CoverCard
            cover={song.cover}
            title={song.title}
            subtitle={song.artist}
          />
        </li>
      ))}
    </Row>
  )
}