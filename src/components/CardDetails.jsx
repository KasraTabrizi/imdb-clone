import React from "react";

const CardDetails = ({ data, backButtonHandler }) => {
  return (
    <div>
      <button onClick={() => backButtonHandler()}>Go Back</button>
      <h1>Card Details</h1>
    </div>
  );
};

export default CardDetails;
