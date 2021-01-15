import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Presentation from "./Presentation/Presentation";
import Jukebox from "./Jukebox/Jukebox";
import "react-h5-audio-player/lib/styles.css";
import "./Welcome.css";
import AudioPlayer from "./Audio-player/AudioPlayer";
import PlayButton from "./Play-button/PlayButton";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAudioPlayer: false,
    };
  }

  handleDisplayAudioPlayer = () => {
    this.setState({ displayAudioPlayer: true });
  };

  render() {
    return (
      <Fade bottom>
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
            {console.log(this.state)}
            <div id="jukebox-wrapper" className="flex flex-col items-center">
              <Jukebox />
              {this.state.displayAudioPlayer === false ? (
                <>
                  <span className="ironick text-4xl">Pour une navigation en musique :</span>
                  <PlayButton
                    handleDisplayAudioPlayer={this.handleDisplayAudioPlayer}
                  />
                </>
              ) : (
                <AudioPlayer />
              )}
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}

export default Welcome;
