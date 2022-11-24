import { IOrder, IOrderResponse } from "Models/IOrder";
import { requestType } from "Services";

export const OrderService = {
    list: (): Promise<IOrder[]> => requestType.get("/api/orders"),
    details: (code: string): Promise<IOrderResponse> => requestType.get(`/api/orders/${code}`),
    create: (user: IOrder): Promise<IOrderResponse> => requestType.post(`/api/orders`, user),
    update: (user: IOrder): Promise<IOrderResponse> => requestType.put(`/api/orders`, user),
    delete: (user: IOrder): Promise<IOrderResponse> => requestType.del(`/api/orders`, user),
}