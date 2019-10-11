export const resolvers = {
    Query: {
        opensearch: (_parent: any, { searchString, options }: any) => {
            console.log(searchString, options);
            return searchString;
        },
    },
};
