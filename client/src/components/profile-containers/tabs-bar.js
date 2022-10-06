import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "../css/tabs.css";

function TabsBar() {
  return (
    <div className="tabs">
      <div className="tab-list">
        <Link to="/myexercises" className="tab-item">
          My Exercises
        </Link>
        <Link to="/savedexercises" className="tab-item">
          Saved Exercises
        </Link>
      </div>
      <div className="burger">
        <AiOutlineMenu size={28} />
      </div>
    </div>
  );
}

export default TabsBar;
