import LinkButton from "../../ui/LinkButton/LinkButton";
import "./EmptyCart.scss";

function EmptyCart() {
  return (
    <div className="emptyCart">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="emptyCart__text">
        Your cart is empty. Don't wait! Grab some pizzas! 😉
      </p>
    </div>
  );
}

export default EmptyCart;
