import { useState } from 'react'
import Page from '../components/Page'
import MoodChips from '../components/MoodChips'
import Row from '../components/Row'
import SongRow from '../components/SongRow'
import MixtapeCard from '../components/MixtapeCard'
import songs from '../data/songs'
import mixtapes from '../data/mixtapes'
import { greetingFor } from '../utils/greeting'

const MOODS = ['Anything', 'Rainy day', 'Late night', 'Focus', 'Old songs']

export default function Home() {
  const [mood, setMood] = useState('Anything')

  const visibleSongs =
    mood === 'Anything'
      ? songs
      : songs.filter((song) => song.moods.includes(mood))

  const newSongs = visibleSongs.filter((song) => song.isNew)

  return (
    <Page title={`${greetingFor()}, Rahul`} note="what's the mood today?">
      <MoodChips moods={MOODS} selected={mood} onSelect={setMood} />

      {visibleSongs.length === 0 ? (
        <p className="note">is mood ke liye abhi koi gaana nahi hai</p>
      ) : (
        <SongRow key={mood} title="On repeat" songs={visibleSongs} />
      )}

      <Row title="Mixtapes from friends">
        {mixtapes.map((mixtape) => (
          <li key={mixtape.id}>
            <MixtapeCard mixtape={mixtape} />
          </li>
        ))}
      </Row>

      {newSongs.length > 0 && (
        <SongRow key={`new-${mood}`} title="New this week" songs={newSongs} />
      )}
    </Page>
  )
}