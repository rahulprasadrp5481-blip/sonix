import './MoodChips.jsx';

export default function MoodChips({ moods, selected, onSelect }) {
  return (
    <div className="chips" role="group" aria-label="Pick a mood">
      {moods.map((mood) => (
        <button
          key={mood}
          type="button"
          className="chip"
          aria-pressed={mood === selected}
          onClick={() => onSelect(mood)}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}