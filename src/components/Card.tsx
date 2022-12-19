import React from "react";
import "../styles/Card.css";

interface CardProps {
  movieDetails: {
    id: Number;
    poster_path: string;
    title: string;
    release_date: string;
  };
  onClickShowDetails: (id: Number) => void;
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
