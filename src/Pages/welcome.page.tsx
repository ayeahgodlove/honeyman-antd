import { useToken } from "hooks/token.hook";
import GeneralAppShell from "layout/app/general-app-shell";
import React, { useEffect } from "react";

const WelcomePage: React.FC = () => {
  const { token } = useToken();
  useEffect(() => {
   
  }, [token]);
  return (
    <GeneralAppShell>
      <h1 style={{ padding: 30 }}> Welcome Page Page</h1>
    </GeneralAppShell>
  );
};

export default WelcomePage;
