import AppShell from "Layout/app/AppShell";
import React from "react";
import { Navigate, Route, RouteProps, redirect } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = ({
  children,
  element: Component,
  ...rest
}) => {
  const user = null;

  return user ? (
    <AppShell>
      <Route {...rest} element={Component} />
    </AppShell>
  ) : (
    <Navigate to={"/honeyman-antd/welcome"} />
  );
};

export default ProtectedRoute;