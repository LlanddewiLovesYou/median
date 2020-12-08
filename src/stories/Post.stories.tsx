import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Post } from "../components/Post/Post";
import { PostFactory } from "../factories";
import { MemoryRouter as Router } from "react-router-dom";

export default {
  title: "PostPage/Post",
  component: Post,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const samplePost = PostFactory({
  imageUrl:
    "https://thehappypuppysite.com/wp-content/uploads/2019/03/Corgi-Temperament-long.jpg",
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});

export const post = () => <Router>{/* <Post post={samplePost} /> */}</Router>;
