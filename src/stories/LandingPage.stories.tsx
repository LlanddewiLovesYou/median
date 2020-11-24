import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { LandingPage } from "../pages/LandingPage/LandingPage";

export default {
  title: "LandingPage/LandingPage",
  component: LandingPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// const Template: Story = (args) => <LandingPage {...args} />;

// export const loggedOut = Template.bind({});
// loggedOut.args = {};

export const landingPage = () => <LandingPage />;
