import React from "react";
import { useUserSubmit } from "../../hooks/useUserSubmit";

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
        <div className={`error ${error ? "visible" : ""}`}>{error}</div>
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
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};
