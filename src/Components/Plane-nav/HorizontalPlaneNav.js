import "./HorizontalPlaneNav.css";
import Plane from "../../assets/img/plane-without-propeller.png";
import Banner from "../../assets/img/plane-banner.png";
import Propeller from "../../assets/img/propeller.png";
import Fade from "react-reveal/Fade";

const PlaneNav = () => {
  return (
    <div id="flying-plane">
      <Fade right big>
        <div id="plane-container" className="flex justify-center">
          <img src={Propeller} alt="Hélice d'avion" id="propeller" />
          <img src={Plane} alt="Biplan" id="biplan" />
          <div>
            <img src={Banner} alt="Bannière" id="banner" />
            <nav
              className="flex justify-around w-3/4 text-2xl lg:text-3xl"
              id="nav"
            >
              <div id="about" className="pt-0.5">
                <a href="#about-container">À PROPOS</a>
              </div>
              <div id="portfolio" className="-mt-2">
                <a href="#portfolio-container">PORTFOLIO</a>
              </div>
              <div id="contact" className="-mt-5">
                CONTACT
              </div>
            </nav>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default PlaneNav;
