import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import User from "../pages/Profile";
import Login from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Header() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "User":
        return <User />;

      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
