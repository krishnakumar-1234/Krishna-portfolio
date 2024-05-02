import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import Header from "./components/Header/page";
import LandingPage from "./components/Landing/page";
import Porjects from "./components/projects/page";
import Skills from "./components/skills/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <main>
      <Header />
      <LandingPage />
      <Porjects />
      <h2 className="text-center p-5 text-4xl font-medium">
        This is my skills and , I know all 85%
      </h2>
      <Skills />
      <Footer />
    </main>
  );
}
