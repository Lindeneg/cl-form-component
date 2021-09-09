import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input, InputProps } from "./Input";

export default {
  title: "Input",
  component: Input,
  description: `Form <input /> element.`,
  argTypes: {
    type: { options: ["text", "number", "password", "email"] },
    onChange: { control: "none" },
    onBlur: { control: "none" },
  },
} as Meta;

const MetaInput: Story<InputProps> = (args) => <Input {...args} />;

export const DefaultInput = MetaInput.bind({});
DefaultInput.args = {};

export const InputWithLabel = MetaInput.bind({});
InputWithLabel.args = {
  label: "Username",
  placeholder: "Enter username..",
};

export const InputWithHelper = MetaInput.bind({});
InputWithHelper.args = {
  label: "Username",
  placeholder: "Enter username..",
  helperText: "username must be between 4-12 characters",
};

export const DarkInputWithValidValue = MetaInput.bind({});
DarkInputWithValidValue.args = {
  variant: "dark",
  label: "Username",
  helperText: "Username must be between 4-12 characters",
  value: "lindeneg",
  isValid: true,
};
DarkInputWithValidValue.parameters = {
  backgrounds: { default: "dark" },
};

export const InputWithValidFeedback = MetaInput.bind({});
InputWithValidFeedback.args = {
  label: "Username",
  helperText: "Username must be between 4-12 characters",
  value: "lindeneg",
  isValid: true,
  validFeedback: "Looks good!",
};

export const InputWithInvalidValue = MetaInput.bind({});
InputWithInvalidValue.args = {
  label: "Username",
  helperText: "Username must be between 4-12 characters",
  value: "christian lindeneg",
  isInvalid: true,
};

export const DarkInputWithInvalidFeedback = MetaInput.bind({});
DarkInputWithInvalidFeedback.args = {
  variant: "dark",
  label: "Username",
  helperText: "Username must be between 4-12 characters",
  value: "christian lindeneg",
  isInvalid: true,
  invalidFeedback: "Please enter a valid username.",
};
DarkInputWithInvalidFeedback.parameters = {
  backgrounds: { default: "dark" },
};
