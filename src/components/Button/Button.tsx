import React from "react";
import "./Button.scss";

interface Props {
  buttonType: string;
  type?: any;
  onClick?: any;
}

export const Button: React.FC<Props> = ({
  children,
  buttonType,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={"button button__" + buttonType}
      onClick={onClick || (() => {})}
    >
      {children}
    </button>
  );
};
