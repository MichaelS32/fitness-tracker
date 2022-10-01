import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise($exerciseType: String!, $title: String!, $weight: Int, $sets: Int, $reps: Int, $distance: Int, $time: Int) {
    addExercise(exercistType: $exerciseType, title: $title, weight: $weight, sets: $sets, reps: $reps, distance: $distance, time: $time) {
        _id
        exerciseType
        title
        weight
        sets
        reps
        distance
        time
        createdAt
    }
  }
`;

export const REMOVE_EXERCISE = gql`
  mutation removeExercise($id: ID!) {
    removeExercise(id: $id) {
        _id
        username
        exercises {
            _id
            title
        }
    }
  }
`;