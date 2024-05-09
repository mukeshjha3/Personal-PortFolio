import React from 'react';
import './FlipCard.css';

const FlipCard = ({ title, imagesrc ,description }) => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">{title}</p>
            <img src={imagesrc} alt="Project" />
          </div>
          <div className="flip-card-back">
            <p className="description">{description}</p>
           <button className='button c-button'>Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
