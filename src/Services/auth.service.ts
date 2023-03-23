import { IUser, IUserResponse } from "models/IUser";
import { requestType } from "services";

export const AuthService = {
  register: (user: IUser): Promise<IUserResponse> =>
    requestType.post(`/api/register`, user),
  login: (user: {
    username: string;
    password: string;
  }): Promise<IUserResponse> => requestType.post(`/api/login`, user),
};
