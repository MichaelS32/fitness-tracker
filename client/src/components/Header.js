import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className="navbarContainer">
        <div className="navbarLeft">
          <Link to="/">
            <h1 className="logo">SoFIT</h1>
          </Link>
        </div>

        <div className="navbarRight">
          <nav className="navbar">
            {Auth.loggedIn() ? (
              <>
                <Link to="/profile" className='nav-item'>My Exercises</Link>
                <a href="/" onClick={logout} className='nav-item'>
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link to="/login" className='nav-item'>Login</Link>
                <Link to="/signup" className='nav-item'>Signup</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
