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
                    type: Number,

                },
                sets: {
                    type: Number,

                },
                reps: {
                    type: Number,

                },
                // cardio section
                distance: {
                    type: Number,

                },
                time: {
                    type: Number,

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

const Exercise = model("Exercise", ExerciseSchema);

module.exports = Exercise;