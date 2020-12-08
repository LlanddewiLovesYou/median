import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ByLine } from "../components/ByLine/ByLine";
import { PostFactory } from "../factories";

export default {
  title: "PostPage/ByLine",
  component: ByLine,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const samplePost = PostFactory({
  readTime: 10,
  imageUrl:
    "https://thehappypuppysite.com/wp-content/uploads/2019/03/Corgi-Temperament-long.jpg",
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});

export const byLine = () => <ByLine post={samplePost} />;
