import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import { useFetch } from "./hooks/useFetchAPI";
import InputSearch from "./components/InputSearch";

function App() {
  const [switchOption, setSwitchOption] = useState("movie/now_playing");
  const [optionState, setOptionState] = useState("Now Playing");
  const [data] = useFetch(switchOption);
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
  };

  const triggerTrending = () => {
    setSwitchOption("trending/movie/day");
    setOptionState("Trending");
  };

  return (
    <div className="App">
      {/* <div className="container__image"></div> */}
      {/* TODO now playing and trending with button switch. */}
      <InputSearch onSearchHandler={(data) => setSearchedQuery(data)} />
      {showCardDetails ? (
        <CardDetails id={cardId} backButtonHandler={() => goToMainPage()} />
      ) : (
        <>
          <div className="switch__container">
            <button onClick={() => triggerPlayingNow()}>Playing Now</button>
            <button onClick={() => triggerTrending()}>Trending</button>
          </div>
          <CardList
            name={optionState}
            cards={searchQuery ? searchQuery.results : data?.results}
            onClickShowDetails={(id) => cardDetailsHandler(id)}
          />
        </>
      )}
    </div>
  );
}

export default App;
