import "./Header.css";
import FingerLeft from "../../../../assets/img/finger-left.png";
import FingerRight from "../../../../assets/img/finger-right.png";

const Header = () => {
  return (
    <div id="title-container" className="flex flex-col justify-center">
      <div className="flex justify-around">
        <img
          src={FingerLeft}
          alt="Doigt pointé vers la droite"
          className="finger"
        />
        <p id="title" className="text-center mt-8 louisa-cp">
          The Story
        </p>
        <img
          src={FingerRight}
          alt="Doigt pointé vers la gauche"
          className="finger"
        />
      </div>
      <div className="flex justify-around text-2xl border-black border-t-2 border-b-2 old-newspaper -ml-4 -mt-2">
        <span>12/12/12</span>
        <span>SPECIAL EDITION</span>
        <span>N°1</span>
      </div>
    </div>
  );
};

export default Header;
