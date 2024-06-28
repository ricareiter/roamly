import Image from "next/image";
import travellerImg from "@/public/traveller-image.png";
import underlineImg from "@/public/underline.png";
import backgroundBlob from "@/public/pattern.svg";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="container relative mx-auto mt-12 xl:px-12">
      <div className="absolute hidden overflow-hidden lg:block -right-40 -top-96 -z-10">
        <Image src={backgroundBlob} alt="background blob image" />
      </div>
      <div className="flex">
        <div className="flex flex-col items-center max-w-2xl mt-16 text-center lg:pl-14 xl:pl-0 lg:text-left lg:block xl:pr-56 xl:w-2/3 xl:mt-28">
          <h3 className="mb-4 text-xs font-bold uppercase md:text-base text-orangeRed">
            Best Destinations around the world
          </h3>
          <h1 className="relative px-8 mb-6 text-4xl font-bold md:text-6xl md:px-18 lg:px-0 lg:mb-6 text-darkBlue">
            Travel,{" "}
            <span>
              enjoy{" "}
              <Image
                src={underlineImg}
                alt="underline image"
                className="absolute hidden w-56 h-2 md:block top-12 lg:w-72 left-72 lg:left-48 -z-10"
              />{" "}
            </span>{" "}
            and live a new and full life
          </h1>
          <p className="px-8 mb-12 text-sm font-medium md:text-base md:px-24 lg:mb-6 lg:px-0 lg:mr-28 text-darkBlue">
            Where you can find all the most beatiful places in the world,
            presented by people who have been there.
          </p>
          <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
            <button className="px-10 py-3 text-white border shadow-md md:px-6 shadow-opacity-5 rounded-xl shadow-orangeYellow border-orangeYellow bg-orangeYellow hover:text-orangeYellow hover:bg-white">
              Find out more
            </button>
            <button className="flex items-center gap-4 ml-3 md:ml-0 hover:mb-1">
              <Play className="w-10 h-10 p-3 text-white rounded-full shadow-lg fill-white shadow-orangeRed bg-orangeRed" />
              <p className="text-darkBlue">Play Demo</p>
            </button>
          </div>
        </div>
        <div className="hidden w-full mr-8 xl:mr-0 xl:w-1/2 lg:block">
          <Image src={travellerImg} alt="traveller image" priority />
        </div>
      </div>
    </div>
  );
};

export default Hero;
