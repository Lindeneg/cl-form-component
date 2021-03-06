import React from "react";
import { useForm } from "cl-use-form-state";
import { Select, SelectProps } from ".";

export default {
  title: "Components/Select ",
  component: Select,
  argTypes: {
    validEl: { control: "none" },
    errorEl: { control: "none" },
    helperEl: { control: "none" },
    type: { control: "none" },
    data: { control: "none" },
    value: { control: "none" },
    id: { control: "none" },
    multiple: { control: "none" },
    onSelectBlur: { control: "none" },
    tagRenderValueCb: { control: "none" },
  },
};

export function SelectExample({ ...args }: SelectProps<"menu", unknown>) {
  return (
    <Select {...args} type="menu" data={["Some Option", "Another Option"]} />
  );
}

export function SelectMultipleWithOptions() {
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
      onSelect={({ target }) =>
        updateInput("selected", target.value as string[])
      }
      multiple
      required
    />
  );
}

export function SelectMultipleWithChip() {
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
      label="Departments"
      helperEl="You can select multiple departments"
      data={["Finance", "Development", "Marketing", "Design"]}
      value={inputs.selected.value}
      onSelectBlur={onTouchHandler}
      onSelect={({ target }) =>
        updateInput("selected", target.value as string[])
      }
      multiple
    />
  );
}
