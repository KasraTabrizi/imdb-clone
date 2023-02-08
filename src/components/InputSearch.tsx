import React, { useState } from "react";

const InputSearch: React.FC<InputSearchProps> = ({ onSearchHandler }) => {
  const [searchInput, setSearchInput] = useState("");

  const onChangeInput = (e: any) => {
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
      <button onClick={() => onSearchHandler(searchInput)}>Search</button>
    </div>
  );
};

export default InputSearch;
