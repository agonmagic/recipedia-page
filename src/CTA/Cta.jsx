import appStore from "../assets/AppStore.png";
import playStore from "../assets/PlayStore.png";
import iphoneImg from "../assets/iphonepic.png";

import "./Cta.css";

export default function Cta() {
    return(
        <div id="cta">
            <h1>
                Embrace the joy of cooking with get it on your iPhone or Android <br />
                Your kitchen adventure begins now!
            </h1>
            <div className="app-buttons">
                <a href="#"><img src={appStore} alt="App Store Button" /></a>
                <a href="#"><img src={playStore} alt="Play Store Button" /></a>
            </div>
            <img src={iphoneImg} alt="iPhone" className="iph"/>
        </div>
    );
}