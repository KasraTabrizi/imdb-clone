import React from "react";
import { useFetch } from "../hooks/useFetchAPI";

const CardDetails = ({ id, backButtonHandler }) => {
  const [data, error, loading] = useFetch(id);
  console.log(id);
  console.log(data);
  return (
    <div>
      <button onClick={() => backButtonHandler()}>Go Back</button>
      <h1>Card Details</h1>
      {data && (
        <div className="card_details__container">
          <div className="poster__container"></div>
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
            <div className="tag_line">{data.tagline}</div>
            <div className="description">
              <h3>Description</h3>
              <p>{data.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
