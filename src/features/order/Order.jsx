import { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import UpdateOrder from "./UpdateOrder";
import "./Order.scss";

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    customer,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="order">
      <div className="order__status">
        <h2 className="order__status__text">Order #{id} status</h2>

        <div className="order__status__state">
          {priority && (
            <span className="order__status__priority">Priority</span>
          )}
          <span className="order__status__action">{status} order</span>
        </div>
      </div>

      <div className="order__time">
        <p className="order__time__minutes">
          {deliveryIn >= 0
            ? `${customer}, ${calcMinutesLeft(
                estimatedDelivery
              )} mins till pizza! ⌛`
            : `${customer}, pizza's here!`}
        </p>
        <p className="order__time__date">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="order__list">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="order__price">
        <p className="order__price__normal">
          Pizza price: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="order__price__priority">
            Priority price: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="order__price__total">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  console.log(order);
  return order;
}

export default Order;
