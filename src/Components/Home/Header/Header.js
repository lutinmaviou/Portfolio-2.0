import './Header.css';
import PlaneNav from "../../Plane-nav/HorizontalPlaneNav";
import Clouds from "./Sky/Clouds";
import Sky from "./Sky/Sky";

const Header = () => {
  return (
    <header>
      <Sky />
      <Clouds />
      <PlaneNav />
    </header>
  );
};

export default Header;
