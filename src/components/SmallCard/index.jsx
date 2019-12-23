import React from "react";
import "../Card/Card.css";

const SmallCard = () => {
  return (
    <div className="small-card card dib mt2 mb3">
      <a href="/" className="black link">
        <div className="card-main">
          <div className="bg-light-gray pa2">
            <h2>Lorem ipsum dolor sit, amet. Lorem, ipsum dolor.</h2>
          </div>
          <div className="images">
            <div className="image">
              <img
                src="https://www.underconsideration.com/brandnew/archives/friday_likes_311.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SmallCard;
