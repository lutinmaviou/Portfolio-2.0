import "./Welcome.css";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Presentation from "./Presentation/Presentation";
import Jukebox from "./Jukebox/Jukebox";

const Welcome = () => {
  return (
    <section id="welcome">
      <div id="presentation" className="flex justify-around pt-32">
        <div className="mt-20 pl-10">
          <LightSpeed left delay={1000}>
            <h1 className="md:text-7xl lg:text-9xl xl:text-10xl">HELLO</h1>
          </LightSpeed>
          <Fade delay={2000}>
            <Presentation text="My name is Bertrand, I'm a Web and Mobile Developer" />
          </Fade>
        </div>
        <div id="jukebox-wrapper">
          <Jukebox />
          <div id="shadow" className="mx-auto">
            <div id="contour">
              <button id="play">PLAY ME !</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
