import "./Footer.css";

import Logo from "../Header/Logo";

export default function Footer() {
  return (
    <div id="footer">
      <div className="left">
        <Logo />
        <div className="lists">
          <div className="list">
            <h2>Menu</h2>
            <ul>
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
          </div>
          <div className="list">
            <h2>Categories</h2>
            <ul>
              <li>
                <a href="#">Breakfast</a>
              </li>
              <li>
                <a href="#">Lunch</a>
              </li>
              <li>
                <a href="#">Dinner</a>
              </li>
              <li>
                <a href="#">Dessert</a>
              </li>
              <li>
                <a href="#">Drink</a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h2>Social</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.x.com" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <h2>Sign up for our newsletter</h2>
        <form action="">
          <input type="email" placeholder="Your Email Address" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
