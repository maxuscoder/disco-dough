import { Link } from "react-router-dom";
import SearchOrder from "../ui/SearchOrder";

function Orders() {
  return (
    <div className="flex flex-col items-left ml-[300px] justify-center h-screen bg-[#221a11] gap-7">
      <Link className="text-white text-lg" to="/menu" type="primary">
        ⬅ Back to menu
      </Link>
      <h1 className="text-4xl font-bold text-orange-300 mb-4">
        Track Your Pizza Order
      </h1>
      <p className="text-lg text-orange-100 mb-8">
        Enter your order ID to check the status of your pizza
      </p>
      <div className="flex items-center">
        <SearchOrder />

        <button className="p-3 text-lg border-2 border-orange-500 text-white bg-orange-500 rounded-r-lg hover:border-orange-600 hover:bg-orange-600">
          Search
        </button>
      </div>
    </div>
  );
}

export default Orders;
