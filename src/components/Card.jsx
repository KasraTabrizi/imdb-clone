import React from "react";
import "./Card.css";

const Card = ({ movie }) => {
  return (
    <div className="card__container">
      <div className="image__box">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={`${movie.title}_poster`}
        />
      </div>
    </div>
  );
};

export default Card;
