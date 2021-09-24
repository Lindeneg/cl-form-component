import React from "react";
import { Form, FormProps } from ".";

export default {
  title: "Form",
  component: Form,
};

type Inputs = {
  test: {
    type: number;
    element: "input";
  };
};

export function SimpleForm({ ...args }: {}) {
  return (
    <Form<Inputs>
      {...args}
      entries={{
        test: {
          helperEl: <p>Hello</p>,
          options: { customRule: (v, s) => s.inputs.test.value === v },
          onInputChange: () => null,
        },
      }}
    />
  );
}
