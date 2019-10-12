import { WikipediaApiLanguage } from "../../types/datasources/wikipediaAPI/constants";
import { WikiEndpoints } from "../../types/datasources/prefixes";

export class WikiMediaURLResolver {
    public static wikipedia = (
        language: WikipediaApiLanguage,
    ): WikiEndpoints => {
        switch (language) {
            case WikipediaApiLanguage.en:
            default:
                return WikiEndpoints.EnglishWikipediaAPI;
            case WikipediaApiLanguage.nl:
                return WikiEndpoints.DutchWikipediaAPI;
        }
    };
}
