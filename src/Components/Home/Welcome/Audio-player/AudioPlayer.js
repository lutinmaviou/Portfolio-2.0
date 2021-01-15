import "./AudioPlayer.css";
import Music from "../../../../assets/music/playlist.mp3";
import RHAP from "react-h5-audio-player";

const AudioPlayer = () => {
  return (
    <div id="player" className="mt-8">
      <RHAP
        src={Music}
        showJumpControls={false}
        loop
        autoPlay={true}
        volume={0.3}
      />
    </div>
  );
};

export default AudioPlayer;
