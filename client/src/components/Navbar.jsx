import React from "react";
import "./css/navbar.css";

function Navbar(props) {
    const tabs = ["Logout", "Profile", "Home"];
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">SoFIT</span>
            </div>
            <div className="navbarRight">
                <ul className="navbar">
                    {tabs.map((tab) => (
                        <li
                        className={
                            props.currentPage === tab ? "nav-item is-active" : "nav-item"
                        }
                        key={tab}
                        >
                            <a
                            href={"#" + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? "nav-link active" : "nav-link"
                            }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;