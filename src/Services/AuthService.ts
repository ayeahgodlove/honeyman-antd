import { IUser, IUserResponse } from "Models/IUser";
import { requestType } from "Services";

export const AuthService = {
  register: (user: IUser): Promise<IUserResponse> =>
    requestType.post(`/api/register`, user),
  login: (user: {
    username: string;
    password: string;
  }): Promise<IUserResponse> => requestType.post(`/api/login`, user),
};
