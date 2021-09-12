import React from "react";
import { useForm } from "cl-use-form-state";
import { Radio, RadioProps } from "./Radio";

export default {
  title: "Radio ",
  component: Radio,
};

export function SingleRadios({ data = [], ...args }: RadioProps) {
  return <Radio {...args} data={data} />;
}
