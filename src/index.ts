import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildFederatedSchema } from "@apollo/federation";

import { buildSchema } from "./utils/buildSchema";

(async () => {
    const app = express();

    const schema = (await buildSchema()) as any;

    const server = new ApolloServer({ schema });

    server.applyMiddleware({ app });

    const port = process.env.DEV_PORT;

    if (port) {
        app.listen({ port }, (): void =>
            console.log(`\n🚀 GraphQL is now running on port ${port}...`)
        );
    } else {
        throw new Error(
            `FATAL ERROR: while try to running server on port ${port}...`
        );
    }
})();
