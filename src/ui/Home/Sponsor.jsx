import "./Hero.scss";
import "./Sponsor.scss";
import LogoSlider from "../LogoSlider/LogoSlider";
import companyData from "../../data/companyData";

function Sponsor() {
  return (
    <div className="sponsor">
      <div className="hero__slider">
        <LogoSlider companyContents={companyData} />
      </div>
    </div>
  );
}

export default Sponsor;
