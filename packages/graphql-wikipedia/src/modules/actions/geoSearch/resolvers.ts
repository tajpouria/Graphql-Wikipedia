import { ActionsResolverMap } from "../../../types/modules/wikipedia";
import { Responder } from "../../../datasources/helpers/Responder";
import { GeoSearchParsedResponse } from "../../../types/datasources/wikipediaAPI/actions/geosearch";

export const resolvers: ActionsResolverMap = {
    Actions: {
        geoSearch: (_parent, { coordinate, options }, ctx) =>
            Responder.send<GeoSearchParsedResponse>(
                ctx.wikipediaAPI.geoSearch,
                [coordinate, options],
            ),
    },
};
