import React from "react";

const Button = ({ text, passIcon, outline }) => {
  return (
    <button className={outline ? "outLineBtn" : "button"}>
      {text}
      {passIcon}
    </button>
  );
};

export default Button;
