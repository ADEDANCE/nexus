import { MdDeleteForever } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { CgDanger } from "react-icons/cg";
import { RiCapsuleLine } from "react-icons/ri";
import tomatoleaf from "../assets/tomatoleaf.jpg";
const History = () => {
  const [data, setData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  // simulate backend fetch
  useEffect(() => {
    const fetchData = async () => {
      const response = [
        {
          id: 1,
          title: "Tomato Late Blight",
          date: "2026-03-24",
          percentage: "95%",
        },
        {
          id: 2,
          title: "Rice Blast Disease",
          date: "2026-03-24",
          percentage: "85%",
        },
        {
          id: 3,
          title: "Tomato Late Blight",
          date: "2026-03-24",
          percentage: "78%",
        },
      ];

      setData(response);
    };

    fetchData();
  }, []);
  return (
    <section className=" w-full bg-green-50 py-24  px-6 min-h-screen">
      <div className=" text-start text-black">
        <h1 className=" font-bold text-2xl">Diagnosis History </h1>
        <div className=" flex justify-between ">
          <p className=" text-gray-600">2 past scans</p>
          <button className=" text-gray-600 hover:bg-amber-700 hover:text-red-600 flex items-center py-1 px-4 rounded-2xl">
            <MdDeleteForever />
            <p>clear</p>
          </button>
        </div>

        {data.map((item, index) => (
          <div className="w-full  mx-auto mt-10" key={item.id}>
            {/* Header */}
            <div
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className=" bg-white border border-gray-300  py-4 rounded-xl cursor-pointer"
            >
              <div className="flex justify-between items-center px-4">
                <div className=" flex gap-4 items-center mb-4">
                  <img
                    src={tomatoleaf}
                    alt=""
                    className=" w-16 h-16 rounded-2xl"
                  />
                  <div>
                    <p className="text-black font-medium">{item.title}</p>
                    <p className=" text-gray-600 text-xs">{item.date}</p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <div className=" bg-green-100 flex px-5 items-center rounded-2xl">
                    <LuChartColumnIncreasing />
                    <p>{item.percentage}</p>
                  </div>

                  {/* Icon */}
                  <FiChevronDown
                    className={`text-2xl transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Content */}
              {openIndex === index && (
                <div className=" p-4  w-full border-t border-gray-300">
                  {/* Causes */}
                  <div>
                    {" "}
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
                      <p>
                        High nitrogen fertilization increases susceptibility
                      </p>
                    </div>
                    <div className=" flex gap-2 items-center mt-2">
                      <GoDotFill className=" text-orange-500" />
                      <p>
                        Warm, humid conditions with heavy dew favor outbreaks
                      </p>
                    </div>
                  </div>

                  {/* Treatmen */}
                  <div className=" mt-4">
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
                      <p>
                        High nitrogen fertilization increases susceptibility
                      </p>
                    </div>

                    <div className=" flex gap-2 items-center mt-2">
                      <GoDotFill className="  text-green-600" />
                      <p>
                        Warm, humid conditions with heavy dew favor outbreaks
                      </p>
                    </div>
                  </div>

                  {/* Prevention */}
                  <div className=" mt-4">
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
                      <p>
                        High nitrogen fertilization increases susceptibility
                      </p>
                    </div>

                    <div className=" flex gap-2 items-center mt-2">
                      <GoDotFill className=" text-green-600" />
                      <p>
                        Warm, humid conditions with heavy dew favor outbreaks
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
