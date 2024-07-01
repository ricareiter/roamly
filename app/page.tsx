import Destinations from "@/components/Destinations";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
    </div>
  );
}
