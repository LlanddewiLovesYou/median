import React from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {
  accessible: boolean;
  path: string;
  redirect: string;
}

export const ProtectedRoute: React.FC<Props> = ({
  accessible,
  path,
  redirect,
  children,
}) => {
  return accessible ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to={redirect}></Redirect>
  );
};
