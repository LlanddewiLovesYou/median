import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { MemoryRouter as Router } from "react-router-dom";

import { CreatePostForm } from "../components/CreatePostForm/CreatePostForm";

export default {
  title: "CreatePostPage/CreatePostForm",
  component: CreatePostForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const createPostForm = () => (
  <Router>
    <CreatePostForm />
  </Router>
);
