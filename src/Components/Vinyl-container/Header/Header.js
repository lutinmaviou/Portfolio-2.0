import "./Header.css";
import Plane from "../../../assets/img/biplan.png";
import Banner from "../../../assets/img/banner2.png";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <header>
      <div id="plane-container" className="flex justify-center">
        <Fade right big>
          <img src={Plane} alt="Biplan" id="biplan" />
          <div id="toto">
            <img src={Banner} alt="Bannière" id="banner" />
            <div id="home">À PROPOPS</div>
            <div id="contact">CONTACT</div>
            <div id="portfolio">PORTFOLIO</div>
          </div>
        </Fade>
      </div>
      <div id="presentation" >
        <h1>HELLO</h1>
        <p>Je suis Bertrand, web developper</p>
      </div>
    </header>
  );
};

export default Header;
