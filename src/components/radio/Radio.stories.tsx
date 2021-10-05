import React from "react";
import { useForm } from "cl-use-form-state";
import { Radio, RadioProps } from ".";

export default {
  title: "Components/Radio ",
  component: Radio,
  argTypes: {
    validEl: { control: "none" },
    errorEl: { control: "none" },
    helperEl: { control: "none" },
    data: { control: "none" },
    selectedValue: { control: "none" },
    onRadioChange: { control: "none" },
    onRadioBlur: { control: "none" },
  },
};

export function RadioExample({ ...args }: RadioProps) {
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

enum Mood {
  HAPPY,
  CONTENT,
  SAD,
}

export function RadioCustomizedIconAndStyle() {
  // using library: 'cl-use-form-state'
  const { inputs, updateInput } = useForm<{
    mood: Mood;
  }>((cl) => ({
    mood: cl(Mood.HAPPY, { isValid: true }),
  }));
  // customized radio icons
  const radioProps = {
    muiRadioOpts: {
      checkedIcon: (
        <span
          style={{
            display: "block",
            borderRadius: "50%",
            width: 16,
            height: 16,
            backgroundColor: "rgb(220, 0, 78)",
            backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
          }}
        />
      ),
      icon: (
        <span
          style={{
            display: "block",
            borderRadius: "50%",
            width: 16,
            height: 16,
            backgroundColor: "#ccc",
            backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
          }}
        />
      ),
    },
  };
  return (
    <Radio
      label="Mood"
      selectedValue={inputs.mood.value}
      helperEl="Please specify your current mood"
      onRadioChange={({ target }) => updateInput("mood", Number(target.value))}
      muiRadioGroupOpts={{ style: { flexDirection: "row" } }}
      data={[
        {
          ...radioProps,
          id: "happy",
          value: Mood.HAPPY,
        },
        {
          ...radioProps,
          id: "content",
          value: Mood.CONTENT,
        },
        {
          ...radioProps,
          id: "sad",
          value: Mood.SAD,
        },
      ]}
    />
  );
}

export function RadioWithDisabledEntry() {
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
