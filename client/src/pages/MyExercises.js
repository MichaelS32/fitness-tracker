import React from "react";

import MyExerciseList from "../components/myExercise-container/MyExerciseList";

function MyExercises() {
  return (
    <div>
      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <MyExerciseList />
        </div>
      </div>
    </div>
  );
}

export default MyExercises;
