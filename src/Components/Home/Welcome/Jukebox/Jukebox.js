import './Jukebox.css';
import JukeboxImg from '../../../../assets/img/jukebox.png';

const Jukebox = () => {
    return(
        <div className="jukeBox">
          <img src={JukeboxImg} alt="Jukebox" id="jukebox" />
        </div>
    )
}

export default Jukebox;