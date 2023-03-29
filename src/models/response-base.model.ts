
export interface IResponseBase {
    message: string;
    success: boolean;
    validationErrors: {
        property: string;
        constrains: any[]
    }
}

export const emptyResponseBase: IResponseBase = {
    success: false,
    message: '',
    validationErrors: {
        property: "",
        constrains: []
    },
}
