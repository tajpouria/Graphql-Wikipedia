import { ActionsResolverMap } from "../../../types/modules/wikipedia";
import { Responder } from "../../../datasources/helpers/Responder";
import { ParsedCategoriesResponse } from "../../../types/datasources/wikipediaAPI/actions/categories";

export const resolvers: ActionsResolverMap = {
    Actions: {
        categories: (_parent, { title, options }, ctx) =>
            Responder.send<ParsedCategoriesResponse>(
                ctx.wikipediaAPI.categories,
                [title, options],
            ),
    },
};
