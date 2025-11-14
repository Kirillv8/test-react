import React from "react";
import "@src/shared/ui/input/input.css";
const Input = ({ type = "text", placeholder, value, onChange, ...props }) => {
  return (
    <div className="field">
      <br></br>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
