import { useLoaderData } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Cart from "../ui/Cart";
import PizzaCard from "../ui/PizzaCard";
import { getMenu } from "../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Navbar />
      <div className="bg-[#221a11] text-orange-100 pt-[55px]">
        <main className="mx-auto max-w-3xl">
          <div className="divide-y divide-stone-600">
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
  // console.log(menu);
  return menu;
}
export default Menu;
