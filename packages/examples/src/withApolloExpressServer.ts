import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";

(async () => {
    const app = express();

    const server = new ApolloServer({ schema });

    server.applyMiddleware({ app });

    const port = process.env.DEV_PORT;

    if (port) {
        app.listen({ port }, (): void =>
            console.log(
                `\n🚀 apollo-express-server is now running on port ${port}...`
            )
        );
    } else {
        throw new Error(
            `FATAL ERROR: while trying to run server on port ${port}...`
        );
    }
})();
