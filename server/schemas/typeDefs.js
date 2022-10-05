const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        exercises: [Exercise]
        
    }
    type Exercise {
        _id: ID
        exerciseType: String
        title: String
        weight: String
        sets: String
        reps: String
        distance: String
        time: String
        username: String
        createdAt: String
    }
    type Query {
        me: User
        user(username: String!): User
        exercises(username: String): [Exercise]
        exercise(_id: ID!): Exercise
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addExercise(exerciseType: String!, title: String!, weight: String, sets: String, reps: String, distance: String, time: String): Exercise
        removeExercise(Exercise: ID): User
    }
    
`;

module.exports = typeDefs;