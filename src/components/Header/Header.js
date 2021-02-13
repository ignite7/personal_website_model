// React
import React from "react";
import { Link } from "react-router-dom";

// Css
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="link">
        <h1 className="header__text">LOGO</h1>
      </Link>
    </header>
  );
}

export default Header;
