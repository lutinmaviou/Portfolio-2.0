import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Presentation from "./Presentation/Presentation";
import Jukebox from "./Jukebox/Jukebox";
import "react-h5-audio-player/lib/styles.css";
import "./Welcome.css";
import AudioPlayer from "./Audio-player/AudioPlayer";
import PlayButton from "./Play-button/PlayButton";
import { queryByTestId } from "@testing-library/react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAudioPlayer: false,
      handleShakeJukebox: false,
    };
  }

  handleDisplayAudioPlayer = () => {
    const jukebox = document.getElementById("jukebox");
    this.setState(
      { displayAudioPlayer: true, handleShakeJukebox: true },
      () => {
        if (this.state.handleShakeJukebox === true) {
          jukebox.style.animationPlayState = "running";
        }
        console.log(this.state.handleShakeJukebox);
      }
    );
  };

  playShakeJukebox = (e) => {
    const jukebox = document.getElementById("jukebox");
    this.setState({ handleShakeJukebox: true }, () => {
      if (this.state.handleShakeJukebox === true) {
        jukebox.style.animationPlayState = "running";
      }
    });
  };

  pauseShakeJukebox = (e) => {
    const jukebox = document.getElementById("jukebox");
    this.setState({ handleShakeJukebox: false }, () => {
      if (this.state.handleShakeJukebox === false) {
        jukebox.style.animationPlayState = "paused";
      }
    });
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
            <div id="jukebox-wrapper" className="flex flex-col items-center">
              <Jukebox />
              {this.state.displayAudioPlayer === false ? (
                <>
                  <span className="ironick text-4xl">
                    Pour une navigation en musique :
                  </span>
                  <PlayButton
                    handleDisplayAudioPlayer={this.handleDisplayAudioPlayer}
                  />
                </>
              ) : (
                <AudioPlayer
                  pauseShakeJukebox={this.pauseShakeJukebox}
                  playShakeJukebox={this.playShakeJukebox}
                />
              )}
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}

export default Welcome;
