import React from "react";

interface UserContext {
  currentUser?: any;
  setCurrentUser?: any;
  setLoggedIn?: any;
  loggedIn?: any;
}

export const UserContext = React.createContext<UserContext>({
  currentUser: undefined,
  loggedIn: undefined,
  setCurrentUser: () => {},
  setLoggedIn: () => {},
});
