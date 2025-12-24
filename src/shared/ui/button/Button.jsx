import React from "react";
import "@shared/ui/button/button.css";
const Button = ({ type, onClick, children, className = "", ...props }) => {
  return (
    <>
      <button
        className={`btn ${className}`}
        type={type}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
