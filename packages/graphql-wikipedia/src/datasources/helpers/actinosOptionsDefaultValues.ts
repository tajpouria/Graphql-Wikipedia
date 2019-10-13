import { OpenSearchOptions } from "../../types/datasources/wikipediaAPI/actions/openSearch";
import { Profile } from "../../generated/graphql";

export const openSearchOptionsDefaultValues: OpenSearchOptions = {
    namespace: 0,
    limit: 10,
    profile: Profile.EngineAutoselect,
    suggest: true,
    format: "json",
    warningsaserror: false,
};
