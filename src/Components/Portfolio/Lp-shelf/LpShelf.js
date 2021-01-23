import "./LpShelf.css";
import LpShelfImg from "../../../assets/img/shelf3.png";
import VinylContainer from "./Vinyl-container/Vinyl.container";
import SunsetCover from "../../../assets/img/sunset.png";
import P1 from "../../../assets/img/p1.png";
import P2 from "../../../assets/img/p2.png";
import P3 from "../../../assets/img/p3.png";
import P4 from "../../../assets/img/p4.png";
import P5 from "../../../assets/img/p5.png";
import Plant from "../../../assets/img/bonsai2.png";
import Books from "../../../assets/img/books2.png";
import BooksSupport from "../../../assets/img/books-support.png";
import Candle from "../../../assets/img/candle.png";
import Globe from "../../../assets/img/globe.png";
import GoldenFrame from "../../../assets/img/frame.png";

const LpShelf = () => {
  return (
    <div id="lp-shelf-container">
      <img src={LpShelfImg} alt="Etagère projets" id="lp-shelf" />
      <VinylContainer
        src={P1}
        alt="Pochette vinyle projet 1 OpenClassrooms"
        top="20"
        left="80"
      />
      <img src={Plant} alt="Plante" id="plant" />
      <VinylContainer
        src={P2}
        alt="Pochette vinyle projet 2 OpenClassrooms"
        top="20"
        left="60"
      />
      <VinylContainer
        src={P3}
        alt="Pochette vinyle projet 3 OpenClassrooms"
        top="80"
        left="60"
      />
      <VinylContainer
        src={P4}
        alt="Pochette vinyle projet 4 OpenClassrooms"
        top="34"
        left="96"
      />
      <VinylContainer
        src={P5}
        alt="Pochette vinyle projet 5 OpenClassrooms"
        top="34"
        left="40"
      />
      <img src={Globe} alt="Mappemonde" id="globe"/>
      <img src={GoldenFrame} alt="Cadre mur des projets" id="frame"/>
      <img src={Candle} alt="Bougie" id="candle" />
    </div>
  );
};

export default LpShelf;
