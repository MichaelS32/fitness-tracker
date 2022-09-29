// need to figure out what local db is gonna be
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;