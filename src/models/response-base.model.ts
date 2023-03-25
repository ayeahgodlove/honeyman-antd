export interface IResponseBase {
    message: string;
    success: boolean;
    validationErrors: string[]
}

export const emptyResponseBase: IResponseBase = {
    success: false,
    message: '',
    validationErrors: [],
}
