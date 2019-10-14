import { WikipediaApiLanguage } from "../../types/datasources/wikipediaAPI/constants";

import { WikimediaActions } from "../helpers/WikimediaActions";
import { WikiMediaURLResolver } from "../helpers/WikimediaURLResolver";

export class WikipediaAPI extends WikimediaActions {
    constructor(private language: WikipediaApiLanguage = "en") {
        super();
    }

    baseUrl = WikiMediaURLResolver.wikipedia(this.language);
}
