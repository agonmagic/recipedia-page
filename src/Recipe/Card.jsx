import "./Card.css";

import clockIcon from "../assets/cardIcons/Clock.png";
import servingsIcon from "../assets/cardIcons/Servings.png";
import levelIcon from "../assets/cardIcons/Level.png";
const iconSize = 15;

export default function Card({ image, time, servings, level, title }) {
  return (
    <div className="card">
      <div className="recipe-top">
        {image ? <img src={image} alt={title} /> : null}
        <div className="recipe-text">
          <div className="text-part">
            <img src={clockIcon} alt="Time Icon" className="icon" width={iconSize}/>
            <p>{time}</p>
          </div>
          <div className="text-part">
            <img src={servingsIcon} alt="Person Icon" className="icon" width={iconSize} />
            <p>{servings}</p>
          </div>
          <div className="text-part">
            <img src={levelIcon} alt="Level Icon" className="icon" width={iconSize} />
            <p>{level}</p>
          </div>
        </div>
      </div>
      <div className="recipe-down">
        <h3>{title}</h3>
        <a href="#">View Recipe</a>
      </div>
    </div>
  );
}
