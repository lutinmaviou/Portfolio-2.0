import "./Vinyl.container.css";
import Vinyl from "./Vinyl-item/Vinyl.item";
import Cover from "./Vinyl-cover/Vinyl.cover";
import SunsetCover from "../../assets/img/sunset.png";
import LpSunset from "../../assets/img/lp-sunset.png";

const VinylContainer = () => {
  const NAME = "Disque vinyle";
  return (
    <>
      <div id="disque" className="flex items-center">
        <Cover
          src={SunsetCover}
          alt="Coucher de soleil" />
        <Vinyl
          src={LpSunset}
          alt={NAME} />
      </div>
    </>
  );
};

export default VinylContainer;
