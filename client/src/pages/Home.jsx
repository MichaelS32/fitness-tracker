import React from "react";
import { useQuery } from "@apollo/client"
import "../components/css/home.css";
import Feed from "../components/home-containers/Feed";
import WorkoutList from "../components/home-containers/Workout-list";
import Hero from "../components/home-containers/hero";

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
