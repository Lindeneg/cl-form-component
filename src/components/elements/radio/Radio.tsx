import React from "react";
import MaterialRadio, {
  RadioProps as MaterialRadioProps,
} from "@mui/material/Radio";
import RadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";
import { FormControlLabelProps } from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { capitalize } from "@mui/material";
import {
  Shared,
  SharedProps,
  ExcludeProps,
  MetaShared,
  FormLabelOpts,
} from "../Shared";

type MetaRadioProps = Pick<SharedProps, "id" | "value"> & {
  name?: string;
  muiFormControlLabelOpts?: ExcludeProps<
    FormControlLabelProps,
    "control" | "label"
  >;
  muiRadioOpts?: ExcludeProps<MaterialRadioProps>;
};

export interface RadioProps
  extends Omit<SharedProps, "id" | "value">,
    FormLabelOpts {
  data: MetaRadioProps[];
  onRadioChange: React.ChangeEventHandler<HTMLInputElement>;
  selectedValue: unknown;
  muiRadioGroupOpts?: ExcludeProps<RadioGroupProps>;
}

export function Radio({
  data,
  onRadioChange,
  selectedValue,
  label = "",
  muiFormLabelOpts = {},
  muiRadioGroupOpts = {},
  ...rest
}: RadioProps) {
  return (
    <Shared
      {...rest}
      labelEl={<FormLabel {...muiFormLabelOpts}>{label}</FormLabel>}
    >
      <RadioGroup
        {...muiRadioGroupOpts}
        value={selectedValue}
        onChange={onRadioChange}
      >
        {data.map(({ id, value, name, muiRadioOpts, ...rest }, idx) => (
          <MetaShared<MetaRadioProps>
            {...rest}
            key={idx}
            name={name ? name : capitalize(id)}
            control={<MaterialRadio {...muiRadioOpts} id={id} value={value} />}
          />
        ))}
      </RadioGroup>
    </Shared>
  );
}
