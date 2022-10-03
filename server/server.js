const express = require('express');
const path = require('path');
const { ApolloServer, graphqlExpress } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

// Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

// Express Server
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// If in production, serve client build as static asset
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

// Creates new instance of Apollo Server with graphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// Calls async apollo start function
startApolloServer(typeDefs, resolvers);