import { useState } from 'react'
import Page from '../components/Page'
import MoodChips from '../components/MoodChips'
import Row from '../components/Row'
import CoverCard from '../components/CoverCard'
import songs from '../data/songs'
import { greetingFor } from '../utils/greeting'

const MOODS = ['Anything', 'Rainy day', 'Late night', 'Focus', 'Old songs']

export default function Home() {
  const [mood, setMood] = useState('Anything')

  return (
    <Page title={`${greetingFor()}, Rahul`} note="what's the mood today?">
      <MoodChips moods={MOODS} selected={mood} onSelect={setMood} />

      <Row title="On repeat">
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
    </Page>
  )
}