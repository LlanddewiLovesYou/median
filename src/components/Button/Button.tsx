import React from "react";
import "./Button.scss";

interface Props {
  type: string;
  action?: () => {};
}

export const Button: React.FC<Props> = ({ children, type }) => {
  return <button className={"button button__" + type}>{children}</button>;
};
