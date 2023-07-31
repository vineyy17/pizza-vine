import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../ui/Button/Button";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="addCart" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
