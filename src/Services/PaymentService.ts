import { IPayment, IPaymentResponse } from "Models/IPayment";
import { requestType } from "Services";

export const PaymentService = {
    list: (): Promise<IPayment[]> => requestType.get("/api/payments"),
    details: (code: string): Promise<IPaymentResponse> => requestType.get(`/api/payments/${code}`),
    create: (user: IPayment): Promise<IPaymentResponse> => requestType.post(`/api/payments`, user),
    update: (user: IPayment): Promise<IPaymentResponse> => requestType.put(`/api/payments`, user),
    delete: (user: IPayment): Promise<IPaymentResponse> => requestType.del(`/api/payments`, user),
}