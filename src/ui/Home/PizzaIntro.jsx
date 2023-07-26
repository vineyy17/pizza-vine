import "./PizzaIntro.scss";

function PizzaIntro() {
  return (
    <div className="pizzaDiv">
      <div className="pizzaIntro">
        <div className="pizzaIntro__header" data-animation="header">
          <h1 className="pizzaIntro__header__title">
            PASSIONATE THROUGH EVERY SLICE
          </h1>
        </div>

        <div className="pizzaIntro__text" data-animation="paragraph">
          <p pizzaIntro__text__paragraph>
            It's what drives us to craft, create, innovate, top, bake, and
            elevate the ordinary pizza - on a journey to redefine flavors for a
            new generation.
          </p>
        </div>

        <div className="pizzaIntro__picture">
          <div className="pizzaIntro__photo">
            <img
              className="pizzaIntro__photo__img"
              src="../../../public/images/features/pexels-nataliya-vaitkevich-5792328-removebg-preview.png"
              alt="sliced pizza"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaIntro;
