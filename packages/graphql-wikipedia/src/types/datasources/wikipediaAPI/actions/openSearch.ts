import { Profile, ResponseDataFormat } from "../../../../generated/graphql";
import { Namespace } from "../constants";

export interface OpenSearchOptions {
    namespace: Namespace;
    limit: number;
    profile: Profile;
    suggest: boolean;
    format: ResponseDataFormat;
    warningsaserror: boolean;
}
