import { LuUpload } from "react-icons/lu";
import React, { useRef, useState } from "react";
import Button from "../components/Button";
import { PiCellSignalHighLight } from "react-icons/pi";
import { CgDanger } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";
import { RiCapsuleLine } from "react-icons/ri";

const Dashboard = () => {
  // store the uploaded image
  const [image, setImage] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // reference to hidden file input
  const fileInputRef = useRef(null);

  // function to open file picker
  const handleClick = () => {
    fileInputRef.current.click();
  };

  // function to handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // preview image
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };
  return (
    <section className=" w-full bg-green-50 py-24  px-6 min-h-screen">
      <div className=" text-start text-black">
        <h1 className=" font-bold text-2xl">Hello, Farmer </h1>
        <p className=" text-gray-600">
          Upload a plant image to get an instant diagnosis.
        </p>

        {/* upload box */}
        <div
          onClick={handleClick}
          className="border border-dashed border-gray-500 py-10 px-4 flex flex-col items-center rounded-2xl cursor-pointer mt-60 md:mt-28"
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
          {image ? (
            // show image after upload
            <img
              src={image}
              alt="uploaded"
              className="w-40 h-40 object-cover rounded-xl"
            />
          ) : (
            // show upload UI before upload
            <>
              <div className="bg-green-100 text-green-600 flex justify-center items-center h-16 w-16 rounded-2xl text-2xl">
                <LuUpload />
              </div>
              <p className="text-black text-xl mt-3">Drop your image here</p>
              <p className="text-gray-600">
                Supports JPG, PNG, WEBP up to 10MB
              </p>
            </>
          )}
        </div>
        {image && (
          <Button
            className={" bg-green-600 text-white w-full mt-7"}
            children={"Analyze Plant"}
            onClick={() => setShowResult(true)}
          />
        )}

        {showResult && (
          <div className=" mt-5">
            <div className=" flex gap-3">
              <h2 className=" font-bold text-black">Rice Blast Disease</h2>
              <div className=" bg-green-200 text-green-600 flex rounded-2xl py-0 px-2 items-center">
                <PiCellSignalHighLight />
                <p>
                  <span>98%</span> match
                </p>
              </div>
            </div>
            <div className=" bg-white py-7 px-4 text-start mt-10 rounded-2xl shadow">
              <div className=" flex gap-2 items-center ">
                <CgDanger className=" text-orange-500" />
                <p>Causes</p>
              </div>

              <div className=" flex gap-2 items-center mt-2">
                <GoDotFill className=" text-orange-500" />
                <p>Caused by the fungus Magnaporthe oryzae</p>
              </div>

              <div className=" flex gap-2 items-center mt-2">
                <GoDotFill className=" text-orange-500" />
                <p>High nitrogen fertilization increases susceptibility</p>
              </div>

              <div className=" flex gap-2 items-center mt-2">
                <GoDotFill className=" text-orange-500" />
                <p>Warm, humid conditions with heavy dew favor outbreaks</p>
              </div>
            </div>

            <div className=" bg-white py-7 px-4 text-start mt-10 rounded-2xl shadow">
              <div className=" flex gap-2 items-center ">
                <RiCapsuleLine className=" text-green-600" />
                <p>Treatment</p>
              </div>

              <div className=" flex gap-2 items-center mt-2">
                <GoDotFill className="  text-green-600" />
                <p>Caused by the fungus Magnaporthe oryzae</p>
              </div>

              <div className=" flex gap-2 items-center mt-2">
                <GoDotFill className="  text-green-600" />
                <p>High nitrogen fertilization increases susceptibility</p>
              </div>

              <div className=" flex gap-2 items-center mt-2">
                <GoDotFill className="  text-green-600" />
                <p>Warm, humid conditions with heavy dew favor outbreaks</p>
              </div>
            </div>

            <div className=" bg-white py-7 px-4 text-start mt-10 rounded-2xl shadow">
              <div className=" flex gap-2 items-center ">
                <CgDanger className="  text-green-600" />
                <p>Prevention</p>
              </div>

              <div className=" flex gap-2 items-center mt-2">
                <GoDotFill className="  text-green-600" />
                <p>Caused by the fungus Magnaporthe oryzae</p>
              </div>

              <div className=" flex gap-2 items-center mt-2">
                <GoDotFill className="  text-green-600" />
                <p>High nitrogen fertilization increases susceptibility</p>
              </div>

              <div className=" flex gap-2 items-center mt-2">
                <GoDotFill className=" text-green-600" />
                <p>Warm, humid conditions with heavy dew favor outbreaks</p>
              </div>
            </div>

            <Button
              children={"Analyze Another plant"}
              className={
                "bg-green-50 border border-gray-300 mt-8 py-0 hover:bg-green-500 hover:text-white"
              }
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
