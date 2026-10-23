import { useState } from 'react';
import Page from '../components/Page';
import MoodChips from '../components/MoodChips';
import { greetingFor } from '../utils/greeting';

const MOODS = ['Anything', 'Rainy day', 'Late night', 'Focus', 'Old songs'];

export default function Home() {
  const [mood, setMood] = useState('Anything');

  return (
    <Page title={`${greetingFor()}, Rahul`} note="yahin se Sonix shuru hota hai">
      <MoodChips moods={MOODS} selected={mood} onSelect={setMood} />
    </Page>
  );
}