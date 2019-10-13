import { OpenSearchResponse } from "../../types/datasources/wikipediaAPI/actions/openSearch";

export class WikimediaActionsResponseParser {
    public openSearch = (data: OpenSearchResponse) => {
        const results = [];
        for (let i = 0; i < data[1].length; i += 1) {
            results.push({
                result: data[1][i],
                resultDescriptions: data[2][i],
                resultLink: data[3][i],
            });
        }
        return results;
    };
}
