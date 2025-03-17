import star from "../assets/star.svg";
import like from "../assets/like.png";
import share from "../assets/share.png";

import "./CommCard.css";

export default function CommCard({ userimage, title, person, stars, description, image, likes }) {
    const starArray = Array.from({ length: stars }, (_, index) => index + 1);

    return(
        <div className="commcard">
            <div className="topinfo">
                <img src={userimage} alt={person} className="userimg"/>
                <div className="titlename">
                    <h1>{title}</h1>
                    <p>{person}</p>
                </div>
            </div>
            <div className="stars-desc">
                <div className="stars">
                    {starArray.map((_, index) => (
                        <img key={index} src={star} alt="star" className="star" />
                    ))}
                </div>
                <p>{description}</p>
            </div>
            <img src={image} alt={title} className="food" />
            <div className="bottom-buttons">
                <span>
                    <img src={like} alt="Like Button" />
                    <p>{likes}</p>
                </span>
                <span>
                    <img src={share} alt="Share Button" />
                    <p>Share</p>
                </span>
            </div>
        </div>
    );
}