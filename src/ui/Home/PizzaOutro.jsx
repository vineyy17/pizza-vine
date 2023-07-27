import "./PizzaIntro.scss";

function PizzaOutro() {
  return (
    <div className="pizzaDiv">
      <div className="pizzaIntro pizzaIntro--beige">
        <div className="pizzaIntro__header" data-animation="header">
          <h1 className="pizzaIntro__header__title">
            NOURISHING SOULS WITH PLANT-BASED DELIGHTS
          </h1>
        </div>

        <div className="pizzaIntro__text" data-animation="paragraph">
          <p pizzaIntro__text__paragraph>
            We’re here to spark joy and entice all to savor more greens. Because
            we cherish the future – yours, ours, and the planet's.
          </p>
        </div>

        <div className="pizzaIntro__picture">
          <div className="pizzaIntro__photo">
            <img
              className="pizzaIntro__photo__img"
              src="../../../public/images/features/vegetarian-pizza-with-zucchini-tomato-peppers-mushrooms-removebg-preview.png"
              alt="sliced pizza"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaOutro;
