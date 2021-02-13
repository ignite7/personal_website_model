// React
import React from "react";

// Css
import "./Intro.css";

function Intro({ title, text }) {
  return (
    <div className="intro">
      <h2 className="intro__title">{title}</h2>
      <p className="intro__text">{text}</p>
    </div>
  );
}

export default Intro;
