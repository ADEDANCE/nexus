import React from "react";

const Textfield = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-black">{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 ${className}`}
      />
    </div>
  );
};

export default Textfield;
