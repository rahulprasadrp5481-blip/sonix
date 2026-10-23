import Page from '../components/Page';
import './search.css';
export default function Search() {
  return (
   <Page title="search" note="aaj kya sunna hai?" >
   <label className="sr-only" htmlFor="q">Search songs,artists and mixtapes</label>
   <input id="q" className="search-input" type="search" placeholder="Songs, artists, mixtapes" autoComplete="off"/>
   </Page>
  );
}