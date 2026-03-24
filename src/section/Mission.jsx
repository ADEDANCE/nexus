import React from "react";
import { IoIosFlash } from "react-icons/io";
import { PiPlantBold } from "react-icons/pi";
import { RiShieldCheckLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className=" bg-green-50 w-full py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // hidden
        whileInView={{ opacity: 1, y: 0 }} // visible
        transition={{ duration: 0.5 }}
      >
        <div className=" mx-auto text-black text-center">
          <h2 className=" font-bold text-2xl">Built for the Field</h2>

          <div className=" grid grid-cols-1 md:grid-cols-3 mt-10 gap-9">
            <div className=" bg-white py-10 px-4 border border-gray-300 flex flex-col items-start rounded-2xl  text-start">
              <div className=" h-10 w-10 flex justify-center items-center bg-green-100 text-green-600 rounded-xl text-2xl mb-3">
                <IoIosFlash />
              </div>
              <h4 className=" font-bold text-black">Instant Results</h4>
              <p className=" text-gray-600">
                Get a diagnosis in under 3 seconds with detailed treatment
                plans.
              </p>
            </div>

            <div className=" bg-white py-10 px-4 border border-gray-300 flex flex-col items-start rounded-2xl  text-start">
              <div className=" h-10 w-10 flex justify-center items-center bg-green-100 text-green-600 rounded-xl text-2xl mb-3">
                <RiShieldCheckLine />
              </div>
              <h4 className=" font-bold text-black">Trusted Accuracy</h4>
              <p className=" text-gray-600">
                Trained on thousands of real-world crop disease samples.
              </p>
            </div>

            <div className=" bg-white py-10 px-4 border border-gray-300 flex flex-col items-start rounded-2xl  text-start">
              <div className=" h-10 w-10 flex justify-center items-center bg-green-100 text-green-600 rounded-xl text-2xl mb-3">
                <PiPlantBold />
              </div>
              <h4 className=" font-bold text-black">Instant Results</h4>
              <p className=" text-gray-600">
                Get a diagnosis in under 3 seconds with detailed treatment
                plans.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;
