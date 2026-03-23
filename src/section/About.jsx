import React from "react";
import { FaMicrochip } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { MdOutlineStickyNote2 } from "react-icons/md";

const About = () => {
  return (
    <section className=" bg-white w-full py-16 px-6">
      <div className=" mx-auto text-center text-black">
        <h2 className=" font-bold">How It Works</h2>
        <p className=" text-gray-600">Three simple steps to healthier crops</p>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
          <div className=" flex flex-col items-center  py-3 px-2">
            <div className=" bg-green-100 text-green-600 flex justify-center items-center h-16 w-16 rounded-2xl text-2xl">
              <LuUpload />
            </div>

            <p className=" text-gray-600 mt-3">Step 1</p>
            <p className=" text-black text-xl">Upload Image</p>
            <p className="text-gray-600 ">
              Take a photo of your plant and upload it in seconds.
            </p>
          </div>

          <div className=" flex flex-col items-center  py-3 px-2">
            <div className=" bg-green-100 text-green-600 flex justify-center items-center  h-16 w-16 rounded-2xl text-2xl">
              <FaMicrochip />
            </div>

            <p className=" text-gray-600 mt-3">Step 2</p>
            <p className=" text-black text-xl">AI Analyzes</p>
            <p className="text-gray-600 ">
              Our model identifies diseases with high accuracy.
            </p>
          </div>

          <div className=" flex flex-col items-center  py-3 px-2">
            <div className=" bg-green-100 text-green-600 flex justify-center items-center  h-16 w-16 rounded-2xl text-2xl">
              <MdOutlineStickyNote2 />
            </div>

            <p className=" text-gray-600 mt-3">Step 3</p>
            <p className=" text-black text-xl">Get Results</p>
            <p className="text-gray-600 ">
              Receive diagnosis, causes, and treatment steps instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
