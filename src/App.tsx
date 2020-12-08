import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import { Masthead } from "components/Masthead/Masthead";
import { LandingPage } from "pages/LandingPage/LandingPage";
import { PostIndexPage } from "pages/PostIndexPage/PostIndexPage";
import { Post } from "./components/Post/Post";
import { CreatePostPage } from "./pages/CreatePostPage/CreatePostPage";
import { PostsContext } from "./context/PostsContext";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const allposts = await Axios.get("http://localhost:5000/posts");
    setPosts(allposts.data);
  }, [setPosts]);

  return (
    <Router>
      <div className="App">
        <Masthead />
        <PostsContext.Provider value={{ posts, getPosts }}>
          <Switch>
            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>
            <Route exact path="/posts">
              <PostIndexPage></PostIndexPage>
            </Route>
            <Route path="/posts/:id">
              <Post />
            </Route>
            <Route path="/create">
              <CreatePostPage />
            </Route>
          </Switch>
        </PostsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
