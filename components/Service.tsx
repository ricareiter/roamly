interface Props {
  icon: any;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center px-4 pt-3 pb-6 transition-all duration-200 rounded-3xl hover:shadow-lg hover:cursor-pointer hover:bg-yellowWhite">
      {icon}
      <p className="mb-2 text-sm font-semibold text-darkBlue">{title}</p>
      <p className="text-xs text-center text-darkBlue w-36">{description}</p>
    </div>
  );
};

export default Service;
