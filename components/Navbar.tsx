import Navlink from "./Navlink";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="container mx-auto mt-8 xl:px-12">
      <div className="flex items-center justify-between px-10 md:block md:px-0">
        <div className="flex items-center justify-between md:px-8 xl:px-0">
          <div className="text-3xl font-bold tracking-wide">
            Roam<span className="font-medium text-orangeYellow">ly</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex md:space-x-4 lg:space-x-8 xl:space-x-14">
              <li>
                <Navlink href="#">Destinations</Navlink>
              </li>
              <li>
                <Navlink href="#">Services</Navlink>
              </li>
              <li>
                <Navlink href="#">Bookings</Navlink>
              </li>
              <li>
                <Navlink href="#">Contact</Navlink>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-6 md:flex">
            <div className="px-4 py-2 font-semibold border border-transparent lg:font-bold lg:px-6 lg:py-3 rounded-xl text-darkBlue hover:cursor-pointer hover:bg-transparent hover:font-extrabold">
              Login
            </div>
            <div className="px-4 py-2 font-semibold text-white border lg:font-bold lg:px-6 lg:py-3 rounded-xl border-orangeRed bg-orangeRed hover:cursor-pointer hover:text-orangeRed hover:bg-transparent">
              Sign up
            </div>
          </div>
        </div>
        <Menu className="md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
