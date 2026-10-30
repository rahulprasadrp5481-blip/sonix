import { Routes, Route, Navigate } from 'react-router';
import Brand from './components/Brand';
import TabBar from './components/TabBar';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import You from './pages/You';
import './App.css';
import Mixtape from './pages/Mixtape'

export default function App() {
  return (
    <div className="shell">
      <Brand />
      <main className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="library" element={<Library />} />
          <Route path="you" element={<You />} />
          <Route path="mixtape/:id" element={<Mixtape />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <TabBar />
    </div>
  );
}