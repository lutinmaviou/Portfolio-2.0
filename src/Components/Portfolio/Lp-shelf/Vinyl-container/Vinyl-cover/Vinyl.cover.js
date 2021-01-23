import "./Vinyl.cover.css";

const Cover = (props) => {
  return (
    <div className="z-10 cover">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Cover;

