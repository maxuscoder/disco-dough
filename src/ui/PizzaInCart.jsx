import PropTypes from "prop-types";
import { formatCurrency } from "../utilities/helpers";

function PizzaItemCart({ pizza }) {
  const { id, name, unitPrice, ingredients, imageUrl, quantity } = pizza;
  return (
    <div className="p-5 flex gap-5">
      <img src={imageUrl} className="w-[70px]" alt="pizza"></img>
      <p className="flex justify-between items-center w-full">
        <span>
          <span className="text-lg font-semibold">Pizza {name}</span>
          <br></br>
          <span className="text-orange-50/50">{ingredients.join(", ")}</span>
        </span>
        <span className="flex-1"></span>
        <span>
          x{quantity} = {formatCurrency(unitPrice * quantity)}
        </span>
      </p>
    </div>
  );
}

PizzaItemCart.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    imageUrl: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default PizzaItemCart;
