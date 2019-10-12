export const resolvers = {
    Query: {
        wikipedia: (_parent: any, { language }: any) => {
            console.log(language);
            return language;
        },
    },
};
