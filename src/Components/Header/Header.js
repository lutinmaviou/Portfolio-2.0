import "./Header.css";
import Plane from "../../assets/img/biplan.png";
import Banner from "../../assets/img/banner2.png";
import Jukebox from "../../assets/img/jukebox.png";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Presentation from "./Presentation/Presentation";
import Pres from "./Pres/Pres";

const Header = () => {
  return (
    <header>
      <Fade right big>
        <div id="plane-container" className="flex justify-center">
          <img src={Plane} alt="Biplan" id="biplan" />
          <div>
            <img src={Banner} alt="Bannière" id="banner" />
            <div
              className="flex justify-around w-3/4 text-2xl lg:text-3xl"
              id="nav"
            >
              <div id="about" className="pt-0.5">
                À PROPOS
              </div>
              <div id="portfolio" className="-mt-2">
                PORTFOLIO
              </div>
              <div id="contact" className="-mt-4">
                CONTACT
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div id="presentation" className="flex justify-between">
        <div>
          <LightSpeed left delay={1000}>
            <h1>HELLO</h1>
          </LightSpeed>
          <Fade delay={2000}>
            <Pres text="My name is Bertrand, I'm a Web and Mobile Developer" />
          </Fade>
        </div>
        <div className="jukeBox">
          <img src={Jukebox} alt="Jukebox" id="jukebox" />
        </div>
      </div>
    </header>
  );
};

export default Header;
