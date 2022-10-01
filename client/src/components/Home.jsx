import React from "react";
import { useQuery } from "@apollo/client"
import "./css/home.css";
import Feed from "./home-containers/Feed";
import WorkoutList from "./home-containers/Workout-list";
import Hero from "./home-containers/hero";

function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="homeContainer">
        <Feed />
        <WorkoutList />
      </div>
    </>
  )
}

export default Home;
