import React from "react";
import "./App.css";
import AppRouteProvider from "routes/app-route-provider";
import { Provider } from "react-redux";
import store from "redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0Config } from "config/constant";
import { useNavigate } from "react-router-dom";


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
        <AppRouteProvider />
      </Auth0Provider>
    </Provider>
  );
}

export default App;
