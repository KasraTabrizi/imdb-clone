import { useEffect, useState } from "react";

export const useFetch = (
  url: string,
  query: string = ""
): [any, any, boolean] => {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_BASE_URL}${url}?api_key=${
        process.env.REACT_APP_API_KEY
      }${query.length > 1 ? "&query=" + query : ""}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url, query]);

  return [data, error, loading];
};
