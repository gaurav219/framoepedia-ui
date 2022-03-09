import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    handleClick: { action: "handleClick" },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const PrimaryCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryCard.args = {
  primary: true,
  label: "Sample",
  backgroundColor: "purple",
};

export const SecondaryCard = Template.bind({});
SecondaryCard.args = {
  label: "Card",
};

export const LargeCard = Template.bind({});
LargeCard.args = {
  size: "large",
  label: "Card",
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  size: "small",
  label: "Card",
};
