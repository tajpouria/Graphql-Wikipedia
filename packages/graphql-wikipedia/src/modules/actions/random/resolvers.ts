import { ActionsResolverMap } from "../../../types/modules/wikipedia";
import { Responder } from "../../../datasources/helpers/Responder";
import { RandomParsedResponse } from "../../../types/datasources/wikipediaAPI/actions/Random";

export const resolvers: ActionsResolverMap = {
    Actions: {
        random: (_root, { options }, ctx) =>
            Responder.send<RandomParsedResponse>(ctx.wikipediaAPI.random, [
                options,
            ]),
    },
};
