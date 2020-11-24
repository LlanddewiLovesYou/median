import React from "react";
import { PostFactory } from "../factories";

const post1 = PostFactory({
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const post2 = PostFactory({
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const post3 = PostFactory({
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const post4 = PostFactory({
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const post5 = PostFactory({
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const post6 = PostFactory({
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
export const posts = [post1, post2, post3, post4, post5, post6];

export const PostsContext = React.createContext(posts);
