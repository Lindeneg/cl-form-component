import React from "react";
import { useForm } from "cl-use-form-state";
import { Radio, RadioProps } from ".";

export default {
  title: "Components/Radio ",
  component: Radio,
};

export function DuoRadios({ ...args }: RadioProps) {
  return (
    <Radio
      {...args}
      data={[
        {
          id: "some-option",
          value: "some-value",
        },
        {
          id: "another-option",
          name: "Another option",
          value: "another-value",
        },
      ]}
    />
  );
}

export function MultipleRadiosWithLabelAndHelperAndDisabledEntry() {
  enum Mood {
    HAPPY,
    CONTENT,
    SAD,
  }
  // using library: 'cl-use-form-state'
  const { inputs, updateInput } = useForm<{
    mood: Mood;
  }>((cl) => ({
    mood: cl(Mood.HAPPY, { isValid: true }),
  }));
  return (
    <Radio
      label="Mood"
      selectedValue={inputs.mood.value}
      helperEl="Please specify your current mood"
      onRadioChange={({ target }) => updateInput("mood", Number(target.value))}
      data={[
        {
          id: "happy",
          value: Mood.HAPPY,
        },
        {
          id: "content",
          value: Mood.CONTENT,
        },
        {
          id: "sad",
          value: Mood.SAD,
          muiRadioOpts: { disabled: true },
        },
      ]}
    />
  );
}