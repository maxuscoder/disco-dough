import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-md border-yellow-500 border-2 tracking-wide transition-colors duration-300 hover:bg-yellow-500 focus:bg-yellow-400 focus:border-yellow-400 focus:outline-none focus:ring-transparent focus:ring-0";

  //bg-yellow-400
  const styles = {
    position:
      "text-sm rounded-md border-2 border-yellow-400 bg-yellow-400 font-semibold uppercase tracking-wide text-stone-950 transition-colors duration-300 hover:bg-yellow-500 hover:border-yellow-500 focus:outline-none disabled:cursor-not-allowed py-1.5 md:px-6 md:py-2.5",
    primary:
      base +
      "text-white text-[17px] px-2 py-1 md:px-6 md:py-4 hover:text-black disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-400",
    cartIcon: "text-2xl",
    round:
      "text-md border-[1px] text-orange-50 border-orange-50 px-2 rounded-md hover:bg-orange-50 hover:text-black transition-all duration-300",
    secondary:
      "inline-block text-sm rounded-full border-2 border-yellow-400 bg-yellow-400 font-semibold uppercase tracking-wide text-stone-950 transition-colors duration-300 hover:bg-yellow-500 hover:border-yellow-500 focus:outline-none disabled:cursor-not-allowed py-1.5 md:px-6 md:py-2.5",
    cart: "w-[200px] rounded-md border-yellow-500 border-2 tracking-wide transition-colors duration-300 hover:bg-yellow-500 hover:text-black focus:bg-yellow-400 focus:border-yellow-400 focus:outline-none focus:ring-transparent focus:ring-0 text-center py-2",
    cartDelete:
      "w-[200px] rounded-md border-red-500 border-2 tracking-wide transition-colors duration-300 hover:bg-red-500 hover:text-white focus:bg-red-400 focus:border-red-400 focus:outline-none focus:ring-transparent focus:ring-0 text-center py-2",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf([
    "primary",
    "position",
    "cartIcon",
    "round",
    "secondary",
    "cart",
    "cartDelete",
    "",
  ]).isRequired,
  onClick: PropTypes.func,
};

export default Button;
