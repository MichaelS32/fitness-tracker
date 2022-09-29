const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        workouts: [Workout]
    }
    type Workout {
        _id: ID
        workoutType: String
        workoutMeasurement: Int
        workoutWeight: Int
        afterWorkoutDescription: String
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        login(email: Sting!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addWorkout(workoutType: Sting!, workoutMeasurement: Int!,)
    }
    
`