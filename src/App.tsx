import React from "react";
import "./App.css";
import AppRouteProvider from "Routes/AppRouteProvider";
import { ConfigProvider } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#f77908",
  },
};
function App() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <AppRouteProvider />
      </ConfigProvider>
    </>
  );
}

export default App;
