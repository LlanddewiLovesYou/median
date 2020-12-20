import React, { useState, useContext } from "react";
import Axios from "axios";
import { setJWT } from "../../util/jwt";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Button/Button";

import "./UserForm.scss";

interface Props {
  type: string;
}

export const UserForm: React.FC<Props> = ({ type }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { setCurrentUser, setLoggedIn } = useContext(UserContext);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await Axios.post(submitUrl, { userName, password });
      console.log({ user });
      if (user.data) {
        setLoggedIn(true);
        setCurrentUser(user.data.currentUser);
        setJWT(user.data.accessToken);
        history.push("/posts");
      }
    } catch (e) {
      return e.message;
    }
  };

  return (
    <div className="user-form">
      <form onSubmit={(e) => onSubmit(e)}>
        <div>{formText}</div>
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
