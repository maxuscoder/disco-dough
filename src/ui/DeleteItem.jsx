import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { deleteItem } from "./cartSlice";
import PropTypes from "prop-types";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="" onClick={() => dispatch(deleteItem(pizzaId))}>
      ❌
    </Button>
  );
}

DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};

export default DeleteItem;
