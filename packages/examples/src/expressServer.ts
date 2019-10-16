import express, { Response } from "express";
import { WikipediaAPI } from "@tajpouria/graphql-wikipedia";

const app = express();

const wikipediaAPI = new WikipediaAPI();

app.get("/openSearch", async (_req, res: Response) => {
    const data = await wikipediaAPI.openSearch("graphql", {
        limit: 10,
        profile: "fast-fuzzy",
    });
    res.json(data);
});

app.get("/random", async (_req, res: Response) => {
    const data = await wikipediaAPI.random();
    res.json(data);
});

const port = process.env.EXPRESS_SERVER;

if (port) {
    app.listen({ port }, (): void =>
        console.info(`\n🚀 express-server is now running on port ${port}...`),
    );
} else {
    throw new Error(
        `FATAL ERROR: while trying to run server on port ${port}...`,
    );
}
