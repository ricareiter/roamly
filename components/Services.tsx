import { Umbrella, Plane, MicVocal, Settings } from "lucide-react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="container mx-auto mb-12 mt-36 lg:mt-24">
      <div className="text-center">
        <p className="mb-4 text-sm font-semibold text-gray-500 uppercase">
          Category
        </p>
        <h3 className="text-4xl font-bold text-darkBlue">
          We Offer Best Services
        </h3>
      </div>
      <div>
        <div className="flex flex-col items-center justify-between mt-12 space-y-4 lg:justify-center lg:space-x-20 md:flex-row md:space-y-0">
          <Service
            icon={
              <Umbrella className="w-12 h-12 p-2 mb-4 text-white rounded-full bg-orangeRed" />
            }
            title="Calculated Weather"
            description="Built Wicket longer admire do barton vanity itself do in it."
          />
          <Service
            icon={
              <Plane className="w-12 h-12 p-2 mb-4 text-white rounded-full bg-orangeRed" />
            }
            title="Best Flights"
            description="Engrossed listening. Park gate sell they west hard for the."
          />
          <Service
            icon={
              <MicVocal className="w-12 h-12 p-2 mb-4 text-white rounded-full bg-orangeRed" />
            }
            title="Local Events"
            description="Barton vanity itself do in it. Preferd to men it engrossed
              listening."
          />
          <Service
            icon={
              <Settings className="w-12 h-12 p-2 mb-4 text-white rounded-full bg-orangeRed" />
            }
            title="Customization"
            description="We deliver outsourced aviation services for military customers."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
