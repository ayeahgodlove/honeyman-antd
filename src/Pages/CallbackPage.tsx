import Spinner from "Components/Utilities/Spinner";
import { useToken } from "hooks/useToken";
import GeneralAppShell from "Layout/app/GeneralAppShell";
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
