import { OpenSearchOptions } from "../../types/datasources/wikipediaAPI/actions/openSearch";
import { RandomOptions } from "../../types/datasources/wikipediaAPI/actions/Random";

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
