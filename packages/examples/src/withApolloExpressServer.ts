import "dotenv/config";
import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { graphqlTypes, resolvers } from "@tajpouria/graphql-wikipedia";

(() => {
    const app = express();

    const server = new ApolloServer({
        schema: makeExecutableSchema({ resolvers, typeDefs: graphqlTypes }),
    });

    server.applyMiddleware({ app });

    const port = process.env.APOLLO_EXPRESS_SERVER;

    if (port) {
        app.listen({ port }, (): void =>
            console.info(
                `\n🚀 apollo-express-server is now running on port ${port}...`,
            ),
        );
    } else {
        throw new Error(
            `FATAL ERROR: while trying to run server on port ${port}...`,
        );
    }
})();
