import { WikipediaApiLanguage } from "../../types/datasources/wikipediaAPI/constants";
import { WikiMediaURLResolver } from "../helpers/WikiMediaURLResolver";

import { WikimediaActions } from "../helpers/WikimediaActions";

export class WikipediaAPI extends WikimediaActions {
    constructor(private language: WikipediaApiLanguage = "en") {
        super();
    }

    baseUrl = WikiMediaURLResolver.wikipedia(this.language);
}
