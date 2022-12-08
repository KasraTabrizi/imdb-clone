import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import { useFetchMovies } from "./hooks/useFetchAPI";

function App() {
  const [data, error, loading, setFetchFilter] = useFetchMovies();
  const [showCardDetails, setShowCardDetails] = useState(false);

  const cardDetailsHandler = (id) => {
    console.log(id);
    setFetchFilter("getDetails", id);
    setShowCardDetails(true);
  };

  const goToMainPage = () => {
    setFetchFilter("nowPlaying");
    setShowCardDetails(false);
  };

  return (
    <div className="App">
      {/* <div className="container__image"></div> */}
      {/* TODO: SearchBar */}
      {/* TODO now playing and trending with button switch. */}
      {/* TODO Search result component */}
      {showCardDetails ? (
        <CardDetails details={data} backButtonHandler={() => goToMainPage()} />
      ) : (
        data && (
          <CardList
            name="Playing Now"
            cards={data}
            onClickShowDetails={(id) => cardDetailsHandler(id)}
          />
        )
      )}
    </div>
  );
}

export default App;
