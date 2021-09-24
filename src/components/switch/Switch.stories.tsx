import React from "react";
import { useForm } from "cl-use-form-state";
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

export function SingleSwitch({ ...args }: SwitchProps) {
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
        name: "Switch " + (inputs.switch.value ? "On" : "Off"),
        checked: inputs.switch.value,
        onChange: () => updateInput("switch", !inputs.switch.value),
      }}
    />
  );
}

export function SingleSwitchWithLabelAndHelper() {
  // using library: 'cl-use-form-state'
  const { inputs, updateInput } = useForm<{ private: boolean }>((cl) => ({
    private: cl(false, { isValid: true }),
  }));
  return (
    <Switch
      label="Visibility"
      helperEl="Toggle privacy settings"
      data={{
        id: "private",
        name: "Private",
        checked: inputs.private.value,
        onChange: () => updateInput("private", !inputs.private.value),
      }}
    />
  );
}
