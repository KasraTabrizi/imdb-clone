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
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
