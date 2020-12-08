import React from "react";
import { PostFactory } from "../factories";

// const post1 = PostFactory({
//   imageUrl: "https://photolemur.com/uploads/blog/unnamed.jpg",
//   id: "this-article-has-a-title-1",
//   title: "This article has a title.",
//   subtitle:
//     "This is a subititle or sometimes a short summary that gives you a preview of the article",
// });
// const post2 = PostFactory({
//   imageUrl:
//     "https://thehappypuppysite.com/wp-content/uploads/2019/03/Corgi-Temperament-long.jpg",
//   id: "Corgos-the-bestest-goodest-bois",
//   title: "Corgos: The bestest, goodest bois.",
//   subtitle: "Are corgos the best? Yes. Why would you even have to ask?",
// });
// const post3 = PostFactory({
//   id: "this-article-has-a-title-3",
//   title: "This article has a title.",
//   subtitle:
//     "This is a subititle or sometimes a short summary that gives you a preview of the article",
// });
// const post4 = PostFactory({
//   id: "this-article-has-a-title-4",
//   title: "This article has a title.",
//   subtitle:
//     "This is a subititle or sometimes a short summary that gives you a preview of the article",
// });
// const post5 = PostFactory({
//   id: "this-article-has-a-title-5",
//   title: "This article has a title.",
//   subtitle:
//     "This is a subititle or sometimes a short summary that gives you a preview of the article",
// });
// const post6 = PostFactory({
//   id: "this-article-has-a-title-6",
//   title: "This article has a title.",
//   subtitle:
//     "This is a subititle or sometimes a short summary that gives you a preview of the article",
// });
// export const posts = [post2, post1, post3, post4, post5, post6];

export const PostsContext = React.createContext({
  posts: [],
  getPosts: () => {},
});
