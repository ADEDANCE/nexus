import React from "react";
import Button from "../components/Button";

function Getstarted() {
  return (
    <section className=" w-full bg-white py-16 px-6">
      <div className=" mx-auto text-center text-black">
        <h2 className=" font-bold text-2xl">Ready to protect your crops?</h2>
        <p className=" text-gray-600">
          Join thousands of farmers using Nexus to catch diseases early.
        </p>

        <Button
          className={" bg-green-600 text-white mt-8"}
          children={"Create Free Account"}
        />
      </div>
    </section>
  );
}

export default Getstarted;
