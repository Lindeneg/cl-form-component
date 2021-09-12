import React from "react";
import MaterialCheckbox, {
  CheckboxProps as MaterialCheckboxProps,
} from "@material-ui/core/Checkbox";
import { Shared, SharedProps, ExcludeProps, MetaShared } from "../Shared";
import FormLabel, { FormLabelProps } from "@material-ui/core/FormLabel";
import FormGroup, { FormGroupProps } from "@material-ui/core/FormGroup";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";

type MetaCheckboxProps = Pick<SharedProps, "id" | "value"> & {
  name: string;
  onCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
  muiFormControlLabelOpts?: ExcludeProps<
    FormControlLabelProps,
    "control" | "label"
  >;
  muiCheckboxOpts?: ExcludeProps<MaterialCheckboxProps, "checked" | "name">;
};

export interface CheckboxProps extends Omit<SharedProps, "id" | "value"> {
  data: MetaCheckboxProps | MetaCheckboxProps[];
  muiFormLabelOpts?: ExcludeProps<FormLabelProps, "children">;
  muiFormGroupOpts?: FormGroupProps;
}

export function Checkbox({
  data,
  label = "",
  muiFormLabelOpts = {},
  muiFormGroupOpts = {},
  ...rest
}: CheckboxProps) {
  return (
    <Shared
      {...rest}
      labelEl={<FormLabel {...muiFormLabelOpts}>{label}</FormLabel>}
    >
      <FormGroup {...muiFormGroupOpts}>
        {(() => {
          if (Array.isArray(data)) {
            return data.map(
              (
                { name, muiFormControlLabelOpts, value, ...sharedProps },
                idx
              ) => (
                <MetaShared
                  key={idx}
                  name={name}
                  muiFormControlLabelOpts={muiFormControlLabelOpts}
                  control={
                    <MaterialCheckbox {...sharedProps} checked={!!value} />
                  }
                />
              )
            );
          }
          return (
            <MetaShared<MetaCheckboxProps>
              name={data.name}
              muiFormControlLabelOpts={data.muiFormControlLabelOpts}
              control={
                <MaterialCheckbox
                  {...data.muiCheckboxOpts}
                  id={data.id}
                  value={data.value}
                  checked={!!data.value}
                  onChange={data.onCheckboxChange}
                />
              }
            />
          );
        })()}
      </FormGroup>
    </Shared>
  );
}
