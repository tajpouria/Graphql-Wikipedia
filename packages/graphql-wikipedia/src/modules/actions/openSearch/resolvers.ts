import { ActionsResolverMap } from "../../../types/modules/wikipedia";
import { Responder } from "../../../datasources/helpers/Responder";
import {
    OpenSearchResponse,
    OpenSearchParsedResponse,
} from "../../../types/datasources/wikipediaAPI/actions/openSearch";

export const resolvers: ActionsResolverMap = {
    Actions: {
        openSearch: (_root, { searchString, options }, ctx) =>
            Responder.send<OpenSearchResponse, OpenSearchParsedResponse>(
                ctx.wikipediaAPI.openSearch,
                [searchString, options],
                ctx.responseParser.openSearch,
            ),
    },
};
