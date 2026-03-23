import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={` py-3 px-6 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
