import "./App.css";
import CardList from "./components/CardList";
import { useFetchMovies } from "./hooks/useFetchAPI";

function App() {
  const [moviesPlaying, error, loading, setFetchFilter] = useFetchMovies();

  setFetchFilter("nowPlaying");

  return (
    <div className="App">
      {/* <div className="container__image"></div> */}
      {/* TODO: SearchBar */}
      {/* TODO now playing and trending wit button switch. */}
      {/* TODO Search result component */}
      {/* TODO shoz CardDetails when clicking on a card */}
      {moviesPlaying && <CardList name="Playing Now" cards={moviesPlaying} />}
    </div>
  );
}

export default App;
