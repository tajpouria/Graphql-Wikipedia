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

export type OpenSearchResponse = [string, [string], [string], [string]];

export type OpenSearchParsedResponse = Array<{
    result: string;
    resultDescriptions: string;
    resultLink: string;
}>;
