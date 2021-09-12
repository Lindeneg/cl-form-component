import React from "react";
import { useForm } from "cl-use-form-state";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export function SingleCheckbox({ ...args }: CheckboxProps) {
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
        name: "Check",
        value: inputs.checkbox.value,
        onCheckboxChange: () => updateInput("checkbox", !inputs.checkbox.value),
      }}
    />
  );
}

export function SingleCheckboxWithLabelAndHelper() {
  const { inputs, updateInput } = useForm<{ private: boolean }>((cl) => ({
    private: cl(false, { isValid: true }),
  }));
  return (
    <Checkbox
      label="Visibility"
      helperEl="Please specify privacy settings"
      data={{
        id: "private",
        name: "Private",
        value: inputs.private.value,
        onCheckboxChange: () => updateInput("private", !inputs.private.value),
      }}
    />
  );
}

export function MultipleCheckboxesWithCustomIcon() {
  const { inputs, updateInput } = useForm<{ private: boolean }>((cl) => ({
    private: cl(false, { isValid: true }),
  }));
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Checkbox
        label="Visibility"
        helperEl="Please specify privacy settings"
        data={[
          {
            id: "private",
            name: "Private",
            value: inputs.private.value,
            onCheckboxChange: () =>
              updateInput("private", !inputs.private.value),
          },
          {
            id: "private",
            name: "Private",
            value: inputs.private.value,
            onCheckboxChange: () =>
              updateInput("private", !inputs.private.value),
          },
        ]}
      />
      <Checkbox
        label="Visibility"
        helperEl="Please specify privacy settings"
        data={[
          {
            id: "private",
            name: "Private",
            value: inputs.private.value,
            onCheckboxChange: () =>
              updateInput("private", !inputs.private.value),
          },
          {
            id: "private",
            name: "Private",
            value: inputs.private.value,
            onCheckboxChange: () =>
              updateInput("private", !inputs.private.value),
          },
        ]}
      />
    </div>
  );
}
