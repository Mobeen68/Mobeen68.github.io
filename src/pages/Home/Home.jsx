import React from "react";
import Slider from "./components/Slider";
import Footer from "./components/Ending";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";

const Home = () => {
  return (
    <div className="md:p-4">
      <Header />
      <Slider />
      <Hero />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
