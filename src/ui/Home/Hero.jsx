import "./Hero.scss";
import LogoSlider from "../LogoSlider/LogoSlider";
import companyData from "../../data/companyData";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/menu");
  }

  return (
    <div className="hero">
      <div className="hero__feature">
        <div className="hero__feature__wrapper">
          <h1 className="hero__feature__header" data-animation="header">
            PIZZA PERFECTION YOU'LL CRAVE
          </h1>
          <p className="hero__feature__paragraph" data-animation="paragraph">
            Irresistible crust. Mouthwatering toppings. Savory indulgence in
            every bite.
          </p>

          <div className="hero__feature__button">
            <Button type="order" onClick={handleClick}>
              Order now
            </Button>
          </div>
        </div>
      </div>

      <div className="hero__photo">
        <img
          className="hero__photo__img"
          src="../../../images/hero/delicious-italian-food-removebg-preview-min.png"
          alt="hero pizza"
        />
      </div>

      <div className="hero__slider">
        <LogoSlider companyContents={companyData} />
      </div>
    </div>
  );
}

export default Hero;
