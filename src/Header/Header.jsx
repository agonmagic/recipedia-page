import { useState } from "react";

import userImg from "../assets/user.png";
import logoImg from "../assets/Recipedia Logo.svg";
import searchImg from "../assets/search.png"

import "./Header.css";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={logoImg} alt="Logo" />
        <a href="#home">
          <h1>Recipedia</h1>
        </a>
      </div>

      <ul className="navbar">
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
        <div className="search-container">
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
