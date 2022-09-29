const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: "Username Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password Required",
        minlength: 8,
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/],
    },
    userCreated: {
        type: Date,
        default: Date.now,
    },
})