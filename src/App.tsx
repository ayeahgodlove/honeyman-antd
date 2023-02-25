import React from "react";
import "./App.css";
import AppRouteProvider from "Routes/AppRouteProvider";
import { ConfigProvider } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";
import { Provider } from "react-redux";
import store from "Redux/store";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#f77908",
  },
};

function App() {
  return (
    <Provider store={store}>
        <ConfigProvider theme={theme}>
          <AppRouteProvider />
        </ConfigProvider>
    </Provider>
  );
}

export default App;
