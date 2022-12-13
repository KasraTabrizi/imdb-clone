import React, { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import { useFetch } from "./hooks/useFetchAPI";
import InputSearch from "./components/InputSearch";

const App: React.FC = () => {
  const [switchOption, setSwitchOption] = useState("movie/now_playing");
  const [optionState, setOptionState] = useState("Now Playing");
  const [data] = useFetch(switchOption);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [cardId, setCardId] = useState(0);
  const [searchQuery, setSearchedQuery] = useState<any>(null);

  const cardDetailsHandler = (id: any) => {
    setCardId(id);
    setShowCardDetails(true);
  };

  const goToMainPage = () => {
    setShowCardDetails(false);
  };

  const triggerPlayingNow = () => {
    setSwitchOption("movie/now_playing");
    setOptionState("Now Playing");
    setSearchedQuery(null);
  };

  const triggerTrending = () => {
    setSwitchOption("trending/movie/day");
    setOptionState("Trending");
    setSearchedQuery(null);
  };

  const triggerSearchResults = (data: any) => {
    setSearchedQuery(data);
    setOptionState("Search results");
  };

  return (
    <div className="App">
      <div className="container__image">
        <InputSearch
          onSearchHandler={(data: any) => triggerSearchResults(data)}
        />
      </div>
      {showCardDetails ? (
        <CardDetails
          key={cardId}
          id={cardId}
          backButtonHandler={() => goToMainPage()}
        />
      ) : (
        <>
          <div className="switch__container">
            <button
              className={optionState === "Now Playing" ? "button_active" : ""}
              onClick={() => triggerPlayingNow()}
            >
              Playing Now
            </button>
            <button
              className={optionState === "Trending" ? "button_active" : ""}
              onClick={() => triggerTrending()}
            >
              Trending
            </button>
          </div>
          <CardList
            name={optionState}
            cards={searchQuery ? searchQuery.results : data?.results}
            onClickShowDetails={(id: Number) => cardDetailsHandler(id)}
          />
        </>
      )}
    </div>
  );
};

export default App;
