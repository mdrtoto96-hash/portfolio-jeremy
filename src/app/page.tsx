import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 3rem" }}
        className="px-8 md:px-16 lg:px-24"
      >
        <Hero />
        <Portfolio />
        <Experience />
      </main>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }} className="px-8 md:px-16 lg:px-24">
        <Footer />
      </div>
    </>
  );
}
