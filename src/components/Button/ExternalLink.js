// React
import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "./Button";

function ExternalLink({ text, to, download, externalLink }) {
  return (
    <>
      {externalLink ? (
        <a href={to} download={download || ""} className="link">
          <Button text={text} />
        </a>
      ) : (
        <Link to={to} className="link">
          <Button text={text} handleSubmit={false} />
        </Link>
      )}
    </>
  );
}

export default ExternalLink;
