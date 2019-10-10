import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildWikiTypeDefsAndResolvers } from "@tajpouria/graphql-wikipedia";

(async () => {
    const app = express();

    const { typeDefs, resolvers } = await buildWikiTypeDefsAndResolvers();

    const server = new ApolloServer({ typeDefs, resolvers });

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
