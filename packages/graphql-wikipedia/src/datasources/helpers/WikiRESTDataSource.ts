import axios from "axios";
import { Actions } from "../../types/datasources/wikipediaAPI/constants";

interface RESTRequestParams {
    [parameter: string]: string | number | boolean;
}

export abstract class WikiRESTDataSource {
    abstract baseUrl: string;

    protected httpGET = async (
        action: Actions,
        params: RESTRequestParams = {},
        preParams: string[] = [],
    ) => {
        Object.keys(params).map(key => preParams.push(`${key}=${params[key]}`));
        try {
            const response = await axios.get(
                this.baseUrl + action + preParams.join("&"),
            );
            return response;
        } catch (err) {
            throw new Error(err);
        }
    };
}
