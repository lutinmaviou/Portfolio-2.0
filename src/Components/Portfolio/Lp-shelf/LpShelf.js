import React, { useState } from "react";
import "./LpShelf.css";
import LpShelfImg from "../../../assets/img/shelf3.png";
import LpContainer from "./Lp-container/LpContainer";
import SunsetCover from "../../../assets/img/sunset.png";
import P1 from "../../../assets/img/p1.png";
import P2 from "../../../assets/img/p2.png";
import P3 from "../../../assets/img/p3.png";
import P4 from "../../../assets/img/p4.png";
import P5 from "../../../assets/img/p5.png";
import Plant from "../../../assets/img/bonsai2.png";
import Flowers from "../../../assets/img/flowers.png";
import Books from "../../../assets/img/books3.png";
import Candle from "../../../assets/img/candle.png";
import Globe from "../../../assets/img/globe.png";
import GoldenFrame from "../../../assets/img/frame.png";
import LpSunset from "../../../assets/img/lp-sunset.png";
import LpP1 from "../../../assets/img/lp-p1.png";
import LpP2 from "../../../assets/img/lp-p2.png";
import LpP3 from "../../../assets/img/lp-p3.png";
import LpP4 from "../../../assets/img/lp-p4.png";
import LpP5 from "../../../assets/img/lp-p5.png";
import NextIcon from "../../../assets/img/wood-icon-next.png";
import PreviousIcon from "../../../assets/img/wood-icon-previous.png";
import YourMovies from "../../../assets/img/yourmovies.png";
import LpYourMovies from "../../../assets/img/lp-yourmovies.png";
import ApiRest from "../../../assets/img/api-rest.png";
import LpApiRest from "../../../assets/img/lp-api-rest.png";
import Cocktails from "../../../assets/img/cocktails.png";
import LpCocktails from "../../../assets/img/lp-cocktails.png";
import Leprechaun from "../../../assets/img/leprechaun.png";
import LpLeprechaun from "../../../assets/img/lp-leprechaun.png";
import ReactNative from "../../../assets/img/react-native.png";
import AwesomeSlider from "react-awesome-slider";

const LpShelf = () => {
  const BASE_URL_GITHUB = "https://github.com/lutinmaviou/";
  const [displayNextComponent, setDisplayNextComponent] = useState("false");
  const nextShelf = () => {
    const items = document.getElementsByClassName("items");
    for (let i = 0; i < items.length; i++) {
      items[i].style.animationPlayState = "running";
      setTimeout(() => {
        items[i].style.display = "none";
      }, 800);
    }
    setTimeout(() => {
      setDisplayNextComponent("true");
      for (let i = 0; i < items.length; i++) {
        items[i].style.display = "flex";
        items[i].style.animationPlayState = "paused";
      }
    }, 820);
  };

  const previousShelf = () => {
    const items = document.getElementsByClassName("items");
    for (let i = 0; i < items.length; i++) {
      items[i].style.animationPlayState = "running";
      setTimeout(() => {
        items[i].style.display = "none";
      }, 800);
    }
    setTimeout(() => {
      setDisplayNextComponent("false");
      for (let i = 0; i < items.length; i++) {
        items[i].style.display = "flex";
        items[i].style.animationPlayState = "paused";
      }
    }, 820);
  };

  return (
    <div id="lp-shelf-container">
      <img src={LpShelfImg} alt="Etagère projets" id="lp-shelf" />
      <img src={GoldenFrame} alt="Cadre mur des projets" id="frame" />
      <img src={Candle} alt="Bougie" id="candle" />
      {displayNextComponent === "false" ? (
        <>
          <LpContainer
            src={P1}
            alt="Pochette vinyle projet 1 OpenClassrooms"
            lp={LpP1}
            website="https://p1.yourwebagency.fr/"
            github={`${BASE_URL_GITHUB}oc-first-project`}
            lpNb="1"
          />
          <LpContainer
            src={P2}
            alt="Pochette vinyle projet 2 OpenClassrooms"
            lp={LpP2}
            website="https://p2.yourwebagency.fr/"
            github={`${BASE_URL_GITHUB}oc-wordpress`}
            lpNb="2"
          />
          <LpContainer
            src={P3}
            alt="Pochette vinyle projet 3 OpenClassrooms"
            lp={LpP3}
            website="https://p3.yourwebagency.fr/"
            github={`${BASE_URL_GITHUB}oc-rentabike`}
            lpNb="3"
          />
          <LpContainer
            src={P4}
            alt="Pochette vinyle projet 4 OpenClassrooms"
            lp={LpP4}
            website="https://writerblog.yourwebagency.fr/"
            github={`${BASE_URL_GITHUB}writerBlog`}
            lpNb="4"
          />
          <LpContainer
            src={P5}
            alt="Pochette vinyle projet 5 OpenClassrooms"
            lp={LpP5}
            website="https://webotek.yourwebagency.fr/"
            github={`${BASE_URL_GITHUB}webotek`}
            lpNb="5"
          />
          <img src={Globe} alt="Mappemonde" id="globe" className="items" />
          <img src={Plant} alt="Bonsai" id="bonsai" className="items" />
          <img
            src={NextIcon}
            alt="Icone suivant"
            id="next-icon"
            onClick={nextShelf}
          />
        </>
      ) : (
        <>
          <LpContainer
            src={YourMovies}
            alt="Pochette vinyle site web yourMovies"
            lp={LpYourMovies}
            website=""
            github={`${BASE_URL_GITHUB}react-movies`}
            lpNb="6"
          />
          <LpContainer
            src={ApiRest}
            alt="Pochette vinyle api rest"
            lp={LpApiRest}
            website=""
            github={`${BASE_URL_GITHUB}offers-API-RESTful`}
            lpNb="7"
          />
          <LpContainer
            src={Cocktails}
            alt="Pochette vinyle cocktails"
            lp={LpCocktails}
            website=""
            github={`${BASE_URL_GITHUB}cocktails`}
            lpNb="8"
          />
          <LpContainer
            src={Leprechaun}
            alt="Pochette vinyle lutin heureux"
            lp={LpLeprechaun}
            website="https://help.yourwebagency.fr/"
            github={`${BASE_URL_GITHUB}help-react`}
            lpNb="9"
          />
          {/* <LpContainer
            src={ReactNative}
            alt="Pochette vinyle react native"
            lp={LpLeprechaun}
            website=""
            github={`${BASE_URL_GITHUB}react-yourmovies`}
            lpNb="10"
          /> */}
          <img
            src={PreviousIcon}
            alt="Icone précédent"
            id="previous-icon"
            onClick={previousShelf}
          />
          <img
            src={Books}
            alt="Livres avec support"
            id="books"
            className="items"
          />
          <img
            src={Flowers}
            alt="Pot de fleurs rose"
            id="flowers"
            className="items"
          />
        </>
      )}
    </div>
  );
};

export default LpShelf;
