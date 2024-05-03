import PropTypes from "prop-types";
import { formatCurrency } from "../utilities/helpers";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";

function PizzaCard({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  // console.log("FDSFSDFDSFSDDFS" + ingredients);

  const dispatch = useDispatch();

  const currentQuanity = useSelector(getCurrentQuantityById(id));

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      ingredients,
      imageUrl,
      totalPrice: unitPrice,
    };

    dispatch(addItem(newItem));
  }

  const isInCart = currentQuanity > 0;

  return (
    <div className="flex gap-5 py-7 hover:scale-[1.01] transition-transform duration-200">
      <img
        src={imageUrl}
        alt={`pizza_${id}`}
        className={`h-[150px] ${soldOut ? "opacity-70 grayscale" : ""}`}
      ></img>
      <div className="pt-2 flex flex-col grow">
        <h3
          className={`${soldOut ? "text-gray-100/40" : ""} text-[19px] font-semibold`}
        >
          <span className={soldOut ? "grayscale" : ""}>🍕</span> Pizza {name}
        </h3>
        <p className={`${soldOut ? "text-gray-100/40" : ""} italic`}>
          <span className={`${soldOut ? "grayscale" : ""} not-italic`}>📃</span>{" "}
          {ingredients.join(", ")}
        </p>

        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-md">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-md font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuanity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type="cartIcon">
              🛒
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    soldOut: PropTypes.bool,
    imageUrl: PropTypes.string,
  }),
};

export default PizzaCard;
