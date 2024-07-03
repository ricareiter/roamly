import Image from "next/image";
import axonLogo from "@/public/axon-logo.png";
import jetstarLogo from "@/public/jetstar-logo.png";
import expediaLogo from "@/public/expedia-logo.png";
import qantasLogo from "@/public/qantas-logo.png";
import alitaliaLogo from "@/public/alitalia-logo.png";

const Logos = () => {
  return (
    <div className="hidden md:block container mx-auto mt-48 mb-12">
      <div className="flex flex-wrap items-center justify-center lg:justify-between px-8">
        <Image src={axonLogo} alt="axon logo" />
        <Image src={jetstarLogo} alt="jetstar logo" />
        <Image src={expediaLogo} alt="expedia logo" />
        <Image
          src={qantasLogo}
          alt="qantas logo"
          className="hidden lg:block object-contain"
        />
        <Image
          src={alitaliaLogo}
          alt="alitalia logo"
          className="hidden xl:block object-contain"
        />
      </div>
    </div>
  );
};

export default Logos;
