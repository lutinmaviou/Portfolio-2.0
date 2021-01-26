import "./MusicFrame.css";
import MusicFrameImg from "../../../../assets/img/frame5.png";

const MusicFrame = () => {
  return (
    <img
      src={MusicFrameImg}
      alt="Cadre photo"
      id="music-frame"
      className="-ml-20 mb-6"
    />
  );
};

export default MusicFrame;
