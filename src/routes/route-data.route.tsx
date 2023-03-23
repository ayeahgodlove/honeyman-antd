import { IRoute } from "models/IRoute";
import NotFoundPage from "pages/404_Page";
import ForgotPasswordPage from "pages/auth/forgot-password.page";
import LoginPage from "pages/auth/login.page";
import RegisterPage from "pages/auth/register.page";
import CallbackPage from "pages/callback.page";
import DashboardPage from "pages/dashboard.page";
import WelcomePage from "pages/welcome.page";
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
