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
      header="Form Header"
      wrapperStyle={{ display: "flex", flexDirection: "column" }}
      onFormSubmit={(e, i) => console.log(e, i)}
      entries={{
        username: {
          initialValue: "",
          validation: {
            minLength: 1,
          },
          input: {
            wrapperStyle: { marginTop: "1rem", marginBottom: "2rem" },
            fullWidth: true,
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
            wrapperStyle: { display: "inline-flex", justifyContent: "center" },
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
            type: "chip",
            data: [20, 21, 22, { val: "2" }],
          },
        },
      }}
    />
  );
}
