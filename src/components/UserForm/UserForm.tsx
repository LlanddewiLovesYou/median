import React, { useState, useContext } from "react";
import { useUserSubmit } from "../../hooks/useUserSubmit";
import { Button } from "../Button/Button";

import "./UserForm.scss";

interface Props {
  type: string;
}

export const UserForm: React.FC<Props> = ({ type }) => {
  let formText;
  let buttonText;
  let submitUrl;

  switch (type) {
    case "login":
      formText = "Log In";
      buttonText = "Log In";
      submitUrl = `${process.env.REACT_APP_API_URL}/users/login`;
      break;
    case "signup":
      formText = "Create Account";
      buttonText = "Submit";
      submitUrl = `${process.env.REACT_APP_API_URL}/users`;
      break;
  }

  const {
    onSubmit,
    error,
    setUserName,
    userName,
    setPassword,
    password,
  } = useUserSubmit(submitUrl);

  return (
    <div className="user-form">
      <form onSubmit={(e) => onSubmit(e)}>
        <div>{formText}</div>
        <div className={`error ${error ? "visible" : null}`}>{error}</div>
        <label htmlFor="username">
          Username
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <Button buttonType="user" type="submit">
          {buttonText}
        </Button>
      </form>
    </div>
  );
};
