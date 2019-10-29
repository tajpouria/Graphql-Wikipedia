import { WikiRESTDataSource } from "./WikiRESTDataSource";
import { Actions } from "../../types/datasources/wikipediaAPI/constants";
import {
    OpenSearchOptions,
    OpenSearchResponse,
    openSearchOptionsDefaultValues,
} from "../../types/datasources/wikipediaAPI/actions/openSearch";
import { WikimediaActionsResponseParser } from "./WikimediaActionsResponseParser";
import {
    RandomOptions,
    RandomResponse,
    randomOptionsDefaultValues,
} from "../../types/datasources/wikipediaAPI/actions/Random";
import {
    CategoriesOptions,
    CategoriesResponse,
    categoriesOptionsDefaultValues,
} from "../../types/datasources/wikipediaAPI/actions/categories";
import {
    Coordinate,
    GeoSearchOptions,
    GeoSearchResponse,
    geoSearchOptionsDefaultValues,
} from "../../types/datasources/wikipediaAPI/actions/geosearch";

export abstract class WikimediaActions extends WikiRESTDataSource {
    protected abstract baseUrl: string;

    /**
     * List all categories the pages belong to specified title.
     * @example
     * wiki.categories("Albert Einstein", {limit: 15, order: "descending"}).then(res => console.log(res))
     *
     * @method Wiki#categories
     * @param {String} title - Pattern to search categories belong to it.
     * @typedef {Object} [options] - Customize category searching behaviors.
     * @param {Number} [options.limit] - Maximum number of results to return.Default:10
     * @param {Boolean} [options.timeStamp] - Adds timestamp of when the category was added.Default:false
     * @param {String} [options.order] - The direction in which to list.Default:"ascending",
     * @returns {{ns:Number, title:String, [ timestamp:String ]}[]}
     */
    public categories = async (
        title: string,
        {
            limit,
            timeStamp,
            order,
        }: CategoriesOptions = categoriesOptionsDefaultValues,
    ) => {
        const response = await this.httpGET<CategoriesResponse>(Actions.query, {
            titles: title,
            cllimit: limit || categoriesOptionsDefaultValues.limit,
            clprop: timeStamp ? "timestamp" : undefined,
            cldir: order || categoriesOptionsDefaultValues.order,

            prop: "categories",
        });

        return WikimediaActionsResponseParser.categories(response.data);
    };

    /**
     * Search the wiki using the OpenSearch protocol.
     * @example
     * wiki.openSearch("Albert Einstein", {limit: 15, profile: "engine_autoselect"}).then(res => console.log(res))
     *
     * @method Wiki#openSearch
     * @param {String} searchString - Pattern to search.
     * @typedef {Object} [options] - Customize openSearch behaviors.
     * @param {Number} [options.limit] - Maximum number of results to return.Default:10
     * @param {Number} [options.namespace] - Namespaces to search.Default:0
     * @param {String} [options.profile] - Search profile to use.Default:"engine_autoselect"
     * @param {Boolean} [options.suggest] - Enable OpenSearch suggestions requested by MediaWiki. Set this to false if you've disabled another suggestion script and want to reduce load caused by cached scripts pulling suggestions.Default:true
     * @param {Boolean} [options.warningaserror] - return an API error instead of ignoring them.Default:false
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
     * @param {Number} [options.limit] - Maximum number of results to return.Default:10
     * @param {Number} [options.namespace] - Return pages in these namespaces only.Default:"*"
     * @param {String} [options.filterRedirect] - How to filter for redirects:Default: "nonredirects"
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

    /**
     * Returns pages having coordinates that are located in a certain area.
     * @example
     * wiki.geoSearch({latitude: 32.4279, longitude: 53.6880 }, {limit: 15, glob: "earth"}).then(res => console.log(res))
     * @example
     * wiki.geoSearch({bBox: {top: 37.8, left: -122.3, bottom: 37.7, right: -122.4}}).then(res => console.log(res))
     *
     * @method Wiki#geoSearch
     * @typedef {Object} [coordinate] - Coordinate around which to search.
     * @param {Number} [coordinate.latitude] - Coordinate latitude.
     * @param {Number} [coordinate.longitude] - Coordinate longitude.
     * @typedef {Object} [bBox] - Bounding box to search in.
     * @param {Number} [bBox.top] - Bounding box search top corner.
     * @param {Number} [bBox.left] - Bounding box search left corner.
     * @param {Number} [bBox.bottom] - Bounding box search bottom corner.
     * @param {Number} [bBox.right] - Bounding box search right corner.
     * @typedef {Object} [options] - Customize geographic searching behaviors.
     * @param {Number} [options.radius] - Search radius in meters.The value must be between 10 and 10,000.Default:500
     * @param {String} [options.globe] - Globe to search on.Default: earth
     * @param {Number} [options.maxDimension] - Restrict search to objects no larger than this, in meters.Default:10000
     * @param {String} [options.coordinatesKind] -Which kind of coordinates to return.primary:The location of the subject of the article.There is at most one primary coordinate per title | secondary:The location of some object that's mentioned in the article. Any number of secondary coordinates can be associated with a title | all:Return both primary and secondary coordinates.Default:primary.
     * @param {Number} [options.limit] - Maximum number of results to return.Default:10
     * @param {Number} [options.namespace] - Maximum number of results to return.Default:10
     * @returns {{ pageid: String, ns: Number, title: String, lat: Number, lon: String, dis: Number, primary: String }[]}
     */
    public geoSearch = async (
        { latitude, longitude, bBox }: Coordinate,
        {
            radius,
            globe,
            maxDimension,
            coordinatesKind,
            limit,
            namespace,
        }: GeoSearchOptions = geoSearchOptionsDefaultValues,
    ) => {
        const response = await this.httpGET<GeoSearchResponse>(Actions.query, {
            gscoord: [latitude, longitude].join("|"), // order matters
            gsbbox: bBox
                ? [bBox.top, bBox.left, bBox.bottom, bBox.right].join("|")
                : "", // order matters

            gsglobe: globe || geoSearchOptionsDefaultValues.globe,
            gsradius: radius || geoSearchOptionsDefaultValues.radius,
            gsmaxdim:
                maxDimension || geoSearchOptionsDefaultValues.maxDimension,
            gsprimary:
                coordinatesKind ||
                geoSearchOptionsDefaultValues.coordinatesKind,
            gslimit: limit || geoSearchOptionsDefaultValues.limit,
            gsnamespace: namespace || geoSearchOptionsDefaultValues.namespace,

            list: "geosearch",
        });

        return WikimediaActionsResponseParser.geoSearch(response.data);
    };
}
