import Spinner from "components/utilities/Spinner";
import { useToken } from "hooks/token.hook";
import GeneralAppShell from "layout/app/general-app-shell";
import React from "react";
import { Navigate } from "react-router-dom";

const CallbackPage: React.FC = () => {
  const {isLoading} = useToken();

  if (!isLoading) {
    <GeneralAppShell>
      <Spinner />
    </GeneralAppShell>;
  }

  // load initial data into the redux store here

  return <Navigate to={"/"} />;
};

export default CallbackPage;
