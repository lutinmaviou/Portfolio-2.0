import './Jukebox.css';
import JukeboxImg from '../../../../assets/img/jukebox.png';

const Jukebox = () => {
    return(
        <div className="jukeBox mt-10">
          <img src={JukeboxImg} alt="Jukebox" id="jukebox" />
        </div>
    )
}

export default Jukebox;