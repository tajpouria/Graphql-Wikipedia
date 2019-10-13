import { Profile } from "../../../../generated/graphql";
import { Namespace } from "../constants";

export interface OpenSearchOptions {
    namespace: Namespace;
    limit: number;
    profile: Profile;
    suggest: boolean;
    format: "json";
    warningsaserror: boolean;
}

export type OpenSearchResponse = [string, [string], [string], [string]];

export type OpenSearchParsedResponse = Array<{
    title: string;
    description: string;
    link: string;
}>;
