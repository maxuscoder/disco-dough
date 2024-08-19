import { useLoaderData } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Cart from "../ui/Cart";
import PizzaCard from "../ui/PizzaCard";
import { getMenu } from "../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <div className="bg-[#221a11] mb-[80px] text-orange-100 pt-4 sm:pt-[55px]">
        <main className="mx-auto max-w-lg md:max-w-3xl">
          <div className="divide-y divide-stone-600 pl-2">
            {menu.map((pizza) => (
              <PizzaCard pizza={pizza} key={pizza.id} />
            ))}
          </div>
        </main>
      </div>
      <Cart />
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
