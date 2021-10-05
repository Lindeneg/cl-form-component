import React from "react";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import { FormLabelProps } from "@material-ui/core/FormLabel";
import FormControlLabel, {
  FormControlLabelProps,
} from "@material-ui/core/FormControlLabel";
import FormHelperText, {
  FormHelperTextProps,
} from "@material-ui/core/FormHelperText";

type ExcludeKeys = "id" | "value" | "onChange" | "onBlur";

export type ExcludeSharedKeys = "valid" | "error";

export type ExcludeProps<
  K extends Record<string, any>,
  T extends keyof K = "",
  M extends "omit" | "partial" = "partial"
> = M extends "partial"
  ? Partial<Omit<K, ExcludeKeys | T>>
  : Omit<K, ExcludeKeys | T>;

export type AdornmentOpts = {
  start?: React.ReactElement | null;
  end?: React.ReactElement | null;
};

export interface InputLabelOpts {
  muiInputLabelOpts?: ExcludeProps<InputLabelProps>;
}

export interface FormLabelOpts {
  muiFormLabelOpts?: ExcludeProps<FormLabelProps, "children">;
}

export type SharedProps = {
  id: string;
  value: unknown;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  valid?: boolean;
  error?: boolean;
  validEl?: string | React.ReactElement;
  errorEl?: string | React.ReactElement;
  helperEl?: string | React.ReactElement;
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  muiFormControlOpts?: Omit<
    FormControlProps,
    "disabled" | "error" | "required" | "fullWidth"
  >;
  muiFormHelperTextOpts?: FormHelperTextProps;
};

type SharedMetaProps = Omit<SharedProps, "id" | "value" | "label"> & {
  labelEl: React.ReactElement;
  children: React.ReactElement;
};

export function Shared({
  children,
  validEl,
  errorEl,
  labelEl,
  fullWidth,
  helperEl = "",
  wrapperClass = "",
  required = false,
  disabled = false,
  valid = false,
  error = false,
  wrapperStyle = {},
  ...rest
}: SharedMetaProps) {
  return (
    <div
      className={wrapperClass}
      style={{ marginTop: "1rem", ...wrapperStyle }}
    >
      <FormControl
        {...rest.muiFormControlOpts}
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
        required={required}
      >
        {labelEl}
        {children}
        <FormHelperText {...rest.muiFormHelperTextOpts}>
          {error && errorEl ? errorEl : valid && validEl ? validEl : helperEl}
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export type MetaSharedProps<T extends Record<string, any>> = {
  name: string;
  control: React.ReactElement<T>;
  value?: unknown;
  muiFormControlLabelOpts?: ExcludeProps<
    FormControlLabelProps,
    "control" | "label" | "value"
  >;
};

export function MetaShared<T extends Record<string, any>>({
  name,
  control,
  value,
  muiFormControlLabelOpts = {},
}: MetaSharedProps<T>) {
  return (
    <FormControlLabel
      {...muiFormControlLabelOpts}
      value={value}
      control={control}
      label={name}
    />
  );
}
