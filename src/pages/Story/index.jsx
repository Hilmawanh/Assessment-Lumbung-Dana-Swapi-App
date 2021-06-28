import React from "react";
import "./style.css";

const Story = () => {
  return (
    <div className="story">
      <div className="grid-container">
        <div className="left">
          <span className="title-char">Ben Solo</span>
          <h2 className="desc-char">
            A dark warrior strong with the Force, Kylo Ren commands First Order
            missions with a temper as fiery as his unconventional lightsaber. As a
            leader of the First Order and a student of Supreme Leader Snoke.
          </h2>
        </div>

        <div className="right">
          <img
            src="https://preview.redd.it/m0llpzvlw7741.jpg?auto=webp&s=206d987160de99c44fbb1250e350b9afa311d744"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
