import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={` py-3 px-6 rounded-2xl ${className}`}>
      {children}
    </button>
  );
};

export default Button;
