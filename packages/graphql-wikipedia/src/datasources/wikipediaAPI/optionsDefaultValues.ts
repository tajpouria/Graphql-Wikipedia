import {
    OpenSearchOptions,
    Profile,
} from "../../types/datasources/wikipediaAPI/actions/openSearch";
import { ResponseDateFormat } from "../../types/datasources/wikipediaAPI/constants";

export const openSearchOptionsDefaultValues: OpenSearchOptions = {
    namespace: 0,
    limit: 10,
    profile: Profile.engineAutoselect,
    suggest: true,
    format: ResponseDateFormat.json,
    warningsaserror: false,
};
