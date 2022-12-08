import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  // if (filter === "discover") {
  //   fetchType = `https://api.themoviedb.org/3/discover/movie`;
  // }
  // if (filter === "nowPlaying") {
  //   fetchType = `https://api.themoviedb.org/3/movie/now_playing`;
  // }
  // if (filter === "getDetails") {
  //   fetchType = `https://api.themoviedb.org/3/movie/${query}`;
  // }
  // if (filter === "trending") {
  //   fetchType = `https://api.themoviedb.org/3/trending/movie/day`;
  // }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url}?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return [data, error, loading];
};
