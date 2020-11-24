import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Masthead } from "components/Masthead/Masthead";
import { LandingPage } from "pages/LandingPage/LandingPage";
import { PostIndexPage } from "pages/PostIndexPage/PostIndexPage";
import { PostsContext, posts } from "./context/postsContext";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Masthead />
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/posts">
            <PostsContext.Provider value={posts}>
              <PostIndexPage></PostIndexPage>
            </PostsContext.Provider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
