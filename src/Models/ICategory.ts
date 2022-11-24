import { IBaseState } from "./IBaseState";
import { IResponseBase } from "./IResponseBase";

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface ISubCategory extends ICategory {
  categoryId: number;
}

export const emptyCategory: ICategory = {
  id: 0,
  name: "",
  slug: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
};

export const emptySubCategory: ISubCategory = {
  ...emptyCategory,
  categoryId: 0,
};


export interface ICategoryState extends IBaseState {
  readonly categories: ICategory[]
  readonly category: ICategory
} 
export interface ISubCategoryState extends IBaseState {
  readonly subCategories: ISubCategory[]
  readonly subCategory: ISubCategory
} 

export interface ICategoryResponse extends IResponseBase {
  data: ICategory;
}

export interface ISubCategoryResponse extends IResponseBase {
  data: ISubCategory;
}


