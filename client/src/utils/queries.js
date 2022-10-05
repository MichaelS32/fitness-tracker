import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      exercises {
        _id
        exerciseType
        title
        createdAt
      }
    }
  }
`;

export const QUERY_EXERCISES = gql`
  query exercises($username: String) {
    exercises(username: $username) {
      _id
      exerciseType
      title
      weight
      sets
      reps
      distance
      time
      username
      createdAt
    }
  }
`;

export const QUERY_EXERCISE = gql`
  query exercise($id: ID!) {
    exercise(_id: $id) {
      _id
      exerciseType
      title
      weight
      sets
      reps
      distance
      time
      username
      createdAt
    }
  }
`