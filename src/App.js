//IMPORT STYLES
import "./App.css";
import MovieCard from "./components/MovieCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//IMPORT CUSTOM HOOKS
import { useFetchMovies } from "./hooks/useFetchAPI";

function App() {
  const [movies, error, loading] = useFetchMovies();
  return (
    <div className="App">
      <div className="container"></div>
      {/* {loading ? (
        <div>loading...</div>
      ) : movies ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
          </Grid>
        </Box>
      ) : (
        error && <div>error!</div>
      )} */}
    </div>
  );
}

export default App;
