type Namespace =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 100
    | 101
    | 108
    | 109
    | 118
    | 119
    | 446
    | 447
    | 710
    | 711
    | 828
    | 829
    | 2300
    | 2301
    | 2302
    | 2303;

type Profile =
    | "strict" // Strict profile with few punctuation characters removed but diacritics and stress marks are kept,
    | "normal" // Few punctuation characters, some diacritics and stopwords removed.
    | "fuzzy" // Similar to normal with typo correction (two typos supported).
    | "fast-fuzzy" // Experimental fuzzy profile (may be removed at any time).
    | "classic" // Classic prefix, few punctuation characters and some diacritics removed.
    | "engine_autoselect"; // Let the search engine decide on the best profile to use.

type Format = "json" | "jsonfm" | "xml" | "xmlfm";

export interface OpenSearchOptions {
    namespace: Namespace;
    limit: number;
    profile: Profile;
    suggest: boolean;
    format: Format;
    warningsaserror: boolean;
}
