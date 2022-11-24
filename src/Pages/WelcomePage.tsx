import { useToken } from "hooks/useToken";
import GeneralAppShell from "Layout/app/GeneralAppShell";
import React, { useEffect, useState } from "react";
import { UserService } from "Services/User.service";

const WelcomePage: React.FC = () => {
  const [users, serUsers] = useState("");
  const { token } = useToken();
  useEffect(() => {
    UserService.list()
      .then((res) => {
        serUsers(res);
      })
      .catch((err) => serUsers(err));
  }, [token]);
  return (
    <GeneralAppShell>
      <h1 style={{ padding: 30 }}> Welcome Page Page</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </GeneralAppShell>
  );
};

export default WelcomePage;
