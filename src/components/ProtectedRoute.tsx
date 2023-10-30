import React, { Children } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
  isAuth,
  children,
}: {
  isAuth: boolean;
  children: JSX.Element;
}) => {
  if (isAuth) return children;
  return <Navigate to='/login' replace={true} />;
};
