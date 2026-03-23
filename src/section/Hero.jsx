import React from "react";
import { GiPlantWatering } from "react-icons/gi";
import { RiPlantLine } from "react-icons/ri";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className=" bg-green-50 w-full py-20 px-6">
      <div className=" max-w-7xl mx-auto flex flex-col items-center">
        <div className=" bg-white rounded-4xl flex gap-2 border border-gray-300 items-center w-60 py-1 px-2 justify-center mt-14 ">
          <RiPlantLine className=" text-green-600" />
          <p>AI-Powered Plant Care</p>
        </div>

        <h1 className=" mt-3 text-black text-4xl font-bold">
          Smart Farming Starts Here
        </h1>
        <p className=" mt-3 text-gray-600 text-center">
          Upload a photo of your plant. Nexus identifies diseases, explains the
          causes, and tells you exactly how to treat them.
        </p>

        <div className=" mt-14 flex justify-center gap-4">
          <Button
            className={"bg-green-600 text-white"}
            children={"Get Started"}
          />
          <Button
            className={" bg-green-50 border border-gray-300"}
            children={"Log in"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
