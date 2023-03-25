import { useDispatch } from "react-redux";
import { IUser, IUserResponse } from "models/user.model";

import { AuthService } from "services/auth.service";
import { fetchTokenError, fetchTokenSuccess } from "redux/token.slice";
import { setActiveUser } from "redux/user.slice";

const useAuth = () => {
  const dispatch = useDispatch();

  const loginUser = async (user: { username: string; password: string }) => {
    return await AuthService.login(user)
      .then((userResponse) => {
        dispatch(fetchTokenSuccess(userResponse?.token!!));
        return userResponse;
      })
      .catch((error: any) => {
        debugger;
        console.log("error: ", error);
        // fetchTokenError(error.message);
        // console.log(error);
        return error;
      });
  };

  const registerUser = async (user: IUser) => {
    return await AuthService.register(user)
      .then((userResponse) => {
        setActiveUser(userResponse.data);
        return userResponse;
      })
      .catch((error: any) => {
        console.log(error);
        return error;
      });
  };

  return {
    loginUser,
    registerUser,
  };
};

export { useAuth };
