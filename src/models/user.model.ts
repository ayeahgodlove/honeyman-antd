import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IUser {
  id: number;
  username: string;
  fullname: string;
  email: string;
  password: string;
  address: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export const emptyUser: IUser = {
  id: 0,
  username: "",
  fullname: "",
  email: "",
  password: "",
  address: "",
  role: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
};

export interface IUserState extends IBaseState {
  readonly users: IUser[];
  readonly user: IUser;
}

export interface IUserResponse extends IResponseBase {
  data: IUser;
  token: string;
}
