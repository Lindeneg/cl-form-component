import React from "react";
import { useForm } from "cl-use-form-state";
import { action } from "@storybook/addon-actions";
import { Switch, SwitchProps } from ".";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    validEl: { control: "none" },
    errorEl: { control: "none" },
    helperEl: { control: "none" },
    data: { control: "none" },
  },
};

export function SwitchExample({ ...args }: SwitchProps) {
  const { inputs, updateInput } = useForm<{
    switch: boolean;
  }>((cl) => ({
    switch: cl(false, { isValid: true }),
  }));
  return (
    <Switch
      {...args}
      data={{
        id: "switch",
        val: "switch",
        text: "Switch " + (inputs.switch.value ? "On" : "Off"),
        checked: inputs.switch.value,
        onChange: () => {
          const value = !inputs.switch.value;
          updateInput("switch", value);
          action("onChange")({ value });
        },
      }}
    />
  );
}

export function SwitchesWithOptions() {
  // using library: 'cl-use-form-state'
  const { inputs, updateInput } = useForm<{ private: boolean }>((cl) => ({
    private: cl(false, { isValid: true }),
  }));
  return (
    <Switch
      label="Visibility"
      helperEl="Toggle privacy settings"
      data={[
        {
          id: "private",
          val: "Private",
          checked: inputs.private.value,
          onChange: () => updateInput("private", true),
        },
        {
          id: "private",
          val: "Public",
          checked: !inputs.private.value,
          onChange: () => updateInput("private", false),
        },
      ]}
    />
  );
}

export function SwitchesWithFlexRow() {
  // using library: 'cl-use-form-state'
  const { inputs, updateInput } = useForm<{ private: boolean; draft: boolean }>(
    (cl) => ({
      private: cl(false, { isValid: true }),
      draft: cl(false, { isValid: true }),
    })
  );
  return (
    <Switch
      label="Post Settings"
      muiFormGroupOpts={{ style: { flexDirection: "row" } }}
      data={[
        {
          id: "private",
          val: "Private",
          checked: inputs.private.value,
          onChange: () => updateInput("private", !inputs.private.value),
        },
        {
          id: "private",
          val: "Draft",
          checked: inputs.draft.value,
          onChange: () => updateInput("draft", !inputs.draft.value),
        },
      ]}
    />
  );
}
