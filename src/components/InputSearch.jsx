import React, { useState } from "react";
import { useFetch } from "../hooks/useFetchAPI";

const InputSearch = ({ onSearchHandler }) => {
  const [searchInput, setSearchInput] = useState("");
  const [data] = useFetch("search/movie", searchInput);

  const onChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="inputsearch__container">
      <input
        type="text"
        value={searchInput}
        placeholder="Search for a movie..."
        onChange={(value) => onChangeInput(value)}
      />
      <button onClick={() => onSearchHandler(data)}>Search</button>
    </div>
  );
};

export default InputSearch;
