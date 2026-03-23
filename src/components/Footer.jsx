import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-white border-t border-gray-300 shadow py-4 px-4">
      <div className=" flex  flex-col md:flex-row  text-gray-600  justify-between items-center">
        <p className=" text-center ">
          © 2026 Nexus. Helping farmers grow healthier crops.
        </p>

        <div className=" flex gap-4">
          <Link className=" hover:text-green-600">About</Link>
          <Link className=" hover:text-green-600">Contact</Link>
          <Link className=" hover:text-green-600">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
