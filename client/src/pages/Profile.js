import React from "react";
import { useQuery } from "@apollo/client";

import Feed from "../components/home-containers/Feed";
import WorkoutList from "../components/home-containers/Workout-list";
import Hero from "../components/home-containers/hero";
import AddWorkout from "../components/AddWorkout";

function Profile() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="homeContainer">
        <AddWorkout></AddWorkout>
      </div>
    </>
  );
}

export default Profile;
