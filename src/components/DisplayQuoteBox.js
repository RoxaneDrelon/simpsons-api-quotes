import React from "react";

function DisplayQuoteBox({ quoteBox }) {
  return (
    <div className="DisplayQuoteBox">
      <p>
        <strong>{quoteBox.quote}</strong>
      </p>
      <img src={quoteBox.image} alt={quoteBox.character} />
      <p>{quoteBox.character}</p>
    </div>
  );
}

export default DisplayQuoteBox;
