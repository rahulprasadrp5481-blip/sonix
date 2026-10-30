import { Link, useParams } from 'react-router'
import Page from '../components/Page'
import mixtapes from '../data/mixtapes'
import songs from '../data/songs'
import './Mixtape.css'

export default function Mixtape() {
    const { id } = useParams()
    const mixtape = mixtapes.find((item) => item.id === id)

    if (!mixtape) {
        return (
            <Page title="Mixtape nahi mila" note="shayad link galat hai">
                <Link to="/" className="back-link">
                    Home pe wapas
                </Link>
            </Page>
        )
    }

    const tracks = mixtape.songIds
        .map((songId) => songs.find((song) => song.id === songId))
        .filter(Boolean)

    return (
        <Page title={mixtape.title} note={`"${mixtape.note}"`}>
            <Link to="/" className='back-link'> Back </Link>

            <img
                className='mixtape-hero-img'
                src={mixtape.cover}
                alt=''
                width="280"
                height="280"
            />
            <p className='mixtape-from'>
                from {mixtape.from} . {tracks.length} songs
            </p>

            <ol className='tracklist'>
                {tracks.map((song, index) => (
                    <li key={song.id} className='track'>
                        <span className='track-num'>{index + 1}</span>
                        <img
                            className="track-img"
                            src={song.cover}
                            alt=""
                            width="48"
                            height="48"
                            loading="lazy" />
                        <span className="track-text">
                            <span className="track-title">{song.title}</span>
                            <span className="track-artist">{song.artist}</span>
                        </span>

                    </li>

                ))}
            </ol>
        </Page>
    )
}