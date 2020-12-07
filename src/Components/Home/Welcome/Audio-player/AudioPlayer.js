import './AudioPlayer.css';
import Music from "../../../../assets/music/playlist.mp3";
import RHAP from "react-h5-audio-player";

const AudioPlayer = () => {
    return(
        <div id="player">
              <RHAP
                src={Music}
                showJumpControls={false}
                loop
              />
            </div>
    )
}

export default AudioPlayer;