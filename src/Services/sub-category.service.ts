import { ISubCategory, ISubCategoryResponse } from "models/ICategory";
import { requestType } from "services";

export const SubCategoryService = {
    list: (): Promise<ISubCategory[]> => requestType.get("/api/sub-categories"),
    details: (code: string): Promise<ISubCategoryResponse> => requestType.get(`/api/sub-categories/${code}`),
    create: (user: ISubCategory): Promise<ISubCategoryResponse> => requestType.post(`/api/sub-categories`, user),
    update: (user: ISubCategory): Promise<ISubCategoryResponse> => requestType.put(`/api/sub-categories`, user),
    delete: (user: ISubCategory): Promise<ISubCategoryResponse> => requestType.del(`/api/sub-categories`, user),
}