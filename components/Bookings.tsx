import Image from "next/image";
import { Diamond, HandCoins, Plane } from "lucide-react";
import TripCard from "./TripCard";

const Bookings = () => {
  return (
    <div className="container mx-auto mb-12 mt-36 lg:mb-0">
      <div className="flex px-12 lg:justify-between lg:px-28 xl:px-8 xl:justify-around">
        <div className="lg:max-w-1/2">
          <div className="text-center lg:text-left">
            <p className="mb-4 font-semibold text-gray-500">Easy and Fast</p>
            <h3 className="mb-5 text-3xl font-bold capitalize text-darkBlue md:text-4xl lg:w-96">
              Book your next trip in 3 easy steps
            </h3>
          </div>
          <div className="mt-12 space-y-10 lg:space-y-6 lg:mt-0">
            <div className="flex flex-col items-center text-center lg:flex-row lg:gap-4 lg:text-left">
              <Diamond className="bg-yellow-400 text-white rounded-xl p-[6px] w-9 h-9" />
              <div>
                <p className="mt-3 mb-1 text-sm font-semibold text-gray-500 lg:mb-0">
                  Choose Destination
                </p>
                <p className="text-xs text-gray-500 lg:w-72">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center lg:flex-row lg:gap-4 lg:text-left">
              <HandCoins className="bg-orange-500 text-white rounded-xl p-[6px] w-9 h-9" />
              <div>
                <p className="mt-3 mb-1 text-sm font-semibold text-gray-500 lg:mb-0">
                  Make Payment
                </p>
                <p className="text-xs text-gray-500 lg:w-72">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center lg:flex-row lg:gap-4 lg:text-left">
              <Plane className="bg-cyan-700 text-white rounded-xl p-[6px] w-9 h-9" />
              <div>
                <p className="mt-3 mb-1 text-sm font-semibold text-gray-500 lg:mb-0">
                  Reach Airport on Selected Date
                </p>
                <p className="text-xs text-gray-500 lg:w-72">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden mt-12 lg:block max-w-1/2">
          <TripCard />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Bookings;
