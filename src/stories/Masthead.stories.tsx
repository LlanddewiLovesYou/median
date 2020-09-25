import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Masthead } from "../components/Masthead/Masthead";

export default {
  title: "Masthead/Masthead",
  component: Masthead,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// const Template: Story = (args) => <Masthead {...args} />;

// export const loggedOut = Template.bind({});
// loggedOut.args = {};

export const anyNameOfStory = () => <Masthead />;
