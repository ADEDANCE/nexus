import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Textfield from "../components/Textfield";
import Button from "../components/Button";

const ForgotPassword = () => {
  return (
    <section className=" bg-green-50 w-full py-20 px-20 md:px-96 ">
      <div className=" mx-auto">
        <div className=" bg-white text-black py-10 px-4  rounded-2xl mt-14 border border-gray-300 flex flex-col items-center">
          <h2 className=" font-bold">Forgot Password</h2>
          <p className=" text-gray-600">
            Enter your email and we'll send you a reset link.
          </p>

          <Textfield
            label={"Email"}
            placeholder={"Farmer@example.com"}
            className=" fill-green-50 mb-3"
          />

          <Button
            className={"bg-green-600 text-white mt-5 w-full"}
            children={"Send Reset Link"}
          />

          <Link
            to={"/login"}
            className=" text-gray-600 hover:underline flex items-center mt-4"
          >
            <IoMdArrowBack />
            <p>Back to Login</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
