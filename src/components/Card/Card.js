// React
import React from "react";
import { Link } from "react-router-dom";

// Css
import "./Card.css";

// Components
import ExternalLink from "../Button/ExternalLink";

function Card({ title, text, textButton, to, externalLink }) {
  return (
    <div className="card">
      <Link to={to} className="link">
        <h2 className="card__title">{title}</h2>
      </Link>
      <p className="card__text">{text}</p>
      <ExternalLink text={textButton} to={to} externalLink={externalLink} />
    </div>
  );
}

export default Card;
