export class Responder {
    public static send = async (
        requestFunction: (args?: any) => Promise<any>,
        requestArgs: any[] = [],
    ) => {
        try {
            const response = await requestFunction(...requestArgs);

            if (response.error) {
                throw new Error(response.error);
            }

            return response;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    };
}
