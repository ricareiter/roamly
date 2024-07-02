import profileImg from "@/public/profile-image.jpg";
import profileImg2 from "@/public/profile-image-2.jpg";
import TestimonialCard from "./TestimonialCard";
import { Circle } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="container mx-auto mb-12 lg:mb-36 mt-28">
      <div className="flex flex-col px-12 space-y-12 md:space-y-24 lg:justify-around lg:space-y-12 lg:flex-row lg:px-12">
        <div className="mt-12">
          <div className="text-center lg:text-left">
            <p className="mb-3 font-semibold text-gray-500 uppercase">
              Testimonials
            </p>
            <h3 className="mb-8 text-3xl font-bold capitalize lg:text-4xl md:mb-0 lg:w-96 text-darkBlue">
              What people say about us.
            </h3>
          </div>
          <div className="hidden mt-12 space-x-4 lg:flex">
            <Circle className="w-4 fill-darkBlue hover:cursor-pointer" />
            <Circle className="w-4 text-gray-200 fill-gray-200 hover:cursor-pointer" />
            <Circle className="w-4 text-gray-200 fill-gray-200 hover:cursor-pointer" />
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center">
            <TestimonialCard
              image={profileImg}
              name="Mike Taylor"
              testimonial="On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no."
              description="Lahore, Pakistan"
            />
          </div>
          <div className="absolute justify-center hidden top-20 left-24 right-8 bottom-4 lg:flex -z-10 hover:z-20">
            <TestimonialCard
              image={profileImg2}
              name="Chris Thomas"
              testimonial="On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no."
              description="CEO of Red Button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
