import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pop">Popular</Link>
        </li>
        <li>
          <Link to="/top">Top Rated</Link>
        </li>
        <li>
          <Link to="/candy">Concession</Link> 
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
