import { ActionsResolverMap } from "../../../types/modules/wikipedia";
import { Responder } from "../../../datasources/helpers/Responder";

export const resolvers: ActionsResolverMap = {
    Actions: {
        opensearch: async (_root, { searchString, openSearchOptions }, ctx) =>
            Responder.send(ctx.wikipediaAPI.openSearch, [
                searchString,
                openSearchOptions,
            ]),
    },
};
