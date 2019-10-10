import { WikipediaAPILanguage } from "../../types/datasources/wikipediaAPI/constants";
import { WikiEndpoints } from "../../types/datasources/prefixes";

export class WikiMediaURLResolver {
    public static wikipedia = (
        language: WikipediaAPILanguage,
    ): WikiEndpoints => {
        switch (language) {
            case WikipediaAPILanguage.english:
            default:
                return WikiEndpoints.EnglishWikipediaAPI;
            case WikipediaAPILanguage.dutch:
                return WikiEndpoints.DutchWikipediaAPI;
        }
    };
}
