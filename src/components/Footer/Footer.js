// React
import React from "react";

// Icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

// Css
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text">
        <Link to="/" className="link">
          <h3>
            LOGO &copy;&nbsp;
            {new Date().getFullYear()}
          </h3>
        </Link>
      </div>
      <div className="footer__social-media">
        <a href="https://github.com/{USER}" className="link">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/{USER}"
          className="link"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
