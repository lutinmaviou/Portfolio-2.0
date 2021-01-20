import "./About.css";
import Byplane from "../../assets/img/byplane-vertical.png";
import Propeller from "../../assets/img/horizontal-propeller.png";
import Banner from "../../assets/img/vertical-plane-banner.png";
import Newspaper from "./Newspaper/Newspaper";

const About = () => {
  return (
    <div id="about-container" className="mt-24 flex justify-around">
      <div className="flex flex-col justify-center items-center">
        <img src={Banner} alt="" className="vertical-plane-banner pl-1.5" />
        <img src={Byplane} alt="" id="byplane-new" />
        <img src={Propeller} alt="" id="horizontal-propeller" />
      </div>
      <div className="flex flex-col">
        <Newspaper pageNb="3" rotate="-rotate-2" lastPage="true" />
        <Newspaper pageNb="2" top="100" />
        <Newspaper pageNb="1" top="200" rotate="rotate-2" firstPage="true" />
      </div>
    </div>
  );
};

export default About;
