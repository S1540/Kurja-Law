import Image from "next/image";
import InfoBar from "./components/InfoBar";
import Header from "./components/Header";
import HeroSlider from "./components/HomeComponents/HeroSlider";
import Expertise from "./components/HomeComponents/Expertise";
import OpenToTop from "./components/HomeComponents/OpenToTop";
import About from "./components/HomeComponents/About";
import Footer from "./components/Footer";
import Contact from "./components/HomeComponents/Contact";

export default function Home() {
  return (
    <>
      <section className="scroll-smooth">
        <OpenToTop />
        <InfoBar />
        <Header />
        <HeroSlider />
        <About />
        <Expertise />
        <Contact />
        <Footer />
      </section>
    </>
  );
}
