import "./Newspaper.css";
import Paper from "../../../assets/img/old-paper.png";
import Header from "./Header/Header";

const Newspaper = () => {
  return (
    <div id="newspaper-container" className="my-24">
      <img src={Paper} alt="Vieux journal" id="paper" />
      <Header />
    </div>
  );
};

export default Newspaper;
