import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button>-</button>
      <span>{currentQuantity}</span>
      <button>+</button>
    </div>
  );
}

export default UpdateItemQuantity;
