import { useNavigate } from 'react-router-dom';
import LogoSlider from '../LogoSlider/LogoSlider';
import companyData from '../../data/companyData';
import Button from '../Button/Button';
import './Hero.scss';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const init = () => {
      tl.from(containerRef.current, { ease: 'linear', autoAlpha: 0 }).to(
        containerRef.current,
        {
          ease: 'linear',
          autoAlpha: 1,
        },
      );
    };

    init();
  }, []);

  function handleClick() {
    navigate('/menu');
  }

  return (
    <div className="hero" ref={containerRef}>
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
