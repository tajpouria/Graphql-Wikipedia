import "reflect-metadata";
import { WikipediaAPI } from "./datasources/wikipediaAPI/WikipediaAPI";

export * from "./utils/withWikiSchema";
export * from "./utils/buildWikiTypeDefsAndResolvers";

const wikipediaAPI = new WikipediaAPI();

wikipediaAPI.openSearch("hello").then((res: any) => console.log(res));
