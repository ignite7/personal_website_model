// React
import React from "react";

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
