import { ActionsResolverMap } from "../../../types/modules/wikipedia";

export const resolvers: ActionsResolverMap = {
    Actions: {
        opensearch: async (_root, { searchString, openSearchOptions }, ctx) => {
            try {
                const response = await ctx.wikipediaAPI.openSearch(
                    searchString,
                    openSearchOptions,
                );

                console.log(openSearchOptions);

                if (response.error) {
                    console.error(response.error);
                    throw new Error(response.error);
                }

                return response;
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        },
    },
};
