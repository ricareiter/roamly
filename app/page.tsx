import Bookings from "@/components/Bookings";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
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
      <Logos />
      <Newsletter />
      <Footer />
    </div>
  );
}
