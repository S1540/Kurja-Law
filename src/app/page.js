import Image from "next/image";
import InfoBar from "./components/InfoBar";
import Header from "./components/Header";
import HeroSlider from "./components/HomeComponents/HeroSlider";
import Expertise from "./components/HomeComponents/Expertise";

export default function Home() {
  return (
    <>
      <section>
        <InfoBar />
        <Header />
        <HeroSlider />
        <Expertise />
      </section>
    </>
  );
}
