import React from "react";
import MaterialRadio, {
  RadioProps as MaterialRadioProps,
} from "@material-ui/core/Radio";
import RadioGroup, { RadioGroupProps } from "@material-ui/core/RadioGroup";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import FormLabel, { FormLabelProps } from "@material-ui/core/FormLabel";
import { Shared, SharedProps, ExcludeProps, MetaShared } from "../Shared";

type MetaRadioProps = Pick<SharedProps, "id" | "value"> & {
  name: string;
  label: string;
  muiFormControlLabelOpts?: ExcludeProps<
    FormControlLabelProps,
    "control" | "label"
  >;
  muiRadioOpts?: MaterialRadioProps;
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
        {data.map(({ muiRadioOpts, ...rest }, idx) => (
          <MetaShared<MetaRadioProps>
            {...rest}
            key={idx}
            control={<MaterialRadio {...muiRadioOpts} />}
          />
        ))}
      </RadioGroup>
    </Shared>
  );
}
