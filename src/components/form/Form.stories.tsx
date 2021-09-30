import React from "react";
import { Form, FormProps } from ".";

export default {
  title: "Form",
  component: Form,
};

type Inputs = {
  username: string;
  car: string;
  mood: string;
  private: string;
  age: number[];
};

export function SimpleForm({ ...args }: FormProps<Inputs>) {
  return (
    <Form<Inputs>
      {...args}
      submit={{ on: (e, i) => console.log(e, i) }}
      entries={{
        username: {
          initialValue: "",
          input: {
            label: "Input Form",
            helperEl: "Write something",
          },
        },
        car: {
          initialValue: "",
          checkbox: {
            data: [
              "Ferrari",
              { name: "Porsche", muiCheckboxOpts: { disabled: true } },
            ],
            label: "Checkbox Form",
            helperEl: "Pick a car",
          },
        },
        mood: {
          initialValue: "Content",
          radio: {
            data: [{ name: "Happy" }, "Content"],
            label: "Radio Form",
            helperEl: "Pick a mood",
          },
        },
        private: {
          initialValue: "",
          switch: {
            data: ["Private", "Public"],
            label: "Switch Form",
            helperEl: "Switch a value",
          },
        },
        age: {
          initialValue: [],
          select: {
            data: [20, 21, 22, { val: "2" }],
          },
        },
      }}
    />
  );
}
