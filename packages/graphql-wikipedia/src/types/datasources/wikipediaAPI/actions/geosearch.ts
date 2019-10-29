import { Namespace, Globe } from "../constants";

interface BBox {
    top: number;
    left: number;
    bottom: number;
    right: number;
}

export interface Coordinate {
    latitude?: number;
    longitude?: number;
    bBox?: BBox;
}

type CoordinateType = "primary" | "secondary" | "all";

export interface GeoSearchOptions {
    radius?: number;
    globe?: Globe;
    maxDimension?: number;
    coordinatesKind?: CoordinateType;
    limit?: number;
    namespace?: Namespace;
}

export interface GeoSearch {
    pageid: number;
    ns: number;
    title: string;
    lat: number;
    lon: number;
    dist: number;
    primary: string;
}

export interface GeoSearchResponse {
    batchcomplete: string;
    query: { geosearch: GeoSearch[] };
}

export type GeoSearchOptionsParsedResponse = Array<GeoSearch>;

export const geoSearchOptionsDefaultValues: GeoSearchOptions = {
    radius: 500,
    globe: "earth",
    maxDimension: 10000,
    coordinatesKind: "primary",
    limit: 10,
    namespace: 0,
};
