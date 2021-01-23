import "./Vinyl.container.css";
import Vinyl from "./Vinyl-item/Vinyl.item";
import Cover from "./Vinyl-cover/Vinyl.cover";
import LpSunset from "../../../../assets/img/lp-sunset.png";

const VinylContainer = (props) => {
  console.log(props.alt);
  const NAME = "Disque vinyle";
  return (
    <>
      <div id="lp-cover" className={`flex items-center top-${props.top} left-${props.left}`}>
        <Cover
          src={props.src}
          alt={props.alt} />
        <Vinyl
          src={LpSunset}
          alt={NAME} />
      </div>
    </>
  );
};

export default VinylContainer;
