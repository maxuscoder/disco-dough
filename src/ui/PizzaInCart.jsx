import PropTypes from "prop-types";
import { formatCurrency } from "../utilities/helpers";

function PizzaItemCart({ pizza }) {
  const { name, unitPrice, ingredients, imageUrl, quantity } = pizza;
  return (
    <div className="p-5 flex gap-5 justify-center items-center">
      <img src={imageUrl} className="w-[75px] h-[75px]" alt="pizza"></img>
      <p className="flex flex-col justify-between items-start md:items-center w-full md:flex-row">
        <span>
          <span className="text-md sm:text-lg font-semibold">Pizza {name}</span>
          <br></br>
          <span className="text-orange-50/60 text-[13px]">
            {ingredients.join(", ")}
          </span>
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
