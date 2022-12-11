import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import { useFetch } from "./hooks/useFetchAPI";
import InputSearch from "./components/InputSearch";

function App() {
  const [switchOption, setSwitchOption] = useState("movie/now_playing");
  const [optionState, setOptionState] = useState("Now Playing");
  const [data, error, loading] = useFetch(switchOption);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [searchQuery, setSearchedQuery] = useState(null);

  const cardDetailsHandler = (id) => {
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

  const triggerSearchResults = (data) => {
    setSearchedQuery(data);
    setOptionState("Search results");
  };

  return (
    <div className="App">
      <div className="container__image">
        <InputSearch onSearchHandler={(data) => triggerSearchResults(data)} />
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
              className={optionState === "Now Playing" && "button_active"}
              onClick={() => triggerPlayingNow()}
            >
              Playing Now
            </button>
            <button
              className={optionState === "Trending" && "button_active"}
              onClick={() => triggerTrending()}
            >
              Trending
            </button>
          </div>
          <CardList
            name={optionState}
            cards={searchQuery ? searchQuery.results : data?.results}
            onClickShowDetails={(id) => cardDetailsHandler(id)}
            stateData={(error, loading)}
          />
        </>
      )}
    </div>
  );
}

export default App;
