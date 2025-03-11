import heroImg from "../assets/hero-img.png";

import "./Home.css";

export default function Home() {
  return (
    <div id="home">
      <div className="left">
        <div className="text">
          <h1 className="title">
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </h1>
          <p className="subtitle">
            Discover more than <span>10,000 recipes</span> in your hand with the
            best recipe. Help you to find the easiest way to cook.
          </p>
        </div>
        <a href="#recipe" id="recipe-button">
          Explore Recipes
        </a>
      </div>

      <img src={heroImg} alt="Hero Image" />
    </div>
  );
}
