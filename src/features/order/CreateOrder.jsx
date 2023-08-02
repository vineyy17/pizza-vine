import { useState } from "react";
import { useSelector } from "react-redux";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import "./CreateOrder.scss";
import "../../styles/shared/_input.scss";
import Button from "../../ui/Button/Button";
import { createOrder } from "../../services/apiRestaurant";
import store from "../../store";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="orderForm">
      <h2 className="orderForm__text">Ready to place an order? Let's go!</h2>

      <Form method="POST">
        <div className="orderForm__nameInput">
          <label className="orderForm__nameInput__label">First Name</label>
          <input
            className="input input--order"
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="orderForm__nameInput">
          <label className="orderForm__nameInput__label">Telephone</label>
          <div className="orderForm__nameInput__div">
            <input
              className="input input--order"
              type="tel"
              name="phone"
              required
            />
            {formErrors?.phone && (
              <p className="orderForm__nameInput__error">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className="orderForm__nameInput">
          <label className="orderForm__nameInput__label">Address</label>
          <div className="orderForm__nameInput__div">
            <input
              className="input input--order"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="orderForm__checkbox">
          <input
            className="orderForm__checkbox__input"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Looking to prioritize your order?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <Button disabled={isSubmitting} type="addCart">
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please enter a correct phone number. We will need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  // Do not overuse
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
