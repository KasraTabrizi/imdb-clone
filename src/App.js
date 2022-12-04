//IMPORT STYLES
import "./App.css";
import Card from "./components/Card";

//IMPORT CUSTOM HOOKS
import { useFetchMovies } from "./hooks/useFetchAPI";

function App() {
  const [movies, error, loading] = useFetchMovies();
  return (
    <div className="App">
      <div className="container__image"></div>
      {loading ? (
        <div>loading...</div>
      ) : movies ? (
        <div className="movies__container">
          {movies.map((movie) => {
            return <Card movie={movie} />;
          })}
        </div>
      ) : (
        error && <div>error!</div>
      )}
    </div>
  );
}

export default App;
