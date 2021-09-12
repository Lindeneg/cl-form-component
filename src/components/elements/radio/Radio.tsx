import React from "react";
import MaterialRadio, {
  RadioProps as MaterialRadioProps,
} from "@material-ui/core/Radio";
import RadioGroup, { RadioGroupProps } from "@material-ui/core/RadioGroup";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import FormLabel, { FormLabelProps } from "@material-ui/core/FormLabel";
import { capitalize } from "@material-ui/core";
import { Shared, SharedProps, ExcludeProps, MetaShared } from "../Shared";

type MetaRadioProps = Pick<SharedProps, "id" | "value"> & {
  muiFormControlLabelOpts?: ExcludeProps<
    FormControlLabelProps,
    "control" | "label"
  >;
  muiRadioOpts?: ExcludeProps<MaterialRadioProps>;
};

export interface RadioProps extends Omit<SharedProps, "id" | "value"> {
  data: MetaRadioProps[];
  onRadioChange: React.ChangeEventHandler<HTMLInputElement>;
  selectedValue: unknown;
  muiFormLabelOpts?: ExcludeProps<FormLabelProps, "children">;
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
        {data.map(({ id, value, muiRadioOpts, ...rest }, idx) => (
          <MetaShared<MetaRadioProps>
            {...rest}
            key={idx}
            name={capitalize(id)}
            control={<MaterialRadio {...muiRadioOpts} id={id} value={value} />}
          />
        ))}
      </RadioGroup>
    </Shared>
  );
}
