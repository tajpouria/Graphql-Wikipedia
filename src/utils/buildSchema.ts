import { buildSchema as _buildSchema } from "type-graphql";

import { TestResolver } from "../modules/test";

export const buildSchema = async () =>
    await _buildSchema({
        resolvers: [TestResolver]
    });
