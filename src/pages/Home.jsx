import React from "react";
import Hero from "../section/Hero";
import About from "../section/About";
import Mission from "../section/Mission";
import Getstarted from "../section/Getstarted";

const Home = () => {
  return (
    <div className=" bg-green-50 ">
      <Hero />
      <About />
      <Mission />
      <Getstarted />
    </div>
  );
};

export default Home;
