import Brand from './components/Brand';
import './App.css';

export default function App() {
  return (
    <div className="shell">
      <Brand />
      <main className="content">
        <section className="page">
          <h1>Good evening, Rahul</h1>
          <p className="note">yahin se Sonix shuru hota hai</p>
        </section>
      </main>
    </div>
  );
}