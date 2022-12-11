import React from "react";
import "./Card.css";

const Card = ({ movie, onClickShowDetails }) => {
  return (
    <div
      className="card__container"
      onClick={() => onClickShowDetails(movie.id)}
    >
      <div className="image__box">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title}_poster`}
        />
      </div>
      <h4>{movie.title}</h4>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default Card;
