import React from "react";
import "../css/workout-list.css"
import WorkoutCard from "./workoutlist/WorkoutCard";

function WorkoutList() {
    return (
        <div className="workoutlist-box">
            <div className="workoutlist">
            <WorkoutCard />
        </div>
            </div>
    )
}

export default WorkoutList;