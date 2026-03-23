import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FiMenu, FiX } from "react-icons/fi";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" w-full py-3 px-3 bg-white border-b border-gray-100 shadow">
      <div className=" flex justify-between">
        <h2 className=" font-bold text-black ">Nexus</h2>

        <div className=" hidden md:flex gap-3 ">
          <Link to={"/"} className=" hover:text-green-600">
            Home
          </Link>
          <Link to={"/dashboard"} className=" hover:text-green-600">
            Dashboard
          </Link>
          <Link to={"/history"} className=" hover:text-green-600">
            History
          </Link>
        </div>

        <div className="hidden md:flex gap-4">
          <Button
            children={"Login"}
            className={" bg-gray-100 border border-gray-300"}
          />
          <Button
            children={"Sign Up"}
            className={" bg-green-600 text-white "}
          />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" md:hidden text-white"
        >
          {isOpen ? (
            <FiX className="text-black text-2xl" />
          ) : (
            <FiMenu className="text-black text-2xl" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="bg-white md:hidden px-4 pb-4 space-y-3 flex flex-col ">
          <div className=""></div>
          <Link to={"/"} className=" hover:text-green-600">
            Home
          </Link>
          <Link to={"/dashboard"} className=" hover:text-green-600">
            Dashboard
          </Link>
          <Link to={"/history"} className=" hover:text-green-600">
            History
          </Link>
          <Button
            children={"Login"}
            className={" bg-gray-100 border border-gray-300"}
          />
          <Button
            children={"Sign Up"}
            className={" bg-green-600 text-white "}
          />
        </div>
      )}
    </nav>
  );
};

export default Navber;
