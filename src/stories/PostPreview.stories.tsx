import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PostPreview } from "../components/PostPreview/PostPreview";
import { PostFactory } from "../factories";

export default {
  title: "PostIndexPage/PostPreview",
  component: PostPreview,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// const Template: Story = (args) => <Masthead {...args} />;

// export const loggedOut = Template.bind({});
// loggedOut.args = {};
const post = PostFactory({
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});

export const postPreview = () => <PostPreview post={post} />;
