import "./Vinyl.container.css";
import Vinyl from "./Vinyl-item/Vinyl.item";
import Cover from "./Vinyl-cover/Vinyl.cover";

const VinylContainer = (props) => {
  const NAME = "Disque vinyle";
  return (
    <>
      <div id="lp-cover" className={`flex items-center top-${props.top} left-${props.left}`}>
        <Cover
          src={props.src}
          alt={props.alt} />
        <Vinyl
          src={props.img}
          alt={NAME}
          website={props.website}
          github={props.github} />
      </div>
    </>
  );
};

export default VinylContainer;
