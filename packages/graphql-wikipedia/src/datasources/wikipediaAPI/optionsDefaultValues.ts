import { OpenSearchOptions } from "../../types/datasources/wikipediaAPI/actions/openSearch";

export const openSearchOptionsDefaultValues: OpenSearchOptions = {
    namespace: 0,
    limit: 10,
    profile: "engine_autoselect",
    suggest: true,
    format: "json",
    warningsaserror: false,
};
