"use client";
import { useEffect } from "react";
import "../app/globals.css";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
// import Containers
import Container1 from "./Container1/page";
import Container2 from "./Container2/page";
import Container3 from "./Container3/page";
import Container4 from "./Container4/page";
import Container5 from "./Container5/page";
import Footer from "./Footer/page";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);
  return (
    <main className="bg-black w-full">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Footer />
    </main>
  );
}
