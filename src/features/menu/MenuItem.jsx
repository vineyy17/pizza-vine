import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import Button from "../../ui/Button/Button";
import "./MenuItem.scss";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

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

          {isInCart && (
            <div className="menuList__details__update">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="addCart" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
