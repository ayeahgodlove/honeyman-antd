import { useToken } from "hooks/useToken";
import GeneralAppShell from "Layout/app/GeneralAppShell";
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
