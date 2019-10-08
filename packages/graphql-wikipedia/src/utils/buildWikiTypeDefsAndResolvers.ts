import { buildTypeDefsAndResolvers } from "type-graphql";

export const buildWikiTypeDefsAndResolvers = async () =>
    await buildTypeDefsAndResolvers({
        resolvers: [__dirname + "../modules/**/*.ts"]
    });
