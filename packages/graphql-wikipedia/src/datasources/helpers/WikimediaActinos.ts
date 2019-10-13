import { WikiRESTDataSource } from "./WikiRESTDataSource";
import {
    ProfileWikiParam,
    Actions,
} from "../../types/datasources/wikipediaAPI/constants";
import { OpenSearchOptions } from "../../types/datasources/wikipediaAPI/actions/openSearch";
import { openSearchOptionsDefaultValues } from "./actinosOptionsDefaultValues";

export abstract class WikimediaActions extends WikiRESTDataSource {
    abstract baseUrl: string;

    /**
     * Search the wiki using the OpenSearch protocol.
     * [wikipedia API documents]{@link https://en.wikipedia.org/w/api.php?action=help&modules=opensearch}
     *
     * @param {string} searchString Search string.This parameter is required
     * @param {number} options.namespace Namespaces to search.Default:0
     * @param {number} options.limit Maximum number of results to return.Default:10
     * @param {string} options.profile  Search profile to use.Default:'engine_autoselect'
     * @param {boolean} options.suggest Enable OpenSearch suggestions requested by MediaWiki. Set this to false if you've disabled another suggestion script and want to reduce load caused by cached scripts pulling suggestions.Default:true
     * @param {boolean} options.warningaserror return an API error instead of ignoring them.Default:false,
     * @return {string[]}
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
        const response = await this.httpGET(Actions.opensearch, {
            search: searchString,
            namespace,
            limit,
            profile: ProfileWikiParam[profile],
            suggest,
            warningsaserror,
        });

        return response.data;
    };
}
