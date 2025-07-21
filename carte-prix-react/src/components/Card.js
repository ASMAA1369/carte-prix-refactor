import React from 'react';

const Card = ({ title, price, features, buttonLabel, onButtonClick }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-price">{price}</p>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="card-btn" onClick={onButtonClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Card;
