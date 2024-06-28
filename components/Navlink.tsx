import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Navlink = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-gray-700 lg:text-base hover:font-bold hover:text-black"
    >
      {children}
    </Link>
  );
};

export default Navlink;
