import Bookings from "@/components/Bookings";
import Destinations from "@/components/Destinations";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Bookings />
      <Testimonials />
    </div>
  );
}
