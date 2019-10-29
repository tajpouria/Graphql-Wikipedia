import { Namespace } from "../constants";

export type FilterRedirect = "all" | "redirects" | "nonredirects";

export interface RandomOptions {
    namespace?: Namespace;
    filterRedirect?: FilterRedirect;
    limit?: number;
}

interface randomArticles {
    id: number;
    ns: number;
    title: string;
}

export interface RandomResponse {
    query: {
        random: randomArticles[];
    };
}

export type RandomParsedResponse = randomArticles[] | [];

export const randomOptionsDefaultValues: RandomOptions = {
    namespace: "*",
    filterRedirect: "nonredirects",
    limit: 10,
};
