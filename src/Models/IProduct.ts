import { IBaseState } from "./IBaseState";
import { IResponseBase } from "./IResponseBase";

export interface IProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  categoryId: number;
  subCategoryId: number;
  imagePath: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export const emptyProduct: IProduct = {
  id: 0,
  name: "",
  price: "",
  description: "",
  categoryId: 0,
  subCategoryId: 0,
  imagePath: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
};

export interface IProductState extends IBaseState {
  readonly products: IProduct[];
  readonly product: IProduct;
}

export interface IProductResponse extends IResponseBase {
  data: IProduct
}
