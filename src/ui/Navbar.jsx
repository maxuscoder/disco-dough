import { Link } from "react-router-dom";
import companyLogo from "../assets/companyLogo.png";

function Navbar() {
  function logout() {
    console.log("logging out");
  }

  return (
    <div className="py-[14px] border-b-[2px] border-yellow-500/40 bg-[#1a150e]">
      <div className="w-[75%] mx-auto flex items-center justify-between">
        <img
          src={companyLogo}
          className="h-[65px] hover:scale-125 transition-transform duration-500"
        ></img>
        <div className="text-orange-100 uppercase flex grow justify-end gap-[40px]">
          <Link
            to="/orders"
            className="relative hover:text-orange-50 text-[19px] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-mono"
          >
            Orders
          </Link>
          <Link
            className="relative hover:text-orange-50 text-[19px] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-mono"
            to="/contact"
          >
            Contact
          </Link>

          <Link
            to="/locations"
            className="relative hover:text-orange-50 text-[19px] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-mono"
          >
            Locations
          </Link>
          <button
            onClick={() => logout()}
            className="relative uppercase hover:text-orange-50 text-[19px] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-mono"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
