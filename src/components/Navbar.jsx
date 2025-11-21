import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/pop">Popular</a>
        </li>
        <li>
          <a href="/top">Top Rated</a>
        </li>
        <li>
          <a href="/candy">Concession</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
