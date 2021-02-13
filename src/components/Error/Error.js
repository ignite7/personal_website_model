// React
import React from "react";

// Images
import errorGIF from "../../assets/images/error.gif";

// Css
import "./Error.css";

function Error({ text }) {
  return (
    <div className="error">
      <img src={errorGIF} className="error__img" alt="Pacman" />
      <h3 className="error__text">{text || "404 Not Found"}</h3>
    </div>
  );
}

export default Error;
