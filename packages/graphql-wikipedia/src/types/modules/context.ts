import { WikipediaAPI } from "../../datasources/wikipediaAPI/WikipediaAPI";
import { WikimediaActionsResponseParser } from "../../datasources/helpers/WikmediaActinosRespnseParser";

export interface APIEmbeddedContext {
    wikipediaAPI: WikipediaAPI;
    responseParser: WikimediaActionsResponseParser;
}
