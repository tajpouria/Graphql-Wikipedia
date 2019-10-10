import { makeExecutableSchema, IResolvers, ITypedef } from "graphql-tools";
import { merge } from "lodash";

import { buildWikiTypeDefsAndResolvers } from "./buildWikiTypeDefsAndResolvers";

export interface IWithWikiSchemaDefinitions<TContext = any> {
    typeDefs: ITypedef | ITypedef[];
    resolvers: IResolvers<any, TContext> | Array<IResolvers<any, TContext>>;
}

export const withWikiSchema = async ({
    typeDefs,
    resolvers,
}: IWithWikiSchemaDefinitions) => {
    const {
        typeDefs: wikiTypeDefs,
        resolvers: wikiResolvers,
    } = await buildWikiTypeDefsAndResolvers();

    const schema = {
        typeDefs: Array.isArray(typeDefs)
            ? [...typeDefs, wikiTypeDefs]
            : [typeDefs, wikiTypeDefs],
        resolvers: merge(resolvers, wikiResolvers),
    };

    return makeExecutableSchema(schema);
};
