const { User, Exercise, Goal } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user_id })
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError("You are not logged in");
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('You have entered incorrect credentials.')
            }
            const correctPw = await user.usCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('You have entered incorrect credentials.')
            }
            const token = signToken(user);
            return { token, user };
        },
        // Go over this section with the group
        // addWorkout: async (parent, { workoutType, workoutMeasurement, context }) => {
        //     if (context.user) {
        //         const updatedUser = await User.findOneAndUpdate(

        //         )
        //     }
        // }
    }
}