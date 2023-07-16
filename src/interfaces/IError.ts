export interface IErrorMessage {
    response: {
        status: number;
        data: {
            message: string
        }
    }
};