const express = require('express');
const path = require('path');
const { ApolloServer, graphqlExpress } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const mongoose = require('mongoose');


const db = require('./config/connection');

const PORT = process.env.PORT || 5000;

// adding new attempt
async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    });

    await apolloServer.start();

    // If in production, serve client build as static asset
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    })

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    apolloServer.applyMiddleware({ app })


    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sofit_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Mongoose Connected');
    app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
}
startServer();