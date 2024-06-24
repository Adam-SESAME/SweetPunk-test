import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Quotes from "./components/Quotes/Quotes";
import Jobs from "./components/Jobs/Jobs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Quotes />
      <Jobs />
    </>
  );
}
