import { OpenSearchOptions } from "../../types/datasources/wikipediaAPI/actions/openSearch";
import { RandomOptions } from "../../types/datasources/wikipediaAPI/actions/Random";
import { CategoriesOptions } from "../../types/datasources/wikipediaAPI/actions/categories";

export const categoriesOptionsDefaultValues: CategoriesOptions = {
    limit: 10,
    timeStamp: false,
    order: "ascending",
};

export const openSearchOptionsDefaultValues: OpenSearchOptions = {
    namespace: 0,
    limit: 10,
    profile: "engine_autoselect",
    suggest: true,
    warningsaserror: false,
};

export const randomOptionsDefaultValues: RandomOptions = {
    namespace: "*",
    filterRedirect: "nonredirects",
    limit: 10,
};
