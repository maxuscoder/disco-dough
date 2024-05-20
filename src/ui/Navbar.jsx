import { Link, useNavigate } from "react-router-dom";
import companyLogo from "../assets/companyLogo.png";
import { useDispatch } from "react-redux";
import { logout } from "../user/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logoutUser() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <div className="py-[14px] border-b-[2px] border-yellow-500/40 bg-[#1a150e]">
      <div className="w-[75%] mx-auto flex flex-col items-center justify-between md:flex-row">
        <img
          src={companyLogo}
          className="h-[65px] hover:scale-125 transition-transform duration-500"
        ></img>
        <div className="text-orange-100 uppercase mt-4 flex flex-col gap-[15px] grow justify-end sm:gap-[40px] md:mt-0 sm:flex-row">
          <Link
            to="/orders"
            className="relative text-center hover:text-orange-50 text-[17px] sm:text-[19px] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-mono"
          >
            Orders
          </Link>
          <Link
            className="relative text-center hover:text-orange-50 text-[17px] sm:text-[19px] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-mono"
            to="/contact"
          >
            Contact
          </Link>

          <Link
            to="/locations"
            className="relative text-center hover:text-orange-50 text-[17px] sm:text-[19px] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-mono"
          >
            Locations
          </Link>
          <button
            onClick={() => logoutUser()}
            className="relative text-center mb-2 uppercase hover:text-orange-50 text-[17px] sm:text-[19px] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center sm:mb-0 font-mono"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
