import { IUser, IUserResponse } from "models/user.model";
import { requestType } from "services";

export const authService = {
  register: (user: IUser): Promise<IUserResponse> =>
    requestType.post(`/auth/register`, user),
  login: (user: {
    email: string;
    password: string;
  }): Promise<IUserResponse> => requestType.post(`/auth/login`, user),
  logout: (): Promise<any> => requestType.get("/auth/logout")
};
