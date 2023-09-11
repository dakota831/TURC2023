import React from "react";

import "./Navbar.css";
import 

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar__heading">CartWish</h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="navbar_links">
        <ul>
          <li>
            <a href="/">
              Home
              <img src="" className="link_emoji" />
            </a>
          </li>
          <li>
            <a href="/">
              Products
              <img src="" className="link_emoji" />
            </a>
          </li>
          <li>
            <a href="/">
              Cart
              <img src="" className="link_emoji" />
            </a>
          </li>
          <li>
            <a href="/">
              Login
              <img src="" className="link_emoji" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
