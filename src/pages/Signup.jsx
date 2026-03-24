import React from "react";
import Textfield from "../components/Textfield";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className=" bg-green-50 w-full py-20 px-20 md:px-96 ">
      <div className=" mx-auto">
        <div className=" bg-white text-black py-10 px-4  rounded-2xl mt-14 border border-gray-300 flex flex-col items-center">
          <h2 className=" font-bold">Create your account</h2>
          <p className=" text-gray-600">
            Start diagnosing plant diseases today
          </p>

          <Textfield
            label={"Full name"}
            placeholder={"Abdulllah Basit"}
            className=" fill-green-50 mb-3"
          />

          <Textfield
            label={"Email"}
            placeholder={"Farmer@example.com"}
            className=" fill-green-50 mb-3"
          />

          <Textfield
            label={"Password"}
            placeholder={"....."}
            className=" fill-green-50"
          />

          <Button
            className={"bg-green-600 text-white mt-5 w-full"}
            children={"Create account"}
          />

          <div className=" flex mt-3">
            <p>Already have an account?</p>
            <Link to={"/login"} className=" text-green-600 hover:underline">
              {" "}
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
