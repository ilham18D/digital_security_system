import React from "react";
import { Redirect, Route } from "react-router-dom";
import { User } from "firebase";
interface PrivateRouteProps {
  akun?: User;
  path: string;
}
const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  akun,
  children,
  path,
}) => {
  if (!akun) {
    return <Redirect to="/login" />;
  }

  return <Route path={path}>{children}</Route>;
};
export default PrivateRoute;
