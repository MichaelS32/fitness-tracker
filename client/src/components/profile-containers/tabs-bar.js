import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../css/tabs.css";

const TabsBar = ({ openSidebar }) => {
  return (
    <div className="tabs">
      <ul>
        <li>
          <a href="/MyExercises">My Exercises</a>
        </li>
        <li>
          <a href="/SavedExercises">Saved Exercises</a>
        </li>
      </ul>
      <div className="burger" onClick={openSidebar}>
        <AiOutlineMenu size={28} />
      </div>
    </div>
  );
};

export default TabsBar;
