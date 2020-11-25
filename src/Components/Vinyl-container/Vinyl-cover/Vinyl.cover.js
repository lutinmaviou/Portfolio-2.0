import "./Vinyl.cover.css";

const Cover = (props) => {
  console.log(props.src);
  return (
    <div className="z-10 cover">
      <img src={props.src} alt="" />
    </div>
  );
};

export default Cover;

