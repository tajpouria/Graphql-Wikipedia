import {
    WikipediaApiLanguage,
    Actions,
    ResponseDataFormatWikiParam,
    ProfileWikiParam,
} from "../../types/datasources/wikipediaAPI/constants";
import { WikiMediaURLResolver } from "../helpers/WikiMediaURLResolver";
import {
    OpenSearchOptions,
} from "../../types/datasources/wikipediaAPI/actions/openSearch";
import { openSearchOptionsDefaultValues } from "./optionsDefaultValues";

import { WikiRESTDataSource } from "../helpers/WikiRESTDataSource";

export class WikipediaAPI extends WikiRESTDataSource {
    constructor(
        private language: WikipediaApiLanguage = WikipediaApiLanguage.en,
    ) {
        super();
    }

    baseUrl = WikiMediaURLResolver.wikipedia(this.language);

    /**
     * Search the wiki using the OpenSearch protocol.
     * [wikipedia API documents]{@link https://en.wikipedia.org/w/api.php?action=help&modules=opensearch}
     *
     * @param {string} searchString Search string.This parameter is required
     * @param {number} options.namespace Namespaces to search.Default:0
     * @param {number} options.limit Maximum number of results to return.Default:10
     * @param {string} options.profile  Search profile to use.Default:'engine_autoselect'
     * @param {boolean} options.suggest Do nothing if $wgEnableOpenSearchSuggest is false.Default:true
     * @param {string} options.format The format of the output.Default:'json'
     * @param {boolean} options.warningaserror If warnings are raised with format=json, return an API error instead of ignoring them.Default:false,
     * @return {string[]}
     */
    public openSearch = async (
        searchString: string,
        {
            namespace,
            limit,
            profile,
            suggest,
            format,
            warningsaserror,
        }: OpenSearchOptions = openSearchOptionsDefaultValues,
    ) => {
        try {
            const response = await this.httpGET(Actions.opensearch, {
                search: searchString,
                namespace,
                limit,
                profile: ProfileWikiParam[profile],
                suggest,
                format: ResponseDataFormatWikiParam[format],
                warningsaserror,
            });

            return response.data;
        } catch (err) {
            throw new Error(err);
        }
    };
}
