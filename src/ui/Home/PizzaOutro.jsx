import "./PizzaIntro.scss";

function PizzaOutro() {
  return (
    <div className="pizzaDiv">
      <div className="pizzaIntro pizzoIntro--beige">
        <div
          className="pizzaIntro__header pizzaIntro__header--beige"
          data-animation="header"
        >
          <h1 className="pizzaIntro__header__title">
            TASTEFUL DELIGHTS FOR ALL PALATES
          </h1>
        </div>

        <div
          className="pizzaIntro__text pizzaIntro__text--beige"
          data-animation="paragraph"
        >
          <p pizzaIntro__text__paragraph>
            Our mouthwatering recipes cater to vegans and meat-eaters alike.
            Because plant-based doesn't mean compromising on flavor.
          </p>
        </div>

        <div className="pizzaIntro__picture pizzaIntro__picture--beige">
          <div className="pizzaIntro__photo">
            <img
              className="pizzaIntro__photo__img"
              src="../../../public/images/features/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view-removebg-preview (1).png"
              alt="sliced pizza"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaOutro;
