import { Link } from "react-router-dom";
import SearchOrder from "../ui/SearchOrder";

function Orders() {
  return (
    <div className="flex flex-col items-left gap-2 ml-[30px] md:ml-[300px] justify-center h-screen bg-[#221a11] md:gap-7">
      <Link className="text-white text-lg" to="/menu" type="primary">
        ⬅ Back to menu
      </Link>
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        Track Your Pizza Order
      </h1>
      <p className="text-lg text-orange-100 mb-8">
        Enter your order ID to check the status of your pizza
      </p>
      <div className="flex items-center">
        <SearchOrder />
      </div>
    </div>
  );
}

export default Orders;
