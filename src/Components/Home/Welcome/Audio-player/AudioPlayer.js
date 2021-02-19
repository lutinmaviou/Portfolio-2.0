import "./AudioPlayer.css";
import Music from "../../../../assets/music/playlist.mp3";
import RHAP from "react-h5-audio-player";

const AudioPlayer = (props) => {
  return (
    <div id="player">
      <RHAP
        id="toto"
        src={Music}
        showJumpControls={false}
        loop
        autoPlay={true}
        volume={0.3}
        onPause={props.pauseShakeRadio}
        onPlay={props.playShakeRadio}
      />
    </div>
  );
};

export default AudioPlayer;
