import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  testimonial: string;
  name: string;
  description: string;
}

const TestimonialCard = ({ image, testimonial, name, description }: Props) => {
  return (
    <div>
      <div className="relative w-[400px] px-12 bg-white py-7 md:px-7 md:py-7 rounded-lg shadow-md">
        <div className="absolute -top-5 left-[180px] lg:-left-5">
          <Image
            src={image}
            alt="profile image"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <p className="mt-4 mb-8 text-sm font-medium text-center text-gray-500 lg:mt-0 lg:text-left">
          {`“${testimonial}”`}
        </p>
        <div>
          <h4 className="font-bold text-center text-gray-500 lg:text-left">
            {name}
          </h4>
          <p className="text-xs font-medium text-center text-gray-500 lg:text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
