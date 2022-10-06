import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { color } from "@mui/system";
import TabsBar from "../components/profile-containers/tabs-bar";
import Sidebar from "../components/profile-containers/sidebar";

function Profile() {
  const [sidebar, setSidebar] = useState(false);

  const togglesidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <div>
      <TabsBar openSidebar={togglesidebar} />
      <Sidebar sidebar={sidebar} />
    </div>
  );
}

export default Profile;
