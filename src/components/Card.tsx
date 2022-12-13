import React from "react";
import "./Card.css";

interface CardProps {
  movieDetails: {
    id: Number;
    poster_path: String;
    title: String;
    release_date: String;
  };
  onClickShowDetails: Function;
}

const Card: React.FC<CardProps> = ({ movieDetails, onClickShowDetails }) => {
  return (
    <div
      className="card__container"
      onClick={() => onClickShowDetails(movieDetails.id)}
    >
      <div className="image__box">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={`${movieDetails.title}_poster`}
        />
      </div>
      <h4>{movieDetails.title}</h4>
      <p>{movieDetails.release_date}</p>
    </div>
  );
};

export default Card;
