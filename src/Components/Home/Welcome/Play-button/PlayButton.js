import "./PlayButton.css";

const PlayButton = (props) => {
  return (
    <div id="shadow" className="mt-6">
      <div id="contour">
        <button id="play" onClick={props.handleDisplayAudioPlayer}>PLAY ME !</button>
      </div>
    </div>
  );
};

export default PlayButton;
