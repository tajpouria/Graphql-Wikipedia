import axios from "axios";
import {
    Actions,
    ResponseFormat,
} from "../../types/datasources/wikipediaAPI/constants";

interface RESTRequestParams {
    [parameter: string]: string | number | boolean | undefined;
}

export abstract class WikiRESTDataSource {
    protected abstract baseUrl: string;

    protected httpGET = async <ResponseType = any>(
        action: Actions,
        params: RESTRequestParams = {},
        preParams: string[] = [],
    ) => {
        Object.keys(params).map(
            key => params[key] && preParams.push(`${key}=${params[key]}`),
        );
        try {
            const response = await axios.get<ResponseType>(
                `${this.baseUrl}${action}${preParams.join("&")}&format=${
                    ResponseFormat.json
                }`,
            );

            return response;
        } catch (err) {
            throw new Error(err);
        }
    };
}
