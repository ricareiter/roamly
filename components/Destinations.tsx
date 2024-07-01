import destinationImg1 from "@/public/destination-1.jpg";
import destinationImg2 from "@/public/destination-2.jpg";
import destinationImg3 from "@/public/destination-3.jpg";
import Destination from "./Destination";

const Destinations = () => {
  return (
    <div className="container mx-auto mt-24 mb-12">
      <div className="text-center">
        <p className="mb-4 text-sm font-semibold text-gray-500 uppercase">
          Top Selling
        </p>
        <h3 className="px-4 mb-16 text-4xl font-bold lg:px-0 text-darkBlue">
          Top Destinations
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-12 lg:flex-row lg:space-y-0 lg:space-x-12">
        <Destination
          image={destinationImg1}
          destination="Rome, Italy"
          price="5,42k"
          duration="10 Days"
        />
        <Destination
          image={destinationImg2}
          destination="London, UK"
          price="4,2k"
          duration="12 Days"
        />
        <Destination
          image={destinationImg3}
          destination="Full Europe"
          price="15k"
          duration="28 Days"
        />
      </div>
    </div>
  );
};

export default Destinations;
