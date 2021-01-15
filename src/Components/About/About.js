import "./About.css";
import Byplane from "../../assets/img/byplane-vertical.png";
import Propeller from "../../assets/img/horizontal-propeller.png";
import Banner from "../../assets/img/vertical-plane-banner.png";
import TV from "../../assets/img/tv.png";

const About = () => {
  return (
    <div id="about-container" className="mt-24 flex justify-around">
      <div className="flex flex-col justify-center items-center">
        <img src={Banner} alt="" className="vertical-plane-banner pl-1.5" />
        <img src={Byplane} alt="" id="byplane-new" />
        <img src={Propeller} alt="" id="horizontal-propeller" />
      </div>
      <div className="w-3/4 mt-24 mb-24 bg-yellow-200" id="newspaper">
        <p id="test">The Story Of My Life</p>
      </div>
    </div>
  );
};

export default About;
