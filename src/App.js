import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import { useFetch } from "./hooks/useFetchAPI";

function App() {
  const [data, error, loading] = useFetch("now_playing");
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [cardId, setCardId] = useState(null);

  const cardDetailsHandler = (id) => {
    console.log(id);
    setCardId(id);
    setShowCardDetails(true);
  };

  const goToMainPage = () => {
    setShowCardDetails(false);
  };

  return (
    <div className="App">
      {/* <div className="container__image"></div> */}
      {/* TODO: SearchBar */}
      {/* TODO now playing and trending with button switch. */}
      {/* TODO Search result component */}
      {showCardDetails ? (
        <CardDetails id={cardId} backButtonHandler={() => goToMainPage()} />
      ) : (
        <CardList
          name="Playing Now"
          cards={data?.results}
          onClickShowDetails={(id) => cardDetailsHandler(id)}
        />
      )}
    </div>
  );
}

export default App;
