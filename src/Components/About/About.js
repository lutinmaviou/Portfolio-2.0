import "./About.css";
import Newspaper from "./Newspaper/Newspaper";
import VerticalPlane from "../Plane-nav/VerticalPlaneNav";

const About = () => {
  return (
    <div id="about-container" className="mt-24 flex justify-around">
      <VerticalPlane />
      <div className="flex flex-col">
        <Newspaper pageNb="3" rotate="-rotate-2" lastPage="true" />
        <Newspaper pageNb="2" />
        <Newspaper pageNb="1" rotate="rotate-2" firstPage="true" />
      </div>
    </div>
  );
};

export default About;
