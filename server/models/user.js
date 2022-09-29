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
});

UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// compares and validates password for logging in
UserSchema.pre('save', async function (password) {
    return bcrypt.compare(password, this.password);
});

const User = model('User', UserSchema);

module.exports = User;