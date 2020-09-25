import React from "react";
import "./Masthead.scss";

interface Props {}

export const Masthead: React.FC<Props> = () => {
  return (
    <div className="masthead">
      <div className="masthead__title">Median</div>
      <div className="masthead__login">
        <a href="#" className="button">
          Sign Up
        </a>
        <a href="#" className="button">
          Log In
        </a>
      </div>
    </div>
  );
};
