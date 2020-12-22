import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import { getJWT } from "./util/jwt";
import { Masthead } from "components/Masthead/Masthead";
import { LandingPage } from "pages/LandingPage/LandingPage";
import { PostIndexPage } from "pages/PostIndexPage/PostIndexPage";
import { Post } from "./components/Post/Post";
import { UserForm } from "./components/UserForm/UserForm";
import { CreatePostPage } from "./pages/CreatePostPage/CreatePostPage";
import { PostsContext } from "./context/PostsContext";
import { UserContext } from "./context/UserContext";
import "./App.css";
import { ProtectedRoute } from "components/ProtectedRoute/ProtectedRoute";
import { PostPage } from "pages/PostPage/PostPage";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);
  const jwt = getJWT();

  const getPosts = useCallback(async () => {
    const allposts = await Axios.get(`${process.env.REACT_APP_API_URL}/posts`);
    setPosts(allposts.data);
  }, [setPosts]);

  const validateUser = useCallback(async (jwt) => {
    return await Axios.post(`${process.env.REACT_APP_API_URL}/users/validate`, {
      accessToken: jwt,
    });
  }, []);

  useEffect(() => {
    const userValidation = async () => {
      const { data: validUser } = await validateUser(jwt);

      if (jwt && validUser) {
        setLoggedIn(true);
        setCurrentUser(validUser);
      } else {
        setLoggedIn(false);
      }
    };
    userValidation();
  }, [setLoggedIn, setCurrentUser, validateUser, jwt]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, setLoggedIn, loggedIn }}
        >
          <Masthead />
          <PostsContext.Provider value={{ posts, getPosts }}>
            <Switch>
              <Route exact path="/">
                <LandingPage></LandingPage>
              </Route>
              <Route exact path="/posts">
                <PostIndexPage></PostIndexPage>
              </Route>
              <ProtectedRoute
                path="/posts/create"
                redirect="/posts"
                accessible={loggedIn && currentUser?.permissions === "admin"}
              >
                <CreatePostPage />
              </ProtectedRoute>
              <Route path="/posts/:id">
                <PostPage />
              </Route>
              <ProtectedRoute
                path="/developement"
                redirect="/posts"
                accessible={loggedIn && currentUser?.permissions === "admin"}
              >
                <UserForm type="signup"></UserForm>
              </ProtectedRoute>
              {/* <Route path="/development">
              </Route> */}
              <Route path="/signup">
                <UserForm type="signup"></UserForm>
              </Route>
              <Route path="/login">
                <UserForm type="login"></UserForm>
              </Route>
            </Switch>
          </PostsContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
