import "./PizzaIntro.scss";

function PizzaOutro() {
  return (
    <div className="pizzaDiv pizzaDiv--beige">
      <div className="pizzaIntro">
        <div className="pizzaIntro__header" data-animation="header">
          <h1 className="pizzaIntro__header__title">
            TASTEFUL DELIGHTS FOR ALL PALATES
          </h1>
        </div>

        <div className="pizzaIntro__text">
          <p className="pizzaIntro__text__paragraph" data-animation="paragraph">
            Our mouthwatering recipes cater to vegans and meat-eaters alike.
            Because plant-based doesn't mean compromising on flavor.
          </p>
        </div>

        <div className="pizzaIntro__picture">
          <div className="pizzaIntro__photo">
            <img
              className="pizzaIntro__photo__img"
              src="../../../public/images/features/tasty-top-view-sliced-pizza-italian-traditional-round-pizza-min-removebg-preview.png"
              alt="sliced pizza"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaOutro;
