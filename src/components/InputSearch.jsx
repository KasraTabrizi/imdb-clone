import React, { useState } from "react";
import { useFetch } from "../hooks/useFetchAPI";

const InputSearch = ({ onSearchHandler }) => {
  const [searchInput, setSearchInput] = useState("");
  const [queryData, setQueryData] = useState("");
  const [data] = useFetch("search/movie", queryData);

  const onChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const onClickHandler = () => {
    setQueryData(searchInput);
    onSearchHandler(data);
  };

  return (
    <div className="inputsearch__container">
      <input
        type="text"
        value={searchInput}
        placeholder="Search for a movie..."
        onChange={(value) => onChangeInput(value)}
      />
      <button onClick={() => onClickHandler()}>Search</button>
    </div>
  );
};

export default InputSearch;
