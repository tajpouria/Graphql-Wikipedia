import { mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from "path";
import fs from "fs";
import glob from "glob";

const pathToModules = path.join(__dirname, "../modules");

export const graphqlTypes = mergeTypes(
    glob
        .sync(`${pathToModules}/**/*.graphql`)
        .map(x => fs.readFileSync(x, { encoding: "utf8" })),
);

export const resolvers = mergeResolvers(
    glob
        .sync(`${pathToModules}/**/resolvers.?s`)
        .map(resolver => require(resolver).resolvers),
);
