import React from "react";
import { Form, FormProps } from ".";

export default {
  title: "Form",
  component: Form,
};

type Inputs = {
  username: string;
  car: string;
};

export function SimpleForm({ ...args }: FormProps<Inputs>) {
  return (
    <Form<Inputs>
      {...args}
      onSubmit2={(e, i) => console.log(e, i)}
      entries={{
        username: {
          initialValue: "",
          input: {
            label: "Hello",
          },
        },
        car: {
          initialValue: "",
          checkbox: {
            data: [{ name: "Something" }, { name: "Else" }],
          },
        },
      }}
    />
  );
}
