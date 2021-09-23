import React from "react";
import { Form } from ".";

export default {
  title: "Form",
  component: Form,
};

export function SimpleForm({ ...args }: {}) {
  return <Form {...args} />;
}
