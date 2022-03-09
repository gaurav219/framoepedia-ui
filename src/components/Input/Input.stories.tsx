import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    handleClick: { action: "handleClick" },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryInput.args = {
  primary: true,
  label: "SampleInput",
  backgroundColor: "purple",
  size: 50,
};

export const SecondaryInput = Template.bind({});
SecondaryInput.args = {
  label: "SampleInput",
  size: 30,
};

export const LargeInput = Template.bind({});
LargeInput.args = {
  size: 20,
  label: "SampleInput",
};

export const SmallInput = Template.bind({});
SmallInput.args = {
  size: 10,
  label: "SampleInput",
};
