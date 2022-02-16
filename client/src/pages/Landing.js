import React from "react";
import earth from "../assets/HomeEarth.png"

const Landing = () => {
    return(
    <div className="landing">
        <div className="landingP">
            <p>Welcome to a place where you can find those unique places that you want to see when you are traveling somewhere new!<br/> Here you can get recomendations from fellow travelers about their favorite, or not so favorite, places to stop!<br/> You can also share your own experiences and tell everyone about your top spots to visit in your favorite destinations!</p>
        </div>
        <div >
             <img src={earth} alt="3-D earth" className="earth"/>
        </div>
    </div>
    );
};

export default Landing;