import { IRoute } from "Models/Route";
import NotFoundPage from "Pages/404_Page";
import HomePage from "Pages/HomePage";
import WelcomePage from "Pages/WelcomePage";
import React from "react";

export const routes: IRoute[] = [
  {
    path: "/",
    private: true,
    exact: true,
    component: <HomePage />,
  },
  /**
   * Welcome
   */
  {
    path: "/welcome",
    private: false,
    exact: true,
    component: <WelcomePage />,
  },

  {
    // default not found route
    path: '*',
    private: false,
    exact: false,
    component: <NotFoundPage />,
},
];
