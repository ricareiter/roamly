import { Mail, Navigation } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="container mx-auto mt-12 mb-12">
      <div className="relative bg-purple-200 bg-opacity-25 py-8 xl:p-12 xl:rounded-tl-[100px] xl:rounded-2xl">
        <div className="py-4 px-4 md:px-12 xl:px-60 xl:py-12">
          <p className="text-gray-500 font-semibold text-xl lg:text-3xl text-center">
            Subscribe to get information, latest news and other interesting
            offers about Roamly
          </p>
        </div>
        <div className="text-center mt-8">
          <form className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
            <div className="relative xl:w-1/4">
              <input
                type="text"
                placeholder="Your email"
                className="placeholder:text-sm placeholder:font-medium px-8 py-4 rounded-lg w-full pl-14 outline-none text-gray-600"
              />
              <button className="absolute top-4 left-4 hover:cursor-default">
                <Mail className="text-gray-400" />
              </button>
            </div>
            <button className="bg-orangeRed border hover:text-orangeRed hover:bg-white border-orangeRed text-white px-8 py-4 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
        <Navigation className="hidden xl:block absolute -top-4 -right-4 bg-indigo-500 text-white fill-white rounded-full p-3 h-14 w-14" />
      </div>
    </div>
  );
};

export default Newsletter;
