import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { FiMenu, FiX } from "react-icons/fi";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className=" fixed top-0 left-0 w-full py-3 px-3 bg-white border-b border-gray-100 shadow">
      <div className=" flex justify-between">
        <Link to={"/"}>
          {" "}
          <h2 className=" font-bold text-black ">Nexus</h2>
        </Link>

        <div className=" hidden md:flex gap-3 ">
          <Link
            to={"/"}
            className={`  ${
              location.pathname === "/"
                ? " text-green-600"
                : "hover:text-green-600"
            }`}
          >
            Home
          </Link>
          <Link
            to={"/dashboard"}
            className={`  ${
              location.pathname === "/dashboard"
                ? " text-green-600"
                : "hover:text-green-600"
            }`}
          >
            Dashboard
          </Link>
          <Link
            to={"/history"}
            className={`  ${
              location.pathname === "/history"
                ? " text-green-600"
                : "hover:text-green-600"
            }`}
          >
            History
          </Link>
        </div>

        <div className="hidden md:flex gap-4">
          <Button
            onClick={() => navigate("/login")}
            children={"Login"}
            className={" bg-gray-100 border border-gray-300"}
          />
          <Button
            onClick={() => navigate("/signup")}
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
          <Link
            to={"/"}
            onClick={() => setIsOpen(false)}
            className={`  ${
              location.pathname === "/"
                ? " text-green-600"
                : "hover:text-green-600"
            }`}
          >
            Home
          </Link>
          <Link
            to={"/dashboard"}
            onClick={() => setIsOpen(false)}
            className={`  ${
              location.pathname === "/dashboard"
                ? " text-green-600"
                : "hover:text-green-600"
            }`}
          >
            Dashboard
          </Link>
          <Link
            to={"/history"}
            onClick={() => setIsOpen(false)}
            className={`  ${
              location.pathname === "/history"
                ? " text-green-600"
                : "hover:text-green-600"
            }`}
          >
            History
          </Link>
          <div className=" flex gap-8">
            {" "}
            <Button
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
              children={"Login"}
              className={" bg-gray-100 border border-gray-300 w-full"}
            />
            <Button
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
              children={"Sign Up"}
              className={" bg-green-600 text-white w-full "}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
