import React from "react";
import { useQuery } from "@apollo/client";

import TabsBar from "../components/profile-containers/tabs-bar";
import AddWorkout from "../components/AddWorkout";

function Profile() {
  return (
    <>
      <div>
        <TabsBar />
      </div>
      <div className="homeContainer">
        <AddWorkout></AddWorkout>
      </div>
    </>
  );
}

export default Profile;
