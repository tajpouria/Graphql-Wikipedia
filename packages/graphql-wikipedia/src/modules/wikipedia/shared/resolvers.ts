import {
    QueryResolvers,
    ResolverFn,
    ResolverTypeWrapper,
    Actions,
    QueryWikipediaArgs,
    StitchingResolver,
} from "../../../generated/graphql";
import { ActionsResolverMap } from "../../../types/modules/wikipedia";
import { WikipediaAPI } from "../../../datasources/wikipediaAPI/WikipediaAPI";
import { WikipediaApiLanguage } from "../../../types/datasources/wikipediaAPI/constants";

interface RootResolverMap {
    Query: QueryResolvers;
}

export const resolvers: RootResolverMap & ActionsResolverMap = {
    Actions: {},
    Query: {
        wikipedia: (_root, { language }, ctx) => {
            ctx.wikipediaAPI = new WikipediaAPI(
                WikipediaApiLanguage[language!],
            );

            return resolvers.Actions as
                | ResolverFn<
                      ResolverTypeWrapper<Actions>,
                      {},
                      any,
                      QueryWikipediaArgs
                  >
                | StitchingResolver<
                      ResolverTypeWrapper<Actions>,
                      {},
                      any,
                      QueryWikipediaArgs
                  >
                | undefined;
        },
    },
};
