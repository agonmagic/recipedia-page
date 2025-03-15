import Card from "./Card";
import recipeData from "./recipeData";
import "./Recipe.css";

export default function Recipe() {
    return (
        <div id="recipe">
            <div id="title-recipe">
                <div className="left-text">
                    <h2>Discover, Create, Share</h2>
                    <p>Check our most popular recipe of this week</p>
                </div>
                <a href="#">See all</a>
            </div>
            <div className="cards">
                {recipeData.map((recipe, index) => (
                    <Card 
                        key={index}
                        image={recipe.image}
                        time={recipe.time}
                        servings={recipe.servings}
                        level={recipe.level}
                        title={recipe.title}
                    />
                ))}
            </div>
        </div>
    );
}
