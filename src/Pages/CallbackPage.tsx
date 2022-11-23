import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "Components/Utilities/Spinner";
import GeneralAppShell from "Layout/app/GeneralAppShell";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const CallbackPage: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        console.log("accessToken: ", accessToken);
        // set token in state
        setLoading(true);
      } catch (e: any) {
        setLoading(false);
        // dispatch(tokenActions.fetchTokensError(e.message));
      }
    })();
  }, [getAccessTokenSilently, isLoading]);

  if (!isLoading) {
    <GeneralAppShell>
      <Spinner />
    </GeneralAppShell>;
  }

  // load initial data into the redux store here

  return <Navigate to={"/"} />;
};

export default CallbackPage;
