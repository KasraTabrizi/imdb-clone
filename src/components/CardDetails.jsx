import React from "react";
import "./CardDetails.css";
import { useFetch } from "../hooks/useFetchAPI";

const CardDetails = ({ id, backButtonHandler }) => {
  const [data] = useFetch(`movie/${id}`);
  return (
    <div className="card_details_main__container">
      <button onClick={() => backButtonHandler()}>Go Back</button>
      {data && (
        <div className="card_details__container">
          <div className="poster__container">
            <img
              src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
              alt={`${data.title}_poster`}
            />
          </div>
          <div className="details__container">
            <h2>{data.title}</h2>
            <div className="extra__information">
              <ul>
                <li>{data.release_date}</li>
                <li>
                  {data.genres.map((genre) => {
                    return <span>{genre.name}</span>;
                  })}
                </li>
                <li>{data.runtime} min</li>
              </ul>
            </div>
            <div className="tag_line">
              <i>{data.tagline}</i>
            </div>
            <div className="description">
              <h3>Overview</h3>
              <p>{data.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
