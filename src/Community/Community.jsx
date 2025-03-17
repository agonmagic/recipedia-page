import CommCard from "./CommCard";
import cardData from "./cardData";

import "./Community.css";

export default function Community() {
    return(
        <div id="community">
            <h1 className="comm-title">From Our Community</h1>
            <div className="comm-cards">
                {cardData.map((comm, index) => (
                    <CommCard 
                        key={index}
                        userimage={comm.userimage}
                        title={comm.title}
                        person={comm.person}
                        stars={comm.stars}
                        description={comm.description}
                        image={comm.image}
                        likes={comm.likes}
                    />
                ))}
            </div>
        </div>
    );
}