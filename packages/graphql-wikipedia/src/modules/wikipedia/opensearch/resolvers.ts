import { ActionsResolverMap } from "../../../types/modules/wikipedia";
import { Responder } from "../../../datasources/helpers/Responder";
import {
    OpenSearchResponse,
    OpenSearchParsedResponse,
} from "../../../types/datasources/wikipediaAPI/actions/openSearch";

export const resolvers: ActionsResolverMap = {
    Actions: {
        opensearch: async (_root, { searchString, openSearchOptions }, ctx) =>
            Responder.send<OpenSearchResponse, OpenSearchParsedResponse>(
                ctx.wikipediaAPI.openSearch,
                [searchString, openSearchOptions],
                ctx.responseParser.openSearch,
            ),
    },
};
