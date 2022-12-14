import { IRoute } from "Models/IRoute";
import NotFoundPage from "Pages/404_Page";
import ForgotPasswordPage from "Pages/Auth/ForgotPasswordPage";
import LoginPage from "Pages/Auth/LoginPage";
import RegisterPage from "Pages/Auth/RegisterPage";
import CallbackPage from "Pages/CallbackPage";
import DashboardPage from "Pages/DashboardPage";
import WelcomePage from "Pages/WelcomePage";
import React from "react";

export const routes: IRoute[] = [
  /**
   * callback route
   */
  {
    path: "/callback",
    private: false,
    exact: true,
    component: <CallbackPage />,
  },
  /**
   * Welcome
   */
  {
    path: "/",
    private: false,
    exact: true,
    component: <WelcomePage />,
  },

  /**
   * dashboard route
   */
  {
    path: "/dashboard",
    private: true,
    exact: true,
    component: <DashboardPage />,
  },

  /**
   * Auth
   */
  {
    path: "/login",
    private: true,
    exact: true,
    component: <LoginPage />,
  },
  {
    path: "/register",
    private: true,
    exact: true,
    component: <RegisterPage />,
  },
  {
    path: "/forgot-password",
    private: true,
    exact: true,
    component: <ForgotPasswordPage />,
  },
  {
    // default not found route
    path: "*",
    private: false,
    exact: false,
    component: <NotFoundPage />,
  },
];
