import {
    QueryResolvers,
    ResolverTypeWrapper,
    Actions,
} from "../../generated/graphql";
import { ActionsResolverMap } from "../../types/modules/wikipedia";
import { WikipediaAPI } from "../../datasources/wikipediaAPI/WikipediaAPI";

interface RootResolverMap {
    Query: QueryResolvers;
}

export const resolvers: RootResolverMap & ActionsResolverMap = {
    Actions: {},
    Query: {
        wikipedia(_root, { language }, ctx) {
            ctx.wikipediaAPI = new WikipediaAPI(language!);

            return resolvers.Actions as
                | Actions
                | Promise<Actions>
                | Promise<ResolverTypeWrapper<Actions>>;
        },
    },
};
