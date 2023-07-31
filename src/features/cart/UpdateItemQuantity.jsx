import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import "./UpdateItemQuantity.scss";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="itemQuantity">
      <button>-</button>
      <span className="itemQuantity__qty">{currentQuantity}</span>
      <button>+</button>
    </div>
  );
}

export default UpdateItemQuantity;
