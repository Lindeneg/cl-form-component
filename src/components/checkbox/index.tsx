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
  ExcludeSharedKeys,
  MetaShared,
  FormLabelOpts,
} from "../Shared";

export type MetaCheckboxProps = Pick<SharedProps, "id"> & {
  checked: boolean;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler;
  muiFormControlLabelOpts?: ExcludeProps<
    FormControlLabelProps,
    "control" | "label"
  >;
  muiCheckboxOpts?: ExcludeProps<MaterialCheckboxProps, "checked" | "name">;
  controlComponent?: React.ReactElement;
};

type ExcludedMetaProps = ExcludeProps<
  MetaCheckboxProps,
  "checked" | "id",
  "omit"
>;

export interface CheckboxProps
  extends Omit<SharedProps, "id" | "value">,
    FormLabelOpts {
  data: MetaCheckboxProps | MetaCheckboxProps[];
  muiFormGroupOpts?: FormGroupProps;
}

export type CheckboxFormProps = Omit<
  CheckboxProps,
  "data" | ExcludeSharedKeys
> & {
  data: ExcludedMetaProps | ExcludedMetaProps[];
};

export function Checkbox({
  data,
  label = "",
  muiFormLabelOpts = {},
  muiFormGroupOpts = {},
  ...rest
}: CheckboxProps) {
  let formGroupJsx: JSX.Element | JSX.Element[];
  if (Array.isArray(data)) {
    formGroupJsx = data.map((entry, idx) => (
      <MetaShared
        key={idx}
        name={entry.name}
        muiFormControlLabelOpts={entry.muiFormControlLabelOpts}
        control={
          entry.controlComponent || (
            <MaterialCheckbox
              {...entry.muiCheckboxOpts}
              id={entry.id}
              onChange={entry.onChange}
              onBlur={entry.onBlur}
              checked={entry.checked}
              value={entry.checked}
            />
          )
        }
      />
    ));
  } else {
    formGroupJsx = (
      <MetaShared<MetaCheckboxProps>
        name={data.name}
        muiFormControlLabelOpts={data.muiFormControlLabelOpts}
        control={
          data.controlComponent || (
            <MaterialCheckbox
              {...data.muiCheckboxOpts}
              id={data.id}
              checked={data.checked}
              value={data.checked}
              onChange={data.onChange}
              onBlur={data.onBlur}
            />
          )
        }
      />
    );
  }
  return (
    <Shared
      {...rest}
      labelEl={<FormLabel {...muiFormLabelOpts}>{label}</FormLabel>}
    >
      <FormGroup {...muiFormGroupOpts}>{formGroupJsx}</FormGroup>
    </Shared>
  );
}
