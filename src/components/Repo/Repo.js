// React
import React from "react";

// Components
import ExtenalLink from "../Button/ExternalLink";

// Css
import "./Repo.css";

function Repo({ repo }) {
  return (
    <div className="repo">
      <h3 className="repo__title">{repo.name.toUpperCase()}</h3>
      <p className="repo__text">{repo.description}</p>
      <ExtenalLink text="See more" to={repo.html_url} externalLink />
    </div>
  );
}

export default Repo;
