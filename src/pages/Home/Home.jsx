import React from "react";
import Slider from "./components/Slider";
import Footer from "./components/Ending";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div className="md:p-4">
      <Header />
      <div className="">
        <Slider />
      </div>
      <Hero/>
      <Footer />
    </div>
  );
};

export default Home;
