import { WikiRESTDataSource } from "./WikiRESTDataSource";
import { Actions } from "../../types/datasources/wikipediaAPI/constants";
import {
    OpenSearchOptions,
    OpenSearchResponse,
} from "../../types/datasources/wikipediaAPI/actions/openSearch";
import {
    openSearchOptionsDefaultValues,
    randomOptionsDefaultValues,
} from "./actionsOptionsDefaultValues";
import { WikimediaActionsResponseParser } from "./WikimediaActionsResponseParser";
import {
    RandomOptions,
    RandomResponse,
} from "../../types/datasources/wikipediaAPI/actions/Random";

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
     * @param {String} [options.profile] - Search profile to use.Default:"engine_autoselect"
     * @param {Boolean} [options.suggest] - Enable OpenSearch suggestions requested by MediaWiki. Set this to false if you've disabled another suggestion script and want to reduce load caused by cached scripts pulling suggestions.Default:true
     * @param {Boolean} [options.warningaserror] - return an API error instead of ignoring them.Default:false,
     * @returns {{title:String, description:String, link:String}[]}
     */
    public openSearch = async (
        searchString: string,
        {
            namespace,
            limit,
            profile,
            suggest,
            warningsaserror,
        }: OpenSearchOptions = openSearchOptionsDefaultValues,
    ) => {
        const response = await this.httpGET<OpenSearchResponse>(
            Actions.openSearch,
            {
                namespace:
                    namespace || openSearchOptionsDefaultValues.namespace,
                limit: limit || openSearchOptionsDefaultValues.limit,
                profile: profile || openSearchOptionsDefaultValues.profile,
                suggest: suggest || openSearchOptionsDefaultValues.suggest,
                warningaserror:
                    warningsaserror ||
                    openSearchOptionsDefaultValues.warningsaserror,

                search: searchString,
            },
        );

        return WikimediaActionsResponseParser.openSearch(response.data);
    };

    /**
     * Get a set of random pages.
     * @example
     * wiki.random({ limit: 15 }).then(res => console.log(res))
     *
     * @method Wiki#random
     * @typedef {Object} [options] - Customize randomAction behaviors.
     * @param {Number} [options.namespace] - Return pages in these namespaces only.Default:"*"
     * @param {Number} [options.limit] - Maximum number of results to return.Default:10
     * @param {String} [options.profile] - How to filter for redirects:"nonredirects"
     * @returns {{id:Number, ns:Number, title:String}[]}
     */
    public random = async ({
        namespace,
        limit,
        filterRedirect,
    }: RandomOptions = randomOptionsDefaultValues) => {
        const response = await this.httpGET<RandomResponse>(Actions.query, {
            rnnamespace: namespace || randomOptionsDefaultValues.namespace,
            rnfilterredir:
                filterRedirect || randomOptionsDefaultValues.filterRedirect,
            rnlimit: limit || randomOptionsDefaultValues.limit,

            list: "random",
        });

        return WikimediaActionsResponseParser.random(response.data);
    };
}
