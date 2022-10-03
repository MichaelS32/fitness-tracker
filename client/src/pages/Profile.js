import React from "react";
import { useQuery } from "@apollo/client"

import Feed from "../components/home-containers/Feed";
import WorkoutList from "../components/home-containers/Workout-list";
import Hero from "../components/home-containers/hero";

function Profile() {
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

export default Profile;