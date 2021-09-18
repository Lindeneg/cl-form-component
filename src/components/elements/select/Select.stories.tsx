import React from "react";
import { useForm } from "cl-use-form-state";
import { Select, SelectProps } from "./Select";

export default {
  title: "Select ",
  component: Select,
  argTypes: {
    type: { control: "none" },
    data: { control: "none" },
    value: { control: "none" },
    id: { control: "none" },
  },
};

export function SimpleSelect({ ...args }: SelectProps<"menu">) {
  return (
    <Select {...args} type="menu" data={["Some Option", "Another Option"]} />
  );
}

export function SimpleSelectWithHelperAndLabel({
  label = "Delivery",
  helperEl = "Please choose a delivery option",
  ...args
}: SelectProps<"menu">) {
  return (
    <Select
      {...args}
      label={label}
      helperEl={helperEl}
      data={["Fastest", "Cheapest"]}
    />
  );
}

export function MultipleSelectTagWithValidation() {
  // using library: 'cl-use-form-state'
  const { inputs, updateInput, onTouchHandler } = useForm<{
    selected: string[];
  }>((cl) => ({
    selected: cl([], { minLength: 1, maxLength: 3 }),
  }));
  return (
    <Select
      id="selected"
      label="Favorite cuisines"
      helperEl="Select a minimum one but a maximum of three"
      error={inputs.selected.isTouched && !inputs.selected.isValid}
      type="tag"
      data={["Italian", "French", "Indian", "Nordic", "American"]}
      value={inputs.selected.value || []}
      onSelectBlur={onTouchHandler}
      onSelect={({ target }) => {
        updateInput("selected", target.value as string[]);
        /*
        if (Array.isArray(target.value)) {
          
        } else {
          const newSelectState = [...inputs.selected.value];
          const targetIdx = newSelectState.findIndex((e) => e === target.value);
          if (targetIdx > -1) {
            newSelectState.splice(targetIdx, 1);
          } else {
            newSelectState.push(String(target.value));
          }
          updateInput("selected", newSelectState);
        }
        */
      }}
      multiple
      required
    />
  );
}

export function MultipleSelectChip() {
  // using library: 'cl-use-form-state'
  const { inputs, updateInput, onTouchHandler } = useForm<{
    selected: string[];
  }>((cl) => ({
    selected: cl([]),
  }));
  return (
    <Select
      id="selected"
      type="chip"
      label="Attributes"
      helperEl="Please select three attributes"
      data={["Hello", "There"]}
      value={inputs.selected.value}
      onSelectBlur={onTouchHandler}
      onSelect={({ target }) =>
        updateInput("selected", target.value as string[])
      }
      multiple
    />
  );
}

/*

export function MultipleSelectNative({ ...args }: SelectProps<"menu">) {
  return <Select {...args} data={["Hello", "There"]} />;
}
*/
