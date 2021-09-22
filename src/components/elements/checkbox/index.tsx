import React from "react";
import MaterialCheckbox, {
  CheckboxProps as MaterialCheckboxProps,
} from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup, { FormGroupProps } from "@material-ui/core/FormGroup";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import {
  Shared,
  SharedProps,
  ExcludeProps,
  MetaShared,
  FormLabelOpts,
} from "../Shared";

export type MetaCheckboxProps = Pick<SharedProps, "id"> & {
  checked: boolean;
  name: string;
  onCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
  muiFormControlLabelOpts?: ExcludeProps<
    FormControlLabelProps,
    "control" | "label"
  >;
  muiCheckboxOpts?: ExcludeProps<MaterialCheckboxProps, "checked" | "name">;
};

export interface CheckboxProps
  extends Omit<SharedProps, "id" | "value">,
    FormLabelOpts {
  data: MetaCheckboxProps | MetaCheckboxProps[];
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
            return data.map((entry, idx) => (
              <MetaShared
                key={idx}
                name={entry.name}
                muiFormControlLabelOpts={entry.muiFormControlLabelOpts}
                control={
                  <MaterialCheckbox
                    {...entry.muiCheckboxOpts}
                    id={entry.id}
                    onChange={entry.onCheckboxChange}
                    checked={entry.checked}
                    value={entry.checked}
                  />
                }
              />
            ));
          }
          return (
            <MetaShared<MetaCheckboxProps>
              name={data.name}
              muiFormControlLabelOpts={data.muiFormControlLabelOpts}
              control={
                <MaterialCheckbox
                  {...data.muiCheckboxOpts}
                  id={data.id}
                  checked={data.checked}
                  value={data.checked}
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
