import React from "react";
import "./App.css";
import AppRouteProvider from "Routes/AppRouteProvider";
import { ConfigProvider } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";
import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0Config } from "Config/Auth0";
import { useNavigate } from "react-router-dom";
const theme: ThemeConfig = {
  token: {
    colorPrimary: "#f77908",
  },
};

const onRedirectCallback = (appState: any) => {
  const history = useNavigate();
  history(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

function App() {
  console.log("URI: ", Auth0Config.REDIRECT_URI);
  return (
    <Auth0Provider
      domain={Auth0Config.DOMAIN}
      clientId={Auth0Config.CLIENT_ID}
      redirectUri={Auth0Config.REDIRECT_URI}
      scope="read:current_user"
      onRedirectCallback={onRedirectCallback}
    >
      <ConfigProvider theme={theme}>
        <AppRouteProvider />
      </ConfigProvider>
    </Auth0Provider>
  );
}

export default App;
