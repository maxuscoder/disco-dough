import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="px-3 py-3 text-orange-50">
      <Link to="/menu">&larr; See Menu</Link>

      <p className="mt-7 font-semibold">Your cart is empty.</p>
    </div>
  );
}

export default EmptyCart;
