import "./Hero.scss";

function Hero() {
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
            <button className="nav__button c-button c-button--big">
              <span className="c-link">
                <span className="c-link__inner">
                  <span>Order now</span>
                  <span className="c-link__animated">Order now</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="hero__photo">
        <img
          className="hero__photo__img"
          src="../../../public/images/delicious-italian-food-removebg-preview.png"
          alt="hero pizza"
        />
      </div>
    </div>
  );
}

export default Hero;
