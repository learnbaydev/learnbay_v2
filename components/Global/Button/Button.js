import React from "react";

const Button = ({ text, passIcon, outline }) => {
  return (
    <button className={outline ? "outLineBtn" : "button"}>
      {text}
      {passIcon}
    </button>
  );
};

<<<<<<< HEAD
export default Button;
=======
export default Button;
>>>>>>> 78a96a30eae499e12fc88f7020357d8963da8032
