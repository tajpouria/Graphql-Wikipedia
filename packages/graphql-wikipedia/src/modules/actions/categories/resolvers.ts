import { ActionsResolverMap } from "../../../types/modules/wikipedia";
import { Responder } from "../../../datasources/helpers/Responder";
import { CategoriesParsedResponse } from "../../../types/datasources/wikipediaAPI/actions/categories";

export const resolvers: ActionsResolverMap = {
    Actions: {
        categories: (_parent, { title, options }, ctx) =>
            Responder.send<CategoriesParsedResponse>(
                ctx.wikipediaAPI.categories,
                [title, options],
            ),
    },
};
