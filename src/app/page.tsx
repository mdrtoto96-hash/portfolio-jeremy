import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}>
        <Hero />
        <Portfolio />
        <Experience />
        <Footer />
      </div>
    </>
  );
}
