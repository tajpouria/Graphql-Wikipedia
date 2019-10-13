import {
    QueryResolvers,
    ResolverTypeWrapper,
    Actions,
} from "../../generated/graphql";
import { ActionsResolverMap } from "../../types/modules/wikipedia";
import { WikipediaAPI } from "../../datasources/wikipediaAPI/WikipediaAPI";
import { WikipediaApiLanguage } from "../../types/datasources/wikipediaAPI/constants";
import { WikimediaActionsResponseParser } from "../../datasources/helpers/WikmediaActinosResponseParser";

interface RootResolverMap {
    Query: QueryResolvers;
}

export const resolvers: RootResolverMap & ActionsResolverMap = {
    Actions: {},
    Query: {
        wikipedia(_root, { language }, ctx) {
            ctx.wikipediaAPI = new WikipediaAPI(
                WikipediaApiLanguage[language!],
            );

            ctx.responseParser = new WikimediaActionsResponseParser();

            return resolvers.Actions as
                | Actions
                | Promise<Actions>
                | Promise<ResolverTypeWrapper<Actions>>;
        },
    },
};
