import { Order } from "../constants";

export interface CategoriesOptions {
    limit?: number;
    timeStamp?: boolean;
    order?: Order;
}

export interface Category {
    ns: number;
    title: string;
    timestamp?: string;
}

export interface CategoriesResponse {
    query: {
        pages: {
            [id: string]: {
                categories: Category[];
                [key: string]: any;
            };
        };
        [key: string]: any;
    };
    [key: string]: any;
}

export type CategoriesParsedResponse = Category[];

export const categoriesOptionsDefaultValues: CategoriesOptions = {
    limit: 10,
    timeStamp: false,
    order: "ascending",
};
