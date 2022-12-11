import React from "react";
import Card from "./Card";

const CardList = ({ name, cards, onClickShowDetails, stateData }) => {
  return (
    <div className="cards_list__container">
      <h2>{name}</h2>
      <div className="cards__container">
        {stateData.error ? (
          <div>loading...</div>
        ) : (
          cards &&
          cards.map((movie) => {
            return (
              <Card
                movie={movie}
                key={movie.id}
                onClickShowDetails={(id) => onClickShowDetails(id)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CardList;
