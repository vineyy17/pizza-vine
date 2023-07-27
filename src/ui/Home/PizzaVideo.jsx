import "./PizzaVideo.scss";

function PizzaVideo() {
  return (
    <div className="pizzaVideo">
      <div className="pizzaVideo__video">
        <video className="pizzaVideo__video__content" autoPlay loop muted>
          <source src="../../../public/images/videos/production_id_4266804 (2160p) (1).mp4" />
          Your browser is not supported!
        </video>
      </div>

      <div className="pizzaVideo__text">
        <h1 className="pizzaVideo__text__header" data-animation="header">
          Express Delivery
        </h1>
        <p className="pizzaVideo__text__paragraph" data-animation="paragraph">
          Hot Pizzas, Quick to Your Doorstep!
        </p>
      </div>
    </div>
  );
}

export default PizzaVideo;
