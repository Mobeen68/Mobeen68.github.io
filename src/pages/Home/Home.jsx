import React from "react";
import Slider from "./components/Slider";
import Footer from "./components/Ending";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Team from "./components/Team";

const Home = () => {
  return (
    <>
      <div className="lg:mx-16 bg-slate-200">
        <Header />
        <Slider />
        <Hero />
        <Info />
        <Team />
      </div>
      <Footer />
    </>
  );
};

export default Home;
