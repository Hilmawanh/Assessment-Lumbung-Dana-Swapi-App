import React, { useState } from "react";
import "./style.css";
import logoStar from "../../assets/star-wars-logo-1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobile = () => {
    setClick(false);
  };

  const changeBackgroundColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <h2 className="logo" href="/">
          <NavLink to="/">
            <img src={logoStar} alt="" className="logo-image" />
          </NavLink>
        </h2>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMobile}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <NavLink to="/Film" className="nav-link" onClick={closeMobile}>
              Movie
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/story" className="nav-link" onClick={closeMobile}>
              Story
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-icons" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
