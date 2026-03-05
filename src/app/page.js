import Image from "next/image";
import InfoBar from "./components/InfoBar";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <section>
        {/* <InfoBar /> */}
        <InfoBar />
        <Header />
      </section>
    </>
  );
}
