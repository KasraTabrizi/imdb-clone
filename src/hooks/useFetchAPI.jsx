import { useEffect, useState } from "react";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const setFetchFilter = (filter = "discover", query = "") => {
    let fetchType = "";
    if (filter === "discover") {
      fetchType = `https://api.themoviedb.org/3/discover/movie`;
    }
    if (filter === "nowPlaying") {
      fetchType = `https://api.themoviedb.org/3/movie/now_playing`;
    }
    if (filter === "getDetails") {
      fetchType = `https://api.themoviedb.org/3/movie/${query}`;
    }
    if (filter === "trending") {
      fetchType = `https://api.themoviedb.org/3/trending/movie/day`;
    }

    fetch(`${fetchType}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setFetchFilter();
  }, []);

  return [movies, error, loading];
};
