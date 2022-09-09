import React from "react";

const Cards = ({ item, handleClick }) => {
  const { drugName, author, price, img,expiryDate,batchId } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{drugName}</p>
        <p>{author}</p>
        <p>Batch Id: {batchId}</p>
        <p>Expiry Date:{expiryDate}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
