import { Navigation } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  destination: string;
  price: string;
  duration: string;
}

const Destination = ({ image, destination, price, duration }: Props) => {
  return (
    <div className="flex flex-col transition-all duration-300 shadow-lg rounded-3xl w-60 hover:cursor-pointer hover:bg-yellowWhite">
      <div className="relative mb-3 rounded-3xl w-60 h-60">
        <Image
          src={image}
          alt="destination image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-3xl"
        />
      </div>
      <div>
        <div className="flex justify-between px-4">
          <p className="text-sm font-bold text-darkBlue">{destination}</p>
          <p className="text-sm text-darkBlue">${price}</p>
        </div>
        <div className="flex items-center mt-3 mb-6 ml-3 space-x-2">
          <Navigation className="w-4" />
          <p className="text-xs text-darkBlue">{duration} Trip</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
