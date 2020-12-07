import './PlaneNav.css';
import Plane from "../../../../assets/img/biplan.png";
import Banner from "../../../../assets/img/banner2.png";
import Fade from "react-reveal/Fade";

const PlaneNav = () => {
  return (
    <div id="flying-plane">
      <Fade right big>
        <div id="plane-container" className="flex justify-center">
          <img src={Plane} alt="Biplan" id="biplan" />
          <div>
            <img src={Banner} alt="Bannière" id="banner" />
            <nav
              className="flex justify-around w-3/4 text-2xl lg:text-3xl"
              id="nav"
            >
              <div id="about" className="pt-0.5">
                À PROPOS
              </div>
              <div id="portfolio" className="-mt-2">
                PORTFOLIO
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
