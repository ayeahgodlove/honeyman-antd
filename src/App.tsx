import React from "react";
import "./App.css";
import AppRouteProvider from "Routes/AppRouteProvider";
import { ConfigProvider } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";
import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0Config } from "Config/Constant";
import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "Store/store";
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
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={Auth0Config.DOMAIN}
        clientId={Auth0Config.CLIENT_ID}
        redirectUri={Auth0Config.REDIRECT_URI}
        audience={Auth0Config.AUDIENCE}
        scope={Auth0Config.SCOPE}
        onRedirectCallback={onRedirectCallback}
      >
        <ConfigProvider theme={theme}>
          <AppRouteProvider />
        </ConfigProvider>
      </Auth0Provider>
    </Provider>
  );
}

export default App;
