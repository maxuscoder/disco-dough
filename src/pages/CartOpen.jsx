import Button from "../ui/Button";
import EmptyCart from "../ui/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../ui/cartSlice";

import { Link } from "react-router-dom";
import PizzaItemCart from "../ui/PizzaInCart";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispath = useDispatch();

  // console.log(cart);

  const totalQuantity = cart.reduce(
    (total, pizza) => total + pizza.quantity,
    0
  );

  console.log(cart);

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-[70px] py-3 mt-6 text-orange-50">
      <Link to="/menu">&larr; Continue Shopping</Link>

      <h2 className="mt-[50px] text-xl font-semibold">
        Your shopping cart, {username}
      </h2>
      <p>You have {totalQuantity} items in your cart</p>

      <div className="flex mt-10 gap-5 justify-center items-center">
        <ul className="divide-y divide-stone-200/30 border-b border-stone-200/30 w-3/4">
          {cart.map((pizza) => (
            <PizzaItemCart pizza={pizza} key={pizza.pizzaId}></PizzaItemCart>
          ))}
        </ul>
        <div className="flex flex-col items-center justify-center w-1/4 gap-10 flex-1">
          <Button type="cart" to="/order/new">
            Order pizzas
          </Button>

          <Button type="cartDelete" onClick={() => dispath(clearCart())}>
            Clear cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
