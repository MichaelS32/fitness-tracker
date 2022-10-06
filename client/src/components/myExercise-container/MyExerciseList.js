import React from "react";
import { Link } from "react-router-dom";

const MyExerciseList = ({ Exercise, title }) => {
  // try {

  // } catch (error) {
  //   console.warn()
  // }
  if (!Exercise.length) {
    return <h3>No Exercises have been posted yet...</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {Exercise &&
        Exercise.map((Exercise) => (
          <div key={Exercise._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${Exercise.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {Exercise.username}
              </Link>{" "}
              Posted on {Exercise.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/savedExercises/${Exercise._id}`}>
                <p>{Exercise.exerciseType}</p>
                <p>{Exercise.weight}</p>
                <p>{Exercise.sets}</p>
                <p>{Exercise.reps}</p>
                <p>{Exercise.distance}</p>
                <p>{Exercise.time}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyExerciseList;
