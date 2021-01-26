import "./LpCover.css";

const LpCover = (props) => {
  return (
    <div className="z-10 cover">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default LpCover;

