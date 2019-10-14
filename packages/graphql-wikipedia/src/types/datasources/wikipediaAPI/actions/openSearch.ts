import { Namespace, Profile } from "../constants";

export interface OpenSearchOptions {
    namespace?: Namespace;
    limit?: number;
    profile?: Profile;
    suggest?: boolean;
    readonly format?: "json";
    warningsaserror?: boolean;
}

export type OpenSearchResponse = [string, [string], [string], [string]];

export type OpenSearchParsedResponse = Array<{
    title: string;
    description: string;
    link: string;
}>;
