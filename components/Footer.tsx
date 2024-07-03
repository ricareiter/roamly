import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col items-center px-4 py-12 lg:flex-row">
        <div className="lg:w-2/6">
          <div className="text-3xl font-bold tracking-wide text-center lg:text-left">
            Roam<span className="font-medium text-orangeYellow">ly</span>
          </div>
          <p className="mt-4 text-sm font-medium text-center text-gray-500 lg:text-left">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="mt-12 text-center lg:text-left lg:w-1/6">
          <p className="mb-4 text-lg font-bold">Company</p>
          <div className="flex flex-col space-y-1">
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-black"
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-black"
            >
              Careers
            </Link>
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-black"
            >
              Mobile
            </Link>
          </div>
        </div>
        <div className="mt-12 text-center lg:text-left lg:w-1/6">
          <p className="mb-4 text-lg font-bold">Contact</p>
          <div className="flex flex-col space-y-1">
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-black"
            >
              Help
            </Link>
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-black"
            >
              Press
            </Link>
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-black"
            >
              Affiliates
            </Link>
          </div>
        </div>
        <div className="mt-12 text-center lg:text-left lg:w-1/6">
          <p className="mb-4 text-lg font-bold">More</p>
          <div className="flex flex-col space-y-1">
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-black"
            >
              Airlines
            </Link>
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-black"
            >
              Low Fare Tips
            </Link>
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-black"
            >
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-5 lg:space-y-3 mt-14 lg:mt-0 lg:w-1/6">
          <div className="flex space-x-4">
            <Facebook className="w-10 h-10 p-2 bg-white border border-gray-100 rounded-full shadow-md fill-black hover:cursor-pointer hover:bg-yellowWhite" />
            <Twitter className="w-10 h-10 p-2 bg-white border border-gray-100 rounded-full shadow-md fill-black hover:cursor-pointer hover:bg-yellowWhite" />
            <Instagram className="w-10 h-10 p-2 bg-white border border-gray-100 rounded-full shadow-md hover:cursor-pointer hover:bg-yellowWhite" />
          </div>
          <p className="text-lg font-medium text-gray-500">Discover our app</p>
        </div>
      </div>
      <p className="mt-2 mb-6 text-xs font-bold text-center text-darkBlue">
        All rights reserved@roamly.co
      </p>
    </div>
  );
};

export default Footer;
