import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Loader from "@/components/ui/Loader";
import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <SmoothScroll>
        <Navigation />
        <main>
          <Hero />
          <Showreel />
          <Work />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
