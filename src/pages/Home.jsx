import { useState } from 'react';
import Page from '../components/Page';
import MoodChips from '../components/MoodChips';
import { greetingFor } from '../utils/greeting';
import covers from '../data/covers';
import songs from '../data/songs';

const MOODS = ['Anything', 'Rainy day', 'Late night', 'Focus', 'Old songs'];

export default function Home() {
  const [mood, setMood] = useState('Anything');

  return (
    <Page title={`${greetingFor()}, Rahul`} note="yahin se Sonix shuru hota hai">
      <img src={covers.chai} alt="" width="140" height="140" />
      <MoodChips moods={MOODS} selected={mood} onSelect={setMood} />
    </Page>
  );
}