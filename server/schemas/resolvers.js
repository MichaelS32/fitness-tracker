const { User, Exercise, Goal } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('exercises');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('exercises');
        },
        exercises: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Exercise.find(params).sort({ createdAt: -1 });
        },
        exercise: async (parent, { _id }) => {
            return Exercise.findOne({ _id });
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
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('You have entered incorrect credentials.')
            }
            const token = signToken(user);
            return { token, user };
        },
        // Go over this section with the group
        addExercise: async (parent, { args, username }) => {
            const exercise = await Exercise.create({ ...args });

            await User.findOneAndUpdate(
                { username: username },
                { $addToSet: { exercises: exercise } },
                { new: true }
            )
            return exercise;



        },
        removeExercise: async (parent, { exerciseId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { exerciseId: Exercise._id } },
                    { new: true }
                )
                return updatedUser;
            }
            throw new AuthenticationError('You must be logged in to save an exercise!')
        }
    }

}

module.exports = resolvers;