import React from "react";
import "./Button.scss";

interface Props {
  buttonType: string;
  type?: any;
  action?: () => {};
}

export const Button: React.FC<Props> = ({ children, buttonType, type }) => {
  return (
    <button type={type} className={"button button__" + buttonType}>
      {children}
    </button>
  );
};
