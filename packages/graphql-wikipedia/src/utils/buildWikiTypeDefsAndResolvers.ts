import { buildTypeDefsAndResolvers } from "type-graphql";

import { HelloResolver } from "../modules/actions/search";

export const buildWikiTypeDefsAndResolvers = async () =>
    await buildTypeDefsAndResolvers({
        resolvers: [HelloResolver]
    });
