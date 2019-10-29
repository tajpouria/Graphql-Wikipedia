import { Namespace, Profile } from "../constants";

export interface OpenSearchOptions {
    namespace?: Namespace;
    limit?: number;
    profile?: Profile;
    suggest?: boolean;
    warningsaserror?: boolean;
}

export type OpenSearchResponse = [string, [string], [string], [string]];

export type OpenSearchParsedResponse =
    | Array<{
          title: string;
          description: string;
          link: string;
      }>
    | [];

export const openSearchOptionsDefaultValues: OpenSearchOptions = {
    namespace: 0,
    limit: 10,
    profile: "engine_autoselect",
    suggest: true,
    warningsaserror: false,
};
