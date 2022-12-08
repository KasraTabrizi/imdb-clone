import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import { useFetch } from "./hooks/useFetchAPI";
import InputSearch from "./components/InputSearch";

function App() {
  const [data] = useFetch("movie/now_playing");
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

  return (
    <div className="App">
      {/* <div className="container__image"></div> */}
      {/* TODO now playing and trending with button switch. */}
      <InputSearch onSearchHandler={(data) => setSearchedQuery(data)} />
      {showCardDetails ? (
        <CardDetails id={cardId} backButtonHandler={() => goToMainPage()} />
      ) : (
        <CardList
          name="Playing Now"
          cards={searchQuery ? searchQuery.results : data?.results}
          onClickShowDetails={(id) => cardDetailsHandler(id)}
        />
      )}
    </div>
  );
}

export default App;
