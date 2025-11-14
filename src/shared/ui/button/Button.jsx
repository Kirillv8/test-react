import React from "react";
import "@shared/ui/button/button.css";
const Button = ({ type = "submit", onClick, children, ...props }) => {
  return (
    <div className="container-btn">
      <button className="btn" type={type} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
