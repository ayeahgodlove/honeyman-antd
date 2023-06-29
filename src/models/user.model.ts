import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IUser {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
  role: string;
  phoneNumber: string;
}

export const emptyUser: IUser = {
  id: 0,
  username: "",
  lastname: "",
  firstname: "",
  email: "",
  password: "",
  address: "",
  role: "",
  phoneNumber: ""
};

export interface IUserState extends IBaseState {
  readonly users: IUser[];
  readonly user: IUser;
}

export interface IUserResponse extends IResponseBase {
  data: IUser;
  token: string;
}
