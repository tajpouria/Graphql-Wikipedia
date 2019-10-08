import {
    makeExecutableSchema,
    ITypeDefinitions,
    IResolvers
} from "graphql-tools";
import { merge } from "lodash";

import { buildWikiTypeDefsAndResolvers } from "./buildWikiTypeDefsAndResolvers";

export interface IWithWikiSchemaDefinitions<TContext = any> {
    typeDefs: ITypeDefinitions;
    resolvers: IResolvers<any, TContext> | Array<IResolvers<any, TContext>>;
}

export const withWikiSchema = async ({
    typeDefs,
    resolvers
}: IWithWikiSchemaDefinitions) => {
    const {
        typeDefs: _typeDefs,
        resolvers: _resolvers
    } = await buildWikiTypeDefsAndResolvers();

    return makeExecutableSchema({
        typeDefs: [_typeDefs, typeDefs],
        resolvers: merge(_resolvers, resolvers)
    });
};
