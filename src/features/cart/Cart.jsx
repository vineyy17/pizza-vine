import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import LinkButton from "../../ui/LinkButton/LinkButton";
import CartItem from "./CartItem";
import "./Cart.scss";
import Button from "../../ui/Button/Button";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="cart">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="cart__text">Your cart,</h2>

      <ul className="cart__list">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="cart__action">
        <Button to="/order/new" type="addCart">
          Order pizzas
        </Button>

        <Button type="addCart" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
