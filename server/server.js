const express = require('express');
const path = require('path');
const { ApolloServer, graphqlExpress } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const mongoose = require('mongoose');

const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const db = require('./config/connection');

const PORT = process.env.PORT || 5000;

// adding new attempt
async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        cache: bounded,
        context: authMiddleware
    });

    await apolloServer.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    apolloServer.applyMiddleware(app)

    app.use((req, res) => {
        res.send('Hello From express apollo server')
    })

    // If in production, serve client build as static asset
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
    }

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    })

    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sofit_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Mongoose Connected');
    app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
}
startServer();

// old attempt below

// // Express Server
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // If in production, serve client build as static asset
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// })

// // Creates new instance of Apollo Server with graphQL schema
// const startApolloServer = async (typeDefs, resolvers) => {
//     // Apollo Server
//     const server = new ApolloServer({
//         typeDefs,
//         resolvers,
//         context: authMiddleware,
//         cache: 'bounded',
//         plugins: [
//             ApolloServerPluginLandingPageLocalDefault({ embed: true }),
//         ],
//     });
//     await server.start();
//     server.applyMiddleware({ app });

//     db.once('open', () => {
//         app.listen(PORT, () => {
//             console.log(`API server running on port ${PORT}!`);
//             console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//         })
//     })
// };

// // Calls async apollo start function
// startApolloServer(typeDefs, resolvers);