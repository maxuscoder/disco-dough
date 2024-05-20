import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../utilities/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-[#683d0c] px-4 py-4
      uppercase text-stone-200 sm:px-6 md:text-base"
    >
      <div className="container mx-auto flex flex-col justify-between sm:flex-row">
        <p className="space-x-4 text-[14px] font-semibold text-stone-300 sm:text-[17px] sm:space-x-6">
          <span>{totalCartQuantity} products</span>
          <span>Total: {formatCurrency(totalCartPrice)}</span>
        </p>
        <Link className="text-[14px] sm:text-[17px]" to="/cart/open">
          View cart &rarr;
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
