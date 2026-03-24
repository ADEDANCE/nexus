import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const Textfield = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1 w-full relative">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-black">{label}</label>
      )}

      <input
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 pr-10 ${className}`}
      />
      {type === "password" && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 bottom-1 transform -translate-y-1/2 cursor-pointer text-gray-500"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      )}
    </div>
  );
};

export default Textfield;
