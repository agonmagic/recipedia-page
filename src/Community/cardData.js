import Food1 from "../assets/CommunityPics/Comm1.png";
import Food2 from "../assets/CommunityPics/Comm2.png";
import Food3 from "../assets/CommunityPics/Comm3.png";
import Food4 from "../assets/CommunityPics/Comm4.png";

const person1 = "https://randomuser.me/api/portraits/women/3.jpg";
const person2 = "https://randomuser.me/api/portraits/women/91.jpg";
const person3 = "https://randomuser.me/api/portraits/women/0.jpg";
const person4 = "https://randomuser.me/api/portraits/women/94.jpg";

const cardData = [
    {
        userimage: person1,
        title: "Spaghetti Bolognese",
        person: "Lady Rudy",
        stars: 5,
        description: "I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.",
        image: Food1,
        likes: 2
    },
    {
        userimage: person2,
        title: "Roasted Chicken",
        person: "Emily Rose",
        stars: 5,
        description: "I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow",
        image: Food2,
        likes: 5
    },
    {
        userimage: person3,
        title: "Vegetable Pot Pie",
        person: "Susan H",
        stars: 5,
        description: "I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations.",
        image: Food3,
        likes: 3
    },
    {
        userimage: person4,
        title: "Fresh Garden Salad",
        person: "Lilac Laura",
        stars: 5,
        description: "I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level.",
        image: Food4,
        likes: 1
    }
];

export default cardData;