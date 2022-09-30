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
        title: String
        weight: Int
        sets: Int
        reps: Int
        distance: Int
        time: Int
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
        addExercise(exerciseType: String!, title: String!, weight: Int, sets: Int, reps: Int, distance: Int, time: Int)
    }
    
`;

module.exports = typeDefs;