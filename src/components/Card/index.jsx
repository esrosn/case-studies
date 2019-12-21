import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card dib mt2 mb3">
      <a href="/" className="black link">
        <div className="card-main">
          <div className="bg-light-green pa3">
            <h2 className="mb2 pb2">Project Title</h2>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
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

export default Card;
