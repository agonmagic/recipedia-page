import { useState } from "react";

import userImg from "../assets/user.png";
import searchImg from "../assets/search.png";

import Logo from "./Logo";

import "./Header.css";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <Logo />

      <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </div>

      <ul className={`navbar ${showMenu ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#recipe">Recipe</a>
        </li>
        <li>
          <a href="#aboutus">About Us</a>
        </li>
        <li>
          <a href="#community">Community</a>
        </li>
      </ul>

      <div className="searchAcc">
        <div
          className={`search-container ${showSearch ? "show" : ""}`}
        >
          <img
            src={searchImg}
            alt="Search Icon"
            id="search"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          )}
        </div>
        <img src={userImg} alt="User Icon" id="user" />
      </div>
    </header>
  );
}
