import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import { routes } from "./route-data.route";

const AppRouteProvider: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route path={`${route.path}`} element={route.component} key={index} />
            );
          })}
        </Routes>
      </Router>
    </>
  );
};

export default AppRouteProvider;
