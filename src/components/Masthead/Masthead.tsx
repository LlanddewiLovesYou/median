import { ByLine } from "components/ByLine/ByLine";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isUserAdmin } from "util/permissions";
import { UserContext } from "../../context/UserContext";
import "./Masthead.scss";

interface Props {}

export const Masthead: React.FC<Props> = () => {
  const { currentUser } = useContext(UserContext);
  const isAdmin = isUserAdmin(currentUser);

  return (
    <div className="masthead">
      <Link to="/posts" className="masthead__title">
        Median
      </Link>
      <div className="masthead__login">
        {!currentUser && (
          <Link to="/signup" className="button">
            Sign Up
          </Link>
        )}
        {!currentUser && (
          <Link to="/login" className="button">
            Log In
          </Link>
        )}
        {currentUser && `Welcome, ${currentUser.userName}`}
        {currentUser && isAdmin && (
          <Link to="/posts/create" className="masthead__link">
            Write
          </Link>
        )}
      </div>
    </div>
  );
};
