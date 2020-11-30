import "./Header.css";
import Plane from "../../assets/img/biplan.png";
import Banner from "../../assets/img/banner2.png";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

const Header = () => {
  return (
    <header>
      <div id="plane-container" className="flex justify-center">
        <img src={Plane} alt="Biplan" id="biplan" />
        <div>
          <img src={Banner} alt="Bannière" id="banner" />
          <div className="flex justify-around w-3/4 text-2xl lg:text-3xl" id="nav">
            <div id="about" className="pt-0.5">
              À PROPOS
            </div>
            <div id="portfolio" className="-mt-2">PORTFOLIO</div>
            <div id="contact" className="-mt-4">
              CONTACT
            </div>
          </div>
        </div>
      </div>
      <div id="presentation">
        <h1>HELLO</h1>
        <p>Je suis Bertrand, web developper</p>
      </div>
    </header>
  );
};

export default Header;
