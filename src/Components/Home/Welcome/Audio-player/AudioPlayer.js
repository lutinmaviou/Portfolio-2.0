import "./AudioPlayer.css";
import Music from "../../../../assets/music/playlist.mp3";
import RHAP from "react-h5-audio-player";

const AudioPlayer = (props) => {
  return (
    <div id="player" className="mt-8">
      <RHAP
        id="toto"
        src={Music}
        showJumpControls={false}
        loop
        autoPlay={true}
        volume={0.1}
        onPause={props.pauseShakeJukebox}
        onPlay={props.playShakeJukebox}
      />
    </div>
  );
};

export default AudioPlayer;
