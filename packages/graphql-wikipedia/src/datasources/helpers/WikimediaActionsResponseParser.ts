import {
    OpenSearchResponse,
    OpenSearchParsedResponse,
} from "../../types/datasources/wikipediaAPI/actions/openSearch";

export class WikimediaActionsResponseParser {
    public static openSearch = (
        data: OpenSearchResponse,
    ): OpenSearchParsedResponse => {
        const results = [];
        for (let i = 0; i < data[1].length; i += 1) {
            results.push({
                title: data[1][i],
                description: data[2][i],
                link: data[3][i],
            });
        }
        return results;
    };
}
