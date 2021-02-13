// React
import React, { useState } from "react";

// Icons
import { RiArrowDropRightLine } from "react-icons/ri";

// Css
import "./Button.css";

function Button({ text, handleSubmit }) {
  const [classIcon, setClassIcon] = useState("button__icon");

  const handleMouseEnter = () => {
    setClassIcon("button__icon active");
  };

  const handleMouseLeave = () => {
    setClassIcon("button__icon");
  };

  return (
    <button
      type={handleSubmit ? "submit" : "button"}
      className="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleSubmit || null}
    >
      <div className="button__text">
        <p>{text}</p>
      </div>
      <div className={classIcon}>
        <RiArrowDropRightLine className="button__arrow" />
      </div>
    </button>
  );
}

export default Button;
