import './About.css';
import Newspaper from './Newspaper/Newspaper';
import VerticalPlane from '../Plane-nav/VerticalPlaneNav';
import Page1 from './Newspaper/Page-content/Page1';

const About = () => {
  return (
    <div id="about-container" className="mt-24 flex justify-around">
      <VerticalPlane />
      <div className="flex flex-col" id="newspaper-wrapper">
        <Newspaper pageNb="3" rotate="-rotate-2" lastPage="true" />
        <Newspaper pageNb="2" />
        <Newspaper pageNb="1" rotate="rotate-2" firstPage="true" />
      </div>
    </div>
  );
};

export default About;
