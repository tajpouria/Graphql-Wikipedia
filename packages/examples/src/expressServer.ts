import express from "express";
import { WikipediaAPI } from "@tajpouria/graphql-wikipedia";

const app = express();

const wikipediaAPI = new WikipediaAPI();

app.get("/categories", async (_req, res) => {
    const data = await wikipediaAPI.categories("Albert Einstein", {
        limit: 12,
        order: "descending",
    });
    res.json(data);
});

app.get("/openSearch", async (_req, res) => {
    const data = await wikipediaAPI.openSearch("Albert Einstein", {
        limit: 10,
        profile: "fast-fuzzy",
    });
    res.json(data);
});

app.get("/random", async (_req, res) => {
    const data = await wikipediaAPI.random();
    res.json(data);
});

app.get("/geoSearch", async (_req, res) => {
    const data = await wikipediaAPI.geoSearch(
        {
            latitude: 32.4279,
            longitude: 53.688,
        },
        { radius: 10000, coordinatesKind: "all" },
    );
    res.json(data);
});

const port = process.env.EXPRESS_SERVER;

if (port) {
    app.listen({ port }, () =>
        console.info(`\n🚀 express-server is now running on port ${port}...`),
    );
} else {
    throw new Error(
        `FATAL ERROR: while trying to run server on port ${port}...`,
    );
}

export { app };
