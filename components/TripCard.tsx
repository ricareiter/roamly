import greeceTripImg from "@/public/greece-trip-image.jpg";
import Image from "next/image";
import { Leaf, Map, MapPin, Users, Heart } from "lucide-react";

const TripCard = () => {
  return (
    <div className="">
      <div className="p-6 shadow-md rounded-3xl">
        <div>
          <Image
            src={greeceTripImg}
            alt="greece trip image"
            width={300}
            className="rounded-3xl"
          />
        </div>
        <div>
          <div>
            <p className="mt-5 mb-1 font-semibold">Trip To Greece</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-500">14-29 June</p>
              <span className="h-4 border border-gray-500"></span>
              <p className="text-sm text-gray-500">by Robbin Joseph</p>
            </div>
          </div>
          <div className="flex mt-5 space-x-4">
            <Leaf className="w-10 h-10 p-2 text-gray-100 bg-gray-100 rounded-full fill-gray-500" />
            <Map className="w-10 h-10 p-2 text-gray-100 bg-gray-100 rounded-full fill-gray-500" />
            <MapPin className="w-10 h-10 p-2 text-gray-100 bg-gray-100 rounded-full fill-gray-500" />
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex space-x-3">
              <Users className="w-6 text-gray-400" />
              <p className="mt-1 text-sm font-semibold text-gray-500">
                24 people going
              </p>
            </div>
            <div>
              <Heart className="w-6 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
