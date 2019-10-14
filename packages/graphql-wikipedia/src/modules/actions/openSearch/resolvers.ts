import { ActionsResolverMap } from "../../../types/modules/wikipedia";
import { Responder } from "../../../datasources/helpers/Responder";
import { OpenSearchParsedResponse } from "../../../types/datasources/wikipediaAPI/actions/openSearch";

export const resolvers: ActionsResolverMap = {
    Actions: {
        openSearch: (_root, { searchString, options }, ctx) =>
            Responder.send<OpenSearchParsedResponse>(
                ctx.wikipediaAPI.openSearch,
                [searchString, options],
            ),
    },
};
