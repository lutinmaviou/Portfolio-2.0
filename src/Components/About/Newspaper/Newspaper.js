import "./Newspaper.css";
import Paper from "../../../assets/img/old-paper.png";
import Header from "./Header/Header";

const Newspaper = (props) => {
  console.log(props.rotate);
  return (
    <div id="newspaper-container" className={`my-24 -top-${props.top} transform ${props.rotate}`}>
      <img src={Paper} alt="Vieux journal"/>
      <Header />
    </div>
  );
};

export default Newspaper;
