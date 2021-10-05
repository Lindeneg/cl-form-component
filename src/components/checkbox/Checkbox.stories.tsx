import React from "react";
import { action } from "@storybook/addon-actions";
import { useForm } from "cl-use-form-state";
import { Checkbox, CheckboxProps } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    validEl: { control: "none" },
    errorEl: { control: "none" },
    helperEl: { control: "none" },
    data: { control: "none" },
  },
};

export function CheckboxExample({ ...args }: CheckboxProps) {
  const { inputs, updateInput } = useForm<{
    checkbox: boolean;
  }>((cl) => ({
    checkbox: cl(false, { isValid: true }),
  }));
  return (
    <Checkbox
      {...args}
      data={{
        id: "checkbox",
        val: "Check",
        checked: inputs.checkbox.value,
        onChange: () => {
          const value = !inputs.checkbox.value;
          updateInput("checkbox", value);
          action("onChange")({ value });
        },
      }}
    />
  );
}

export function CheckboxSingleWithOptions() {
  // using library: 'cl-use-form-state'
  const { inputs, updateInput } = useForm<{ private: boolean }>((cl) => ({
    private: cl(false, { isValid: true }),
  }));
  return (
    <Checkbox
      label="Visibility"
      helperEl="Please specify privacy settings"
      data={{
        id: "private",
        val: "Private",
        checked: inputs.private.value,
        onChange: () => updateInput("private", !inputs.private.value),
      }}
    />
  );
}

export function CheckboxMultipleWithOptions() {
  // using library: 'cl-use-form-state'
  const { inputs, updateInput } = useForm<{
    ferrari: boolean;
    mercedes: boolean;
    bill: boolean;
    billie: boolean;
  }>((cl) => ({
    ferrari: cl(false, { isValid: true }),
    mercedes: cl(false, { isValid: true }),
    bill: cl(false, { isValid: true }),
    billie: cl(false, { isValid: true }),
  }));
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Checkbox
        label="Best Car"
        helperEl="You can pick a single option"
        wrapperStyle={{ width: "10rem" }}
        data={[
          {
            id: "ferrari",
            val: "Ferrari",
            checked: inputs.ferrari.value,
            onChange: () => updateInput("ferrari", !inputs.ferrari.value),
            muiCheckboxOpts: { disabled: !!inputs.mercedes.value },
          },
          {
            id: "mercedes",
            val: "Mercedes",
            checked: inputs.mercedes.value,
            onChange: () => updateInput("mercedes", !inputs.mercedes.value),
            muiCheckboxOpts: { disabled: !!inputs.ferrari.value },
          },
        ]}
      />
      <Checkbox
        label="Artist"
        helperEl="You can pick both options"
        wrapperStyle={{ width: "10rem" }}
        validEl={
          <span style={{ color: "#0ca60c" }}>Both amazing musicians!</span>
        }
        valid={inputs.bill.value || inputs.billie.value}
        data={[
          {
            id: "private",
            val: "Bill Evans",
            checked: inputs.bill.value,
            onChange: () => updateInput("bill", !inputs.bill.value),
          },
          {
            id: "billie",
            val: "Billie Holiday",
            checked: inputs.billie.value,
            onChange: () => updateInput("billie", !inputs.billie.value),
          },
        ]}
      />
    </div>
  );
}
