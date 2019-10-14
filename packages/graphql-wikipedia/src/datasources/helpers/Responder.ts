export class Responder {
    public static send = async <ParsedResponseType = any>(
        requestFunction: (args?: any) => Promise<ParsedResponseType>,
        requestArgs: any[] = [],
    ) => {
        try {
            const response = await requestFunction(...requestArgs);

            return response;
        } catch (error) {
            throw new Error(error);
        }
    };
}
