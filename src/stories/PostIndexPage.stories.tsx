import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter as Router } from "react-router-dom";

import { PostIndexPage } from "../pages/PostIndexPage/PostIndexPage";

export default {
  title: "PostIndexPage",
  component: PostIndexPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const postIndexPage = () => (
  <Router>
    <PostIndexPage />;
  </Router>
);
