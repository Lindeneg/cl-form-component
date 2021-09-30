import React from "react";
import MaterialRadio, {
  RadioProps as MaterialRadioProps,
} from "@material-ui/core/Radio";
import RadioGroup, { RadioGroupProps } from "@material-ui/core/RadioGroup";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { capitalize } from "@material-ui/core";
import {
  Shared,
  SharedProps,
  ExcludeProps,
  ExcludeSharedKeys,
  MetaShared,
  FormLabelOpts,
} from "../Shared";

export type MetaRadioProps = Pick<SharedProps, "id" | "value"> & {
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
  selectedValue: unknown;
  onRadioChange: React.ChangeEventHandler<HTMLInputElement>;
  onRadioBlur?: React.FocusEventHandler<HTMLInputElement>;
  muiRadioGroupOpts?: ExcludeProps<RadioGroupProps>;
}

export type RadioFormProps = Omit<
  RadioProps,
  "onRadioChange" | "selectedValue" | "data" | ExcludeSharedKeys
> & {
  data: Array<
    string | (Omit<MetaRadioProps, "id" | "value" | "name"> & { name: string })
  >;
};

export function Radio({
  data,
  onRadioChange,
  onRadioBlur,
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
        onBlur={onRadioBlur}
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
