export class Responder {
    public static send = async <ResponseType = any, ParsedResponseType = any>(
        requestFunction: (args?: any) => Promise<ResponseType>,
        requestArgs: any[] = [],
        dataParser: (data: ResponseType) => ParsedResponseType,
    ) => {
        try {
            const response = await requestFunction(...requestArgs);

            if (response.error) {
                throw new Error(response.error);
            }

            return dataParser(response);
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    };
}
