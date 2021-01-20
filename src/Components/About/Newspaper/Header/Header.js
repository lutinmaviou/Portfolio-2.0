import "./Header.css";
import Paparazzi from "../../../../assets/img/paparazzi.png";
import LimitedEdition from "../../../../assets/img/limited-edition.png";

const Header = () => {
  return (
    <div id="title-container" className="flex flex-col mt-4">
      <div className="flex justify-between">
        <img
          src={Paparazzi}
          alt="Paparazzi"
          className="logo mt-6"
        />
        <p id="title" className="text-center mt-2 -ml-8 louisa-cp">
          The Story
        </p>
        <img
          src={LimitedEdition}
          alt="Paparazzi"
          className="logo mt-8"
        />
      </div>
      <div className="flex justify-around text-2xl border-black border-t-2 border-b-2 old-newspaper -mt-2">
        <span>6201Z</span>
        <span className="ml-2">Mercredi 20 janvier 2021</span>
        <span>N°1</span>
      </div>
    </div>
  );
};

export default Header;
