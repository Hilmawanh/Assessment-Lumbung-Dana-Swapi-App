import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h2 className="title-story">The Story Of Kylo Ren</h2>
        <Link to="/story">
          <button>Read The Story</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
