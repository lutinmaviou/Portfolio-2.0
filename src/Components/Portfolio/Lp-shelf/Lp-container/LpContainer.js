import "./LpContainer.css";
import LpCover from "./Lp-cover/LpCover";
import LpItem from "./Lp-item/LpItem";

const LpContainer = (props) => {
  const NAME = "Disque vinyle";
  return (
    <>
      <div id="lp-cover" className={`flex items-center lp-${props.lpNb} items`}>
        <LpCover
          src={props.src}
          alt={props.alt} />
        <LpItem
          src={props.lp}
          alt={NAME}
          website={props.website}
          github={props.github} />
      </div>
    </>
  );
};

export default LpContainer;
