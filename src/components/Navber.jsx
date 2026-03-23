import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navber = () => {
  return (
    <nav className=" w-full py-3 px-3 bg-white border-b border-gray-100 shadow">
      <div className=" flex justify-between">
        <h2 className=" font-bold text-black ">Nexus</h2>

        <div className=" hidden md:flex gap-3 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/dashboard"}>Dashboard</Link>
          <Link to={"/history"}>History</Link>
        </div>

        <div className=" flex gap-4">
          <Button children={"Login"} />
        </div>
      </div>
    </nav>
  );
};

export default Navber;
