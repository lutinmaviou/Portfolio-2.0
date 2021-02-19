import "./Portfolio.css";
import LpShelf from "./Lp-shelf/LpShelf";
import VerticalPlaneNav from "../Plane-nav/VerticalPlaneNav";

const Portfolio = () => {
  return (
    <div id="portfolio-container" className="flex justify-around items-center">
      <VerticalPlaneNav />
      <LpShelf />
    </div>
  );
};

export default Portfolio;
