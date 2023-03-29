import Spinner from "components/utilities/Spinner";
import { useToken } from "hooks/token.hook";
import GeneralAppShell from "layout/app/general-app-shell";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { initialDataAsync } from "redux/action/initial.action";

const CallbackPage: React.FC = () => {
  const { isLoading, user, isAuthenticated } = useToken();
  const dispatch = useDispatch();
  console.log("user: ", user);

  if (!isLoading) {
    <GeneralAppShell>
      <Spinner />
    </GeneralAppShell>;
  }

  // load initial data into the redux store here
  if (isAuthenticated && user) {
    setTimeout(() => {
      // dispatch(initialDataAsync() as any);
    }, 3000);
  }
  return <Navigate to={"/"} />;
};

export default CallbackPage;
