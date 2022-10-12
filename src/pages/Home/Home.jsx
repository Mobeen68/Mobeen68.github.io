import React from "react";
import Slider from "./components/Slider";
import Footer from "./components/Ending";
// import Header from "./components/Header";
import Navbar from "../../components/ui/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Team from "./components/Team";

const Home = () => {
  return (
    <div className=" bg-slate-200">
      <Navbar />
      <Slider />
      <Hero />
      <Info />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
