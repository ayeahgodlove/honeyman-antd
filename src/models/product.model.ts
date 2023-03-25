import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  categoryId: number;
  subCategoryId: number;
  imagePath: string;
  images: string[];
  rating: number;
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
  images: [],
  rating: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
};

export interface IProductState extends IBaseState {
  readonly products: IProduct[];
  readonly product: IProduct;
}

export interface IProductResponse extends IResponseBase {
  data: IProduct;
}
