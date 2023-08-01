import { formatCurrency } from "../../utils/helpers";
import "./OrderItem.scss";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="orderItem">
      <div className="orderItem__details">
        <p>
          <span className="orderItem__details__qty">{quantity}&times;</span>{" "}
          {name}
        </p>
        <p className="orderItem__details__price">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <p className="orderItem__details__ingredients">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
