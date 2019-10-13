import { WikipediaApiLanguage } from "../../types/datasources/wikipediaAPI/constants";
import { WikiMediaURLResolver } from "../helpers/WikiMediaURLResolver";

import { WikimediaActions } from "../helpers/WikimediaActinos";

export class WikipediaAPI extends WikimediaActions {
    constructor(
        private language: WikipediaApiLanguage = WikipediaApiLanguage.en,
    ) {
        super();
    }

    baseUrl = WikiMediaURLResolver.wikipedia(this.language);
}
