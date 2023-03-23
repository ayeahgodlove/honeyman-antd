import { ICategory, ICategoryResponse } from "models/ICategory";
import { requestType } from "services";

export const CategoryService = {
    list: (): Promise<ICategory[]> => requestType.get("/api/categories"),
    details: (code: string): Promise<ICategoryResponse> => requestType.get(`/api/categories/${code}`),
    create: (user: ICategory): Promise<ICategoryResponse> => requestType.post(`/api/categories`, user),
    update: (user: ICategory): Promise<ICategoryResponse> => requestType.put(`/api/categories`, user),
    delete: (user: ICategory): Promise<ICategoryResponse> => requestType.del(`/api/categories`, user),
}