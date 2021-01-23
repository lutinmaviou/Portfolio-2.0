import "./VerticalPlaneNav.css";
import Byplane from "../../assets/img/byplane-vertical.png";
import Propeller from "../../assets/img/horizontal-propeller.png";
import Banner from "../../assets/img/vertical-plane-banner.png";

const VerticalPlane = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={Banner} alt="" className="vertical-plane-banner pl-1.5" />
      <img src={Byplane} alt="" id="byplane-new" />
      <img src={Propeller} alt="" id="horizontal-propeller" />
    </div>
  );
};

export default VerticalPlane;
