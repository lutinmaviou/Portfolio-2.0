import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Presentation from "./Presentation/Presentation";
import Radio from "./Radio/Radio";
import Window from "./Window/Window";
import "react-h5-audio-player/lib/styles.css";
import "./Welcome.css";
import AudioPlayer from "./Audio-player/AudioPlayer";
import PlayButton from "./Play-button/PlayButton";
import Shelf from "./Shelf/Shelf";
import MusicFrame from "./Music-frame/MusicFrame";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAudioPlayer: false,
      shakeRadio: false,
    };
  }

  handleDisplayAudioPlayer = () => {
    const radio = document.getElementById("radio");
    this.setState({ displayAudioPlayer: true, shakeRadio: true }, () => {
      if (this.state.shakeRadio === true) {
        radio.style.animationPlayState = "running";
      }
    });
  };

  pauseShakeRadio = (e) => {
    const radio = document.getElementById("radio");
    this.setState({ shakeRadio: false }, () => {
      if (this.state.shakeRadio === false) {
        radio.style.animationPlayState = "paused";
      }
    });
  };

  playShakeRadio = (e) => {
    const radio = document.getElementById("radio");
    this.setState({ shakeRadio: true }, () => {
      if (this.state.shakeRadio === true) {
        radio.style.animationPlayState = "running";
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
                <Presentation text="My name is Bertrand, I'm a Web and Mobile Developer" />
            </div>
            <div className="flex flex-col -mt-10">
              <Window />
              <Shelf />
              <div className="flex justify-around -mt-56">
                <Radio />
                <MusicFrame />
              </div>
              {this.state.displayAudioPlayer === false ? (
                <PlayButton
                  handleDisplayAudioPlayer={this.handleDisplayAudioPlayer}
                />
              ) : (
                <AudioPlayer
                  pauseShakeRadio={this.pauseShakeRadio}
                  playShakeRadio={this.playShakeRadio}
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
