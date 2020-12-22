import { useState, useContext, useCallback, useMemo } from "react";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { setJWT } from "../util/jwt";
import Axios from "axios";

export const useUserSubmit = (submitUrl) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const history = useHistory();
  const { setCurrentUser, setLoggedIn } = useContext(UserContext);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError(undefined);
      try {
        const user = await Axios.post(submitUrl, { userName, password });

        if (user.data) {
          setLoggedIn(true);
          setCurrentUser(user.data.currentUser);
          setJWT(user.data.accessToken);
          history.push("/posts");
        }
      } catch (e) {
        if (e.response.status === 401) {
          setError("Invalid Username or Password");
        } else {
          setError("Something went wrong...");
        }
      }
    },
    [
      setError,
      setLoggedIn,
      setCurrentUser,
      history,
      password,
      submitUrl,
      userName,
    ]
  );
  return useMemo(() => {
    return {
      onSubmit,
      error,
      setUserName,
      userName,
      setPassword,
      password,
    };
  }, [onSubmit, error, setUserName, userName, setPassword, password]);
};
