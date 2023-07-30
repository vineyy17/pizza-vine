import { formatCurrency } from "../../utils/helpers";
import "./MenuItem.scss";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className="menuList">
      <img
        className={`menuList__image ${
          soldOut ? "menuList__image--soldOut" : ""
        }`}
        src={imageUrl}
        alt={name}
      />
      <div className="menuList__details">
        <p className="menuList__details__name">{name}</p>
        <p className="menuList__details__ingredients">
          {ingredients.join(", ")}
        </p>
        <div className="menuList__details__priceDiv">
          {!soldOut ? (
            <p className="menuList__details__price">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="menuList__details__soldOut">Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
