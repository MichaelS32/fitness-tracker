const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ExerciseSchema = new Schema(
    {
        day: { type: Date, default: () => new Date() },
        exercise: [
            {
                exerciseType: {
                    type: String,
                    required: true,
                },
                title: {
                    type: String,
                    required: true,
                },
                // resistance section
                weight: {
                    type: String,

                },
                sets: {
                    type: String,

                },
                reps: {
                    type: String,

                },
                // cardio section
                distance: {
                    type: String,

                },
                time: {
                    type: String,

                },
                username: {
                    type: String,
                    required: true
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (createdAtVal) => dateFormat(createdAtVal),
                },
            },
        ],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Exercise = model("exercise", ExerciseSchema);

module.exports = Exercise;