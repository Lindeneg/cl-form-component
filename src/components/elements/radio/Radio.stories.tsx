import React from "react";
import { useForm } from "cl-use-form-state";
import { Radio, RadioProps } from "./Radio";

export default {
  title: "Radio ",
  component: Radio,
};

export function SingleRadios({ ...args }: RadioProps) {
  const { inputs, updateInput } = useForm<{
    checkbox: boolean;
  }>((cl) => ({
    checkbox: cl(false, { isValid: true }),
  }));
  return <Radio {...args} />;
}
