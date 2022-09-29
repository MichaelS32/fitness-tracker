const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        exercises: [Exercise]
        goals: [Goal]
    }
    type Exercise {
        _id: ID
        exerciseType: String
        exerciseMeasurement: Int
        exercise
        Weight: Int
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
        addWorkout(workoutType: String!, workoutMeasurement: Int!,)
    }
    
`;

module.exports = typeDefs;