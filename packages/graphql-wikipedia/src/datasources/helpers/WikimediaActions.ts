import { WikiRESTDataSource } from "./WikiRESTDataSource";
import { Actions } from "../../types/datasources/wikipediaAPI/constants";
import {
    OpenSearchOptions,
    OpenSearchResponse,
} from "../../types/datasources/wikipediaAPI/actions/openSearch";
import { openSearchOptionsDefaultValues } from "./actionsOptionsDefaultValues";
import { WikimediaActionsResponseParser } from "./WikimediaActionsResponseParser";

export abstract class WikimediaActions extends WikiRESTDataSource {
    protected abstract baseUrl: string;

    /**
     * Search the wiki using the OpenSearch protocol.
     * @example
     * wiki.openSearch('Happy Cat', {limit: 15, profile: 'engine_autoselect'}).then(res => console.log(res))
     *
     * @method Wiki#openSearch
     * @param {String} searchString - Pattern to search.
     * @typedef {Object} [options] - Customize openSearch behaviors.
     * @param {Number} [options.namespace] - Namespaces to search.Default:0
     * @param {Number} [options.limit] - Maximum number of results to return.Default:10
     * @param {String} [options.profile] - Search profile to use.Default:'engine_autoselect'
     * @param {Boolean} [options.suggest] - Enable OpenSearch suggestions requested by MediaWiki. Set this to false if you've disabled another suggestion script and want to reduce load caused by cached scripts pulling suggestions.Default:true
     * @param {Boolean} [options.warningaserror] - return an API error instead of ignoring them.Default:false,
     */
    public openSearch = async (
        searchString: string,
        options: OpenSearchOptions = openSearchOptionsDefaultValues,
    ) => {
        const response = await this.httpGET<OpenSearchResponse>(
            Actions.opensearch,
            {
                ...openSearchOptionsDefaultValues,
                ...options,
                search: searchString,
            },
        );

        return WikimediaActionsResponseParser.openSearch(response.data);
    };
}
